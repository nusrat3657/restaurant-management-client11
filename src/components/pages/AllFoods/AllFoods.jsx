import { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import FoodCard from "./FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";

const AllFoods = () => {

    const [foods, setFoods] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    // useEffect(() => {
    //     if (query.length > 0) {
    //         fetch(`http://localhost:5000/foods?q=${query}`)
    //             .then(response => response.json())
    //             .then(data => setFoods(data))
    //             .catch(error => console.error('Error fetching data:', error));
    //     } else {
    //         setFoods([]);
    //     }
    // }, [query]);

    useEffect(() => {
        if (query.length > 0) {
            fetch(`http://localhost:5000/foods?q${query}`)
                .then(response => response.json())
                .then(data => setFoods(data))
        } else {
            setFoods([]);
        }
    }, [query]);

    return (
        <div>
            <Helmet><title>Dine Genius | All Food</title></Helmet>
            <NavBar></NavBar>
            <label className="input input-bordered flex items-center gap-2 w-1/3">
                <input value={query}
                    onChange={e => setQuery(e.target.value)} type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>

            {/* <input
                type="text"
                className="border p-2 w-full"
                placeholder="Search for food..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            /> */}

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
                    foods.map(foodData => <FoodCard key={foodData._id} foodData={foodData}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;