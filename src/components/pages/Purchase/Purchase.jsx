import { Helmet } from "react-helmet-async";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const Purchase = () => {
    const foodData = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto my-10">
            <Helmet><title>Dine Genius | Purchase</title></Helmet>
            <Link to={`/details/${foodData._id}`}><button className="flex items-center gap-3 font-bold"><AiOutlineArrowLeft /> Go Back</button></Link>
            <h2>Purchase: {foodData.food || foodData.food_name}</h2>
        </div>
    );
};

export default Purchase;