// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        // <div className="relative z-20 mt-5">
        //     <div className="carousel w-full lg:h-[600px] rounded-2xl ">
        //         <div id="slide1" className="carousel-item relative w-full">
        //             <img src="https://i.ibb.co/v40jM9H/banner3-jpg.jpg" className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide3" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide2" className="carousel-item relative w-full">
        //             <img src="https://i.ibb.co/zJSMJnq/banner2-jpg.jpg" className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide3" className="carousel-item relative w-full">
        //             <img src="https://i.ibb.co/G0PcZmx/banner1-jpg.jpg" className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="lg:ml-[400px] md:ml-[120px] text-center absolute text-slate-600 md:-mt-[430px]  bg-white/60 lg:p-6 md:p-4 rounded-xl">
        //         <div className="max-w-md">

        //             <h1 className="text-5xl font-bold"></h1>
        //             <p className="py-6 text-black">Find exactly what you need, anywhere in the world with free cancellation options.</p>
        //             <button className="btn rounded-none bg-orange-500 border-none text-white text-lg px-8 "><Link to="/all">Explore Now</Link></button>
        //         </div>
        //     </div>
        // </div>


        <div className="carousel w-full md:h-[550px] rounded-2xl my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/CW2pQ6H/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg" className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#151515]/0">
                    <div className="text-white space-y-5 pl-12 w-1/2">
                        <h2 className="md:text-6xl font-semibold">Affordable Price For Our Food Servicing</h2>
                        <p className="sm:disabled">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex">
                            <Link to="/all"><button className="btn border-none text-white bg-amber-500 mr-5">Explore More</button></Link>
                            {/* <button className="btn btn-outline  border-white text-white">Latest Project</button> */}
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jbqqB4m/top-view-eid-al-fitr-celebration-with-delicious-food-2.jpg" className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#151515]/0">
                    <div className="text-white space-y-5 pl-12 w-1/2">
                        <h2 className="md:text-6xl font-semibold">Affordable Price For Our Food Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex">
                            <Link to="/all"><button className="btn border-none text-white bg-amber-500 mr-5">Explore More</button></Link>
                            {/* <button className="btn btn-outline  border-white text-white">Latest Project</button> */}
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/qpxQg7j/top-view-eid-al-fitr-celebration-with-delicious-food.jpg" className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#151515]/0">
                    <div className="text-white space-y-5 pl-12 w-1/2">
                        <h2 className="md:text-6xl font-semibold">Affordable Price For Our Food Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex">
                            <Link to="/all"><button className="btn border-none text-white bg-amber-500 mr-5">Explore More</button></Link>
                            {/* <button className="btn btn-outline  border-white text-white">Latest Project</button> */}
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/5sdjrZN/top-view-eid-al-fitr-celebration-with-delicious-food-1.jpg" className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#151515]/0">
                    <div className="text-white space-y-5 pl-12 w-1/2">
                        <h2 className="md:text-6xl font-semibold">Affordable Price For Our Foods</h2>
                        <p>In order for us to maintain our lives, we need to consume food to supply nutrient-needs for our bodies. As the global population increased, the demand for food also increased.</p>
                        <div className="flex">
                            <Link to="/all"><button className="btn border-none text-white bg-amber-500 mr-5">Explore More</button></Link>
                            {/* <button className="btn btn-outline  border-white text-white">Latest Project</button> */}
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;