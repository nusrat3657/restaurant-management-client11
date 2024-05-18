import { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import FoodCard from "./FoodCard/FoodCard";
// import { data } from "autoprefixer";

const AllFoods = () => {

    const [foods, setFoods] = useState([]);
    
    useEffect( () => {
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    } ,[])

    return (
        <div>
            <NavBar></NavBar>
            <h2>All foods: {foods.length}</h2>
            <div className="md:grid grid-cols-3 lg:gap-10 space-y-3 my-10 gap-2">
                {
                    foods.map( food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;