import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto md:p-4 p-2 mt-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;