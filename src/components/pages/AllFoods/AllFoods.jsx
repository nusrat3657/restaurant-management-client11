import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../NavBar/NavBar";
import FoodCard from "./FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";

const AllFoods = () => {

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/foods");
                setFoods(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value.trim();
        setSearch(text);
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/foods?search=${search}`);
                setFoods(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [search]);

    return (
        <div>
            <Helmet><title>Dine Genius | All Food</title></Helmet>
            <NavBar />

            <div className="relative w-full h-[250px]  my-5">
                <img src="https://i.ibb.co/jbqqB4m/top-view-eid-al-fitr-celebration-with-delicious-food-2.jpg" className="w-full h-[280px]" alt="Banner" />
                <div className="absolute items-center w-full h-[280px] left-0 top-0 bg-gradient-to-r from-[#151515]/70 to-[#151515]/0">
                    <div className="text-white pl-12 text-center mt-24">
                        <h2 className="text-6xl font-bold mb-2">All Foods</h2>
                        <p>All Foods | Foods</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSearch} className="mt-16">
                <div className="relative flex w-1/2 mx-auto">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="pr-20 input input-bordered py-4 items-center gap-2 w-full"
                    />
                    <button
                        type="submit"
                        className="absolute btn bg-amber-500 text-white right-0 rounded"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div className="md:grid grid-cols-3 lg:gap-10 space-y-3 my-14 gap-2">
                {foods.map(foodData => <FoodCard key={foodData._id} foodData={foodData} />)}
            </div>
        </div>
    );
};

export default AllFoods;
