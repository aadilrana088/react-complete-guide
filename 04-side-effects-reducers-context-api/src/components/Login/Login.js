import React, {
    useContext,
    useEffect,
    useReducer,
    useState,
    useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';
const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('@'),
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('@'),
        };
    }
    return { value: '', isValid: false };
};
const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.trim().length > 6,
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.trim().length > 6,
        };
    }
    return {
        value: '',
        isValid: false,
    };
};
const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const authCtx = useContext(AuthContext);
    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    useEffect(() => {
        const validTimer = setTimeout(() => {
            console.log('cheking...');
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);
        return () => {
            console.log('validTimer');
            clearInterval(validTimer);
        };
    }, [emailIsValid, passwordIsValid]);
    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
        // setFormIsValid(emailState.isValid && passwordState.isValid);
        // setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
        // setEnteredPassword(event.target.value);
        // setFormIsValid(emailState.isValid && passwordState.isValid);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
        // setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
        // setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
        // props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    type="email"
                    label="E-Mail"
                    id="email"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    isValid={emailIsValid}
                />
                <Input
                    ref={passwordInputRef}
                    label="Password"
                    type="password"
                    id="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    isValid={passwordIsValid}
                />
                {/* <div
                    className={`${classes.control} ${
                        passwordIsValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input />
                </div> */}
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        // disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
