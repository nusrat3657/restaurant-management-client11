/* eslint-disable react/no-unescaped-entities */
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    // const err = useRouteError()
    // console.log(err)

    return (
        <>
        <Helmet><title>Dine Genius | Error</title></Helmet>
            <div className="text-center px-28">
                <h1 className="text-[200px] font-bold">404</h1>
                <div className=" text-center">
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-amber-500 text-gray-50"><Link to="/">Back to homepage</Link></a>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;