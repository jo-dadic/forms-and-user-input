import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes("@"));

	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	// useEffect(() => {
	// 	if (enteredNameIsValid) {
	// 		setFormIsValid(true);
	// 	} else {
	// 		setFormIsValid(false);
	// 	}
	// }, [enteredNameIsValid]);

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid) {
			return;
		}

		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? "form-control invalid"
		: "form-control";

	const emailInputClasses = emailInputHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangeHandler}
					value={enteredName}
					onBlur={nameBlurHandler}
				/>
				{nameInputHasError && (
					<p className="error-text">Name must not be empty!</p>
				)}
			</div>

			<div className={emailInputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					id="email"
					onChange={emailChangeHandler}
					value={enteredEmail}
					onBlur={emailBlurHandler}
				/>
				{emailInputHasError && (
					<p className="error-text">Email must not be empty!</p>
				)}
			</div>
			<div className="form-actions">
				<button onClick={formSubmissionHandler} disabled={!formIsValid}>
					Submit
				</button>
			</div>
		</form>
	);
};

export default SimpleInput;
