import { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import FoodCard from "./FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";

const AllFoods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div>
            <Helmet><title>Dine Genius | All Food</title></Helmet>
            <NavBar></NavBar>
            <label className="input input-bordered flex items-center gap-2 w-1/3">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <div className="relative w-full h-[250px]  my-5">
                <img src="https://i.ibb.co/jbqqB4m/top-view-eid-al-fitr-celebration-with-delicious-food-2.jpg" className="w-full h-[280px]" />
                <div className="absolute items-center w-full h-[280px] left-0 top-0 bg-gradient-to-r from-[#151515]/70 to-[#151515]/0">
                    <div className="text-white pl-12 text-center mt-24">
                        <h2 className="text-6xl font-bold mb-2">All Foods</h2>
                        <p>All Foods | Foods</p>
                    </div>
                </div>
            </div>
            <div className="md:grid grid-cols-3 lg:gap-10 space-y-3 my-14 gap-2">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;