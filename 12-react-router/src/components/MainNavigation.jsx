import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./MainNavigation.module.css"
const MainNavigation = () => {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} >Home</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/welcome" className={({isActive}) => isActive ? classes.active : undefined} >Welcome</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/products" className={({isActive}) => isActive ? classes.active : undefined} >Products</NavLink> 
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainNavigation;
