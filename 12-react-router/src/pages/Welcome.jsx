import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <p>Welcome page</p>
            <Link to="/">Home page</Link>
            <br />
            <Link to="/products">Product page</Link>
        </div>
    );
};

export default Welcome;
