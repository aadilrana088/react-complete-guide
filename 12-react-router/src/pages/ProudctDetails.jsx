import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/UI/Card';

const ProudctDetails = () => {
    const params = useParams();
    return <Card>
        <h1>ProudctDetails {params.id}</h1>
    </Card>;
};

export default ProudctDetails;
