import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import NavBar from "../../NavBar/NavBar";

const Home = () => {
    return (
        <div>
            <Helmet><title>Dine Genius | Home</title></Helmet>
            <NavBar></NavBar>
            <Banner></Banner>
        </div>
    );
};

export default Home;