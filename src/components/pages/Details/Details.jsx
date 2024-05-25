import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import 'animate.css';


const Details = () => {
    const foodData = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto my-10">
            <Helmet><title>Dine Genius | Details</title></Helmet>
            <Link to="/all"><button className="flex items-center gap-3 font-bold"><AiOutlineArrowLeft />Go Back</button></Link>
            <div className="relative w-full h-[250px]  my-5">
                <img src="https://i.ibb.co/jbqqB4m/top-view-eid-al-fitr-celebration-with-delicious-food-2.jpg" className="w-full h-[280px]" />
                <div className="absolute items-center w-full h-[280px] left-0 top-0 bg-gradient-to-r from-[#151515]/70 to-[#151515]/0">
                    <div className="text-white pl-12 text-center mt-24">
                        <h2 className="text-6xl font-bold mb-2">Single Food</h2>
                        <p>Food Details | {foodData.food_name}</p>
                    </div>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 gap-10 my-14 lg:mx-0 mx-5">
                <div className="bg-amber-500/20 rounded-xl p-10 py-20 animate__animated animate__rotateInDownLeft">
                    <img className="rounded-xl" src={foodData.food_image} alt="" />
                </div>
                <div className="animate__animated animate__rotateInDownRight">
                    <h2 className="text-amber-bg-amber-500 text-4xl font-bold lg:mt-0 mt-8">{foodData.food_name}</h2>
                    <p className="my-5 text-lg">{foodData.description}</p>
                    <hr />

                    <p className="my-3 text-lg "><span className="font-bold mr-2">Category: </span> {foodData.food_category}</p>
                    <hr />
                    <p className="my-3 text-lg "><span className="font-bold mr-2">Made By: </span> {foodData.made_by}</p>
                    <hr />
                    <p className="my-3 text-lg"><span className="font-bold mr-2">Food Origin: </span>{foodData.food_origin}</p>
                    <hr />
                    <p className="my-3 text-lg "><span className="font-bold mr-2">Price: </span>${foodData.price}</p>
                    <hr />
                    <div>
                        <Link to={`/purchase/${foodData._id}`}><button className="btn border-2 bg-amber-500 text-white mt-4 text-lg">Purchase</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;