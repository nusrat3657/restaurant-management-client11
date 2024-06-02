/* eslint-disable react/jsx-key */
import { Helmet } from "react-helmet-async";
import NavBar from "../../NavBar/NavBar";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const MyOrderedFoods = () => {
    const { user } = useContext(AuthContext)
    const orderedData = useLoaderData();
    const remaining = orderedData.filter(ordered => ordered.CustomerEmail === user.email);
    console.log(remaining);
    const [orders, setOrders] = useState(orderedData);
    // eslint-disable-next-line no-unused-vars
    const [purchase, setPurchase] = useState([]);

    const url = `https://restaurant-management-server-flame-eight.vercel.app/purchase?email=${user?.CustomerEmail}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPurchase(data);
            })
    }, [url]);

    // console.log(purchase);

    const handleDelete = _id => {
        // console.log(_id);
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
                fetch(`https://restaurant-management-server-flame-eight.vercel.app/purchase/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added food has been deleted.",
                                icon: "success"
                            });
                            const remaining = orders.filter(ord => ord._id !== _id);
                            setOrders(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet><title>Dine Genius | My Ordered Food</title></Helmet>
            <NavBar></NavBar>
            <div className="my-10 text-center space-y-3">
                <h2 className="text-3xl font-bold">My Ordered Foods</h2>
                <hr />
                <p>User Name: {user.displayName}</p>
                <p>User Email: {user.email}</p>
                <p>Ordered Items: <span className="font-bold">{remaining.length}</span></p>
            </div>
            <hr />
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Food Owner</th>
                            <th>Added Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            remaining.map(order =>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.photo} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{order.food}</div>
                                    </td>
                                    <td>{order.category}</td>
                                    <td>${order.price}</td>
                                    <td>{order.name}</td>
                                    <td className="font-bold">{order.date}</td>

                                    <button
                                        onClick={() => handleDelete(order._id)}
                                        className="btn btn-ghost bg-red-600 text-white  btn-s ml-4">Delete</button>
                                </tr>
                            )
                        }

                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );
};

export default MyOrderedFoods;