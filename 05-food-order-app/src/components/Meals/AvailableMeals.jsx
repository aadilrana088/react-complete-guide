import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                'https://react-meals-ffc27-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
            );
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const loadedeMeals = [];
            for (const key in responseData) {
                loadedeMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].name,
                    price: responseData[key].price,
                });
            }
            setMeals(loadedeMeals);
            setIsLoading(false);
        };
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);
    if (isLoading) {
        return (
            <section className="global_loader">
                <img src="/images/loader.svg" alt="" />
            </section>
        );
    }
    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }
    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            id={meal.id}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
