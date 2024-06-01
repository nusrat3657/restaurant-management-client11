import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import NavBar from '../../NavBar/NavBar';

const AddFood = () => {

    const { user } = useContext(AuthContext)

    const handleAddFood = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const food = form.food.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const purchaseCount = parseInt(0);
        const country = form.country.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newFood = { name, email, food, category, quantity, price, purchaseCount, country, description, photo }
        // console.log(newFood);

        // send data to the server
        fetch('https://restaurant-management-server-flame-eight.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Food Added Successfully",
                        icon: "success",
                        confirmButtonText: 'Cool'
                    });
                }
            })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-amber-500/20 lg:px-24 px-6 lg:py-16 py-6">
                <h2 className="text-3xl font-bold mb-10 text-center ">Add Food</h2>
                <form onSubmit={handleAddFood}>
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
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text  font-bold">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="food" placeholder="Food Name" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Food Category" className="input input-bordered w-full" />
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
                                <input type="text" name="quantity" placeholder="Food Quantity" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Food Price" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Purchase Count</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="purchaseCount" placeholder="" disabled className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Food Origin</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" placeholder="Food Origin(country)" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Food Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Food Image" className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <label className="input-group">
                                <textarea type="text" name="description" placeholder="Add a Short Description" className="input input-bordered w-full h-20 p-2" />
                            </label>

                        </div>
                    </div>
                    <input type="submit" value="ADD" className="btn btn-block bg-amber-500/90 text-white text-lg py-2" />
                </form>
            </div>
        </div>
    );
};

export default AddFood;