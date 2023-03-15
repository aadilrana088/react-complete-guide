import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <p>Product page</p>
            <Link to="/home">Home page</Link>
            <br />
            <Link to="/welcome">Welcome page</Link>
        </div>
    );
};

export default Product;
