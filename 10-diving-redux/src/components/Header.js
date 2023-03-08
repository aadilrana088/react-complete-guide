import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store';
import classes from './Header.module.css';

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuth && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button
                                onClick={() => dispatch(authAction.logout())}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
