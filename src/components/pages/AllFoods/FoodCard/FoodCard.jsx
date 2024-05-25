/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const {_id, photo, food_image, food_name, food_category, category,  price} = food;
    return (
        <div className="rounded-xl lg:w-[350px] border-2 border-black lg:p-8 shadow-xl md:p-5 p-6 lg:hover:scale-105 animate__animated animate__zoomIn">
            <figure><img className=" rounded-xl" src={photo || food_image} alt="" /></figure>
            <div className="">
                <h2 className="text-2xl font-bold mt-4 mb-2">{food_name}<span className="font-none text-sm"></span></h2>
                <hr />
                <p className="font-semibold mt-2">Category: <span className="font-bold">{food_category || category}</span></p>
                <p className="font-semibold mt-2">Price: <span className="font-bold">${price}</span></p>
                <div className="flex justify-end pt-4">
                    <Link to={`/details/${_id}`}><button className="btn text-white bg-amber-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;