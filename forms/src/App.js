import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');

  function setNameValue(e) {
    setName(e.target.value);
  }

  function setEmailValue(e) {
    setEmail(e.target.value);
  }

  function setPasswordValue(e) {
    setPassword(e.target.value);
  }

  function setDateValue(e) {
    setDate(e.target.value);
  }

  function buttonClick(e) {
    alert(`Name:${name}<br> Password: ${password} Email ID: ${email} Date Of Birth: ${date}`)
  }

  return (
    <div id="form">
      <div>
      <span>Sign Up Form</span>
      <div>
        {/* <label>Name:</label> */}
        <input type="text" placeholder="Enter Your Name" onChange={setNameValue} />
      </div>
      <div>
        {/* <label>Email Address:</label> */}
        <input type="text" placeholder="Enter your Email Address" onChange={setEmailValue} />
      </div>
      <div>
        {/* <label>Password:</label> */}
        <input type="Password" placeholder="Enter your password" onChange={setPasswordValue} />
      </div>
      <div>
        {/* <label>D.O.B:</label> */}
        <input type="date" onChange={setDateValue} />
      </div>
      <div>
        <button type="submit" onClick={buttonClick}>Submit</button>
      </div>
      </div>
    </div>
  );
}

export default App;
