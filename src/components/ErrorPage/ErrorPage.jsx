/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    // const err = useRouteError()
    // console.log(err)

    return (
        <div className="text-center px-28">
            <h1 className="text-[200px] font-bold">404</h1>
            {/* <h2 className="text-5xl playfair font-bold mb-2">Opps!!! This page are not found.</h2>
            <p className="text-2xl mt-5 font-semibold">Go Home...</p>
            <button className="btn px-10  my-5 rounded-lg bg-amber-500 text-white text-xl"><Link to="/">Back Home</Link></button>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
                            {err?.data}
                        </p> */}

                        <div className=" text-center">
                            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                            <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-amber-500 text-gray-50"><Link to="/">Back to homepage</Link></a>
                        </div>
        </div>
    );
};

export default ErrorPage;