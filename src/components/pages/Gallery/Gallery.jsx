/* eslint-disable react/no-unknown-property */
import { Helmet } from "react-helmet-async";
import NavBar from "../../NavBar/NavBar";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

export const Gallery = () => {

    const { user } = useContext(AuthContext);
    const foodData = useLoaderData();

    const handleAddFood = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const feedback = form.feedback.value;

        const newFood = { name, photo, feedback };
        console.log(newFood);

        // swnd data to the server
        fetch('http://localhost:5000/addedFoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Spot Added Successfully",
                        icon: "success",
                        confirmButtonText: 'Cool'
                    });
                }
            })
    }

    return (
        <div>
            <Helmet><title>Dine Genius | Gallery</title></Helmet>
            <NavBar></NavBar>
            <div className="relative w-full h-[250px]  my-5">
                <img src="https://i.ibb.co/jbqqB4m/top-view-eid-al-fitr-celebration-with-delicious-food-2.jpg" className="w-full h-[280px]" />
                <div className="absolute items-center w-full h-[280px] left-0 top-0 bg-gradient-to-r from-[#151515]/70 to-[#151515]/0">
                    <div className="text-white pl-12 text-center mt-24">
                        <h2 className="text-6xl font-bold mb-2">Gallery</h2>
                        <p>Gallery | Foods</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-20">
                {foodData.map(food => (
                    <div key={food._id} className="relative group/item hover:bg-[#151515]/60 rounded-lg">
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                            src={food.food_image || food.photo}
                            alt="gallery-photo"
                        />
                        <div className="absolute -my-40 h-40 w-full hover max-w-full rounded-lg object-cover object-center group/edit invisible hover:bg-[#151515]/60 group-hover/item:visible">
                            <div className="group-hover/edit:text-white  text-center mt-12">
                                <h2 className="text-2xl font-bold ">{food.name}</h2>
                                <p>{food.feedback}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn bg-amber-500 text-white " onClick={() => document.getElementById('my_modal_5').showModal()}>Add Food</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="relative p-4 w-full max-w-md max-h-full">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Add New Food
                                    </h3>
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <span className="sr-only">Close modal</span>
                                </div>

                                <form onSubmit={handleAddFood} className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                            <input type="text" name="name" id="name" value={user?.displayName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Username" required="" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                                            <input type="text" name="photo" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Image URL" required="" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feedback or Experience</label>
                                            <textarea id="description" name="feedback" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Write product description here"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="text-white inline-flex items-center bg-amber-500 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path></svg>
                                        Add new food
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Gallery;