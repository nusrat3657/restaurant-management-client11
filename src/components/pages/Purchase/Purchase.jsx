import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Purchase = () => {
    const foodData = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleFoodPurchase = event => {
        event.preventDefault();

        const form = event.target;

        const food = form.food.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const email = form.email.value;
        const date = new Date();

        const purchase = {
            foodName: food,
            price: price,
            quantity: quantity,
            customerName: name,
            email,
            date
        }

        console.log(purchase);

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Food Purchase Successfully",
                    icon: "success",
                    confirmButtonText: 'Cool'
                });
            }
        })

    }
    return (
        <div className="max-w-6xl mx-auto my-10">
            <Helmet><title>Dine Genius | Purchase</title></Helmet>
            <Link to={`/details/${foodData._id}`}><button className="flex items-center gap-3 font-bold"><AiOutlineArrowLeft /> Go Back</button></Link>
            <h2>Orders: {foodData.food || foodData.food_name}</h2>
            <div className="bg-amber-500/20 lg:px-24 px-6 lg:py-16 py-6">
                <h2 className="text-3xl font-bold mb-10 text-center ">Purchase Item: ({foodData.food || foodData.food_name})</h2>
                <form onSubmit={handleFoodPurchase}>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text  font-bold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="User Name" value={user?.displayName} className="input input-bordered w-full" disabled />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="User Email" value={user?.email} disabled className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className=" mb-8">
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text  font-bold">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="food" placeholder="Food Name" defaultValue={foodData.food || foodData.food_name} className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text  font-bold">Date</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="date" placeholder="Food Name" defaultValue={foodData.date} className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Food Quantity" defaultValue={foodData.quantity} className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Food Price" defaultValue={foodData.price} className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    <input type="submit" value="Purchase" className="btn btn-block bg-amber-500/90 text-white text-lg py-2" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;