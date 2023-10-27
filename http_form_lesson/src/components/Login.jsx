import { useState } from "react";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  // const isEmailInvalid = enteredEmail !== '' && !enteredEmail.includes('@');
  // Validating Input on Every Keystroke via State

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const isEmailInvalid = didEdit.email && !enteredEmail.includes('@');

  function inputBlurHandler(identifier) {
    setDidEdit((prevDidEdit) => ({
      ...prevDidEdit,
      [identifier]: true
    }))
  };
  // Validating Input Upon Lost Focus (Blur)

  // const [isEmailInvalid, setEmailIsInvalid] = useState(false);
  // Validating Input Upon Form Submission

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("SUBMITTED");
    // const isEmailValid = enteredEmail.includes('@');
    // setEmailIsInvalid(!isEmailValid);
    // Validating Input Upon Form Submission
  };

  function resetHandler(event) {
    setEnteredEmail('');
    setEnteredPassword('');
  };
  // Manual reset

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            // type = "text"
            // Validating Input Upon Form Submission
            name="email"
            onChange={emailChangeHandler}
            onBlur={() => inputBlurHandler("email")}
            // Validating Input Upon Lost Focus (Blur)
            value={enteredEmail} />
          <div className="control-error"> {/* Error message container */}
            {isEmailInvalid && <p>Please enter a valid email message.</p>}
          </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={passwordChangeHandler}
            onBlur={() => inputBlurHandler("password")}
            // Validating Input Upon Lost Focus (Blur)
            value={enteredPassword} />
        </div>
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat" onClick={resetHandler}>Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

// NOTE ABOUT FORM VALIDATION: Even when using the validation by keystrokes/ blur its important to check for validation at form submittion