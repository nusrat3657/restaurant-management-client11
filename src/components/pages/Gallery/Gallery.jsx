import { Helmet } from "react-helmet-async";
import NavBar from "../../NavBar/NavBar";

export const Gallery = () => {

    const data = [
        {
            imageLink:
                "https://i.ibb.co/NnY5cK9/delicious-italian-pizza-wooden-table.jpg",
        },
        {
            imageLink:
                "https://i.ibb.co/LChvHT9/mexican-tacos-with-beef-tomato-sauce-salsa.jpg",
        },
        {
            imageLink:
                "https://i.ibb.co/YjfMmT4/high-angle-traditional-asian-meal-with-chopsticks.jpg",
        },
        {
            imageLink:
                "https://i.ibb.co/gFhpKw5/curry-with-chicken-onions-indian-food-asian-cuisine.jpg",
        },
        {
            imageLink:
                "https://i.ibb.co/F5jFxBV/thai-food-tom-yum-seafood-seafood-spicy-soup.jpg",
        },
        {
            imageLink:
                "https://i.ibb.co/XXpM5Jv/grilled-t-bone-beef-meat-steak-with-vegetable.jpg",
        },
        {
            imageLink:
                "https://i.ibb.co/BHhjFpv/tortilla-wrap-with-falafel-vegetables-black-stone-background.jpg",
        },
        {
            imageLink:
                "https://i.ibb.co/0XdFX2f/front-view-burger-stand.jpg",
        },
        {
            imageLink:
                "https://i.ibb.co/vPJNGc8/sushi-set-with-hot-cold-rolls-wood-platter.jpg",
        },
    ];


    return (
        <div>
            <Helmet><title>Dine Genius | Gallery</title></Helmet>
            <NavBar></NavBar>
            <div className="relative w-full h-[250px]  my-5">
                <img src="https://i.ibb.co/jbqqB4m/top-view-eid-al-fitr-celebration-with-delicious-food-2.jpg" className="w-full h-[280px]" />
                <div className="absolute items-center w-full h-[280px] left-0 top-0 bg-gradient-to-r from-[#151515]/70 to-[#151515]/0">
                    <div className="text-white pl-12 text-center mt-24">
                        <h2 className="text-6xl font-bold mb-2">Gallery</h2>
                        <p>Gallery | Foods</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-20">
                {data.map(({ imageLink }, index) => (
                    <div key={index}>
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                            src={imageLink}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Gallery;