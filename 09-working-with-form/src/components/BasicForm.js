import useInput from '../hooks/use-input';

const BasicForm = (props) => {
    const isNotEmpty = (value) => value.trim() !== '';
    const isEmail = (value) => value.includes('@');
    const {
        value: fname,
        isValid: fnameIsValid,
        hasError: fnameHasError,
        valueChangeHandler: fnameChangeHandler,
        inputBlurHandler: fnameBlurHandler,
        reset: resetFname,
    } = useInput(isNotEmpty);
    const {
        value: lname,
        isValid: lnameIsValid,
        hasError: lnameHasError,
        valueChangeHandler: lnameChangeHandler,
        inputBlurHandler: lnameBlurHandler,
        reset: resetLname,
    } = useInput(isNotEmpty);
    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);
    let formIsvalid = false;
    if (fnameIsValid && lnameIsValid && emailIsValid) {
        formIsvalid = true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formIsvalid) {
            return;
        }
        console.log('Submitted!');
        console.log(fname, lname, email);
        resetFname();
        resetLname();
        resetEmail();
    };
    const fnameClasses = fnameHasError
        ? 'form-control invalid'
        : 'form-control';
    const lnameClasses = lnameHasError
        ? 'form-control invalid'
        : 'form-control';
    const emailClasses = emailHasError
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={handleSubmit}>
            <div className="control-group">
                <div className={fnameClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={fname}
                        onChange={fnameChangeHandler}
                        onBlur={fnameBlurHandler}
                    />
                    {fnameHasError && (
                        <p className="error-text">Please enter a first name</p>
                    )}
                </div>
                <div className={lnameClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={lname}
                        onChange={lnameChangeHandler}
                        onBlur={lnameBlurHandler}
                    />
                    {lnameHasError && (
                        <p className="error-text">Please enter a last name</p>
                    )}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailHasError && (
                    <p className="error-text">Please enter proper mail</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsvalid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
