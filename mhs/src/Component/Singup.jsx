import React, { useState } from 'react';
import "./Singup.css"
function SignupForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    setSubmitted(false);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
    setSubmitted(false);
  };

  const handlePhoneno = (e) => {
    setPhoneno(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname === '' || lastname === '' || phoneno === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <h1>User successfully registered!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <label className="label">Firstname</label>
        <input
          onChange={handleFirstname}
          className="input"
          value={firstname}
          type="text"
        />

        <label className="label">Lastname</label>
        <input
          onChange={handleLastname}
          className="input"
          value={lastname}
          type="text"
        />

        <label className="label">Phone Number</label>
        <input
          onChange={handlePhoneno}
          className="input"
          value={phoneno}
          type="tel"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;