import { useState } from 'react';
 
function Form() {
 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
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
    if (name === '' || email === '' || password === '') {
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
        }}>
        <h4>Registration Completed Successfully👍</h4>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <p style={{color:"red"}}>Please enter all the fields</p>
      </div>
    );
  };
 
  return (
    <div className="form" style={{ 
      marginLeft: '35%', 
      marginTop: '65px', 
      width: '30%' 
  }}>
      <div>
        <h1><center>Registration</center></h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
  <center>
  <label className="label">Name:</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
          <br></br>
          <br></br>
 
        <label className="label">Email:</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
          <br></br>
          <br></br>
 
        <label className="label">Password:</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
          <br></br>
          <br></br>
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
  </center>
        
      </form>
    </div>
  );
}
export default Form;