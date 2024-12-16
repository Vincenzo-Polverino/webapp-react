import React from 'react';
import { useLoader } from './LoaderContext';

const Loader = () => {
    const { isLoading } = useLoader();

    if (!isLoading) return null;

    return (

        <div className="loader">
            Loading...
        </div>

    );
};

export default Loader;
