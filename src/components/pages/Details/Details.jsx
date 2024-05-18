import { Helmet } from "react-helmet-async";

const Details = ({food}) => {
    return (
        <div>
            <Helmet><title>Dine Genius | Details</title></Helmet>
            <h2>Details:{food.food_name}</h2>
        </div>
    );
};

export default Details;