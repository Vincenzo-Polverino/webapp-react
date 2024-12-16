import React from 'react';
import { useLoader } from '../contexts/LoaderContext';
import 'ldrs/tailspin'

const Loader = () => {
    const { isLoading } = useLoader();

    if (!isLoading) return null;

    return (

        <div className="loader-overlay d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50">
            <div className="loader d-flex justify-content-center align-items-center">
                <l-tailspin size="150" stroke="20" color="white"></l-tailspin>
            </div>
        </div>

    );
};

export default Loader;
