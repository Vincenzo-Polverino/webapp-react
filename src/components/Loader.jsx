import React from 'react';
import { useLoader } from '../contexts/LoaderContext';

const Loader = () => {
    const { isLoading } = useLoader();

    if (!isLoading) return null;

    return (

        <div className="loader-overlay">
            <div className="loader">
                Loading...
            </div>
        </div>

    );
};

export default Loader;
