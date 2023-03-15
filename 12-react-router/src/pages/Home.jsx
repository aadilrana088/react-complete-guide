import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/UI/Card';

const Home = () => {
    const navigate = useNavigate()
    return (
        <Card>
            <p>Home page</p>
            <button onClick={()=> {navigate('/products')}}>Navigate to Product</button>
        </Card>
    );
};

export default Home;
