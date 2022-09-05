import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const {
		value: name,
		isValid: isNameValid,
		hasError: nameHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameTouchedHandler,
		reset: nameResetHandler,
	} = useInput((value) => value.trim() !== "");

	const {
		value: lastName,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangedHandler,
		inputBlurHandler: lastNameTouchedHandler,
		reset: lastNameResetHandler,
	} = useInput((value) => value.trim() !== "");

	const {
		value: email,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailTouchedHandler,
		reset: emailResetHandler,
	} = useInput((value) => value.includes("@"));

	let formIsValid = false;
	if (isNameValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(name);
		console.log(lastName);
		console.log(email);

		nameResetHandler("");
		lastNameResetHandler("");
		emailResetHandler("");
	};

	const nameInputClasses = nameHasError
		? "form-control invalid"
		: "form-control";

	const lastNameInputClasses = lastNameHasError
		? "form-control invalid"
		: "form-control";

	const emailInputClasses = emailHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form>
			<div className="control-group">
				<div className={nameInputClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={nameChangedHandler}
						onBlur={nameTouchedHandler}
					/>
					{nameHasError && (
						<p className="error-text">Name must not be empty!</p>
					)}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						value={lastName}
						onChange={lastNameChangedHandler}
						onBlur={lastNameTouchedHandler}
					/>
					{lastNameHasError && (
						<p className="error-text">Last name must not be empty!</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="email"
					id="name"
					value={email}
					onChange={emailChangedHandler}
					onBlur={emailTouchedHandler}
				/>
				{emailHasError && <p className="error-text">Enter a valid e-mail!</p>}
			</div>
			<div className="form-actions">
				<button onClick={onFormSubmit} disabled={!formIsValid}>
					Submit
				</button>
			</div>
		</form>
	);
};

export default BasicForm;
