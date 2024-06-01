import { useContext, useState, } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
// import { toast } from "react-toastify";

const Purchase = () => {
    const foodData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [currentPurchaseCount, setCurrentPurchaseCount] = useState(foodData.purchaseCount || 0);



    const handleFoodPurchase = event => {
        event.preventDefault();

        const form = event.target;

        const food = form.food.value;
        const price = form.price.value;
        const country = form.country.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const date = new Date();
        const description = form.description.value;
        const purchaseCount = parseInt(form.purchaseCount.value);

        if (quantity === 0) {
            Swal.fire({
                title: "Error!",
                text: "This item is not available for purchase.",
                icon: "error",
                confirmButtonText: 'OK'
            });
            return;
        }

        if (purchaseCount >= quantity) {
            Swal.fire({
                title: "Error!",
                text: "You cannot purchase more than the available quantity.",
                icon: "error",
                confirmButtonText: 'OK'
            });
            return;
        }

        if (user?.email === foodData.email) {
            Swal.fire({
                title: "Error!",
                text: "You cannot purchase your own added food items.",
                icon: "error",
                confirmButtonText: 'OK'
            });
            return;
        }


        let currentQuantity = parseInt(quantity);
        // let updatedPurchaseCount = parseInt(purchaseCount);


        if (!isNaN(currentQuantity) && currentQuantity > 0) {
            // Decrement the quantity by one
            currentQuantity--;

            // Update the quantity input value
            form.quantity.value = currentQuantity;
        }
            // currentCount = + 1;

        // if (!isNaN(currentCount)) {
        //     // currentCount = 0; // Set a default value if currentCount is NaN
        //     currentCount++;
        // }
        // currentCount++;
        const updatedPurchaseCount = currentPurchaseCount + 1;

        const purchase = {
            food: food,
            price: price,
            quantity: currentQuantity,
            customerName: name,
            CustomerEmail: email,
            name: foodData.name,
            email: foodData.email,
            category,
            country,
            description,
            date,
            photo,
            purchaseCount: updatedPurchaseCount 
        }

        // console.log(purchase);

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Food Purchase Successfully",
                        icon: "success",
                        confirmButtonText: 'Cool'
                    });
                    // purchase.purchaseCount++;
                }
                // else if (user?.email = CustomerEmail) return toast.error('Don’t let the user purchase his/her own added food items.')
            })

        fetch(`https://restaurant-management-server-flame-eight.vercel.app/${foodData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Success!",
                        text: "Food Updated Successfully",
                        icon: "success",
                        confirmButtonText: 'Cool'
                    });
                    // purchase.purchaseCount++;
                    setCurrentPurchaseCount(updatedPurchaseCount);
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
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">purchase Count</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="purchaseCount" placeholder="" defaultValue={foodData.purchaseCount} className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text  font-bold">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="food" placeholder="Food Name" defaultValue={foodData.food} className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text  font-bold">Date</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="date" placeholder="Current Date" value={foodData.date} className="input input-bordered w-full" />
                            </label>

                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Food Quantity" defaultValue={foodData.quantity} className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Food Category" defaultValue={foodData.category} className="input input-bordered w-full" />
                            </label>

                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text  font-bold">Country</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" placeholder="Country" value={foodData.country} className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>

                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Food Price" defaultValue={foodData.price} className="input input-bordered w-full" />
                            </label>

                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text  font-bold">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="URL" value={foodData.photo} className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <label className="input-group">
                                <textarea type="text" name="description" placeholder="Add a Short Description" className="input input-bordered w-full h-20 p-2" value={foodData.description} />
                            </label>

                        </div>
                    </div>

                    <input disabled={foodData.quantity == 0} type="submit" value="Purchase" className="btn btn-block bg-amber-500/90 text-white text-lg py-2" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;