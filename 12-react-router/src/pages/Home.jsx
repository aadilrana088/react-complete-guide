import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <p>Home page</p>
            <Link to="/welcome">Welcome page</Link>
            <br />
            <Link to="/products">Product page</Link>
        </div>
    );
};

export default Home;
