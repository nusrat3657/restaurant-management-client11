/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import NavBar from "../../NavBar/NavBar";
import { Helmet } from "react-helmet-async";


const MyAddedFood = () => {
    const { user } = useContext(AuthContext);
    const foodData = useLoaderData();
    const remaining = foodData.filter(food => food.email === user.email);
    console.log(remaining);
    const [foods, setFoods] = useState(foodData);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/foods/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added food has been deleted.",
                                icon: "success"
                            });
                            const remaining = foods.filter(food => food._id !== _id);
                            setFoods(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet><title>Dine Genius | My Added Food</title></Helmet>
            <NavBar></NavBar>
            <div className="my-10 text-center space-y-3">
                <h2 className="text-3xl font-bold">My Added Foods</h2>
                <hr />
                <p>User Name: {user.displayName}</p>
                <p>User Email: {user.email}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Category</th>
                            <th>Country</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            remaining.map(food => <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={food.photo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{food.food}</div>
                                </td>
                                <td>{food.category}</td>
                                <td>{food.country}</td>
                                <td className="font-bold">${food.price}</td>
                                <th className="flex">
                                    <Link to={`/update/${food._id}`}>
                                        <button className="btn btn-ghost bg-amber-500 text-white btn-s">Update</button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(food._id)}
                                        className="btn btn-ghost bg-red-600 text-white  btn-s ml-4">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div >
    );
};

export default MyAddedFood;