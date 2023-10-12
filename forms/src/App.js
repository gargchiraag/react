import './App.css';
// import { useState } from 'react';
import {useForm} from 'react-hook-form';

function App() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [date, setDate] = useState('');
  // const [nameErr,setNameErr]=useState(false);
  // const [emailErr,setEmailErr]=useState(false);
  // const [passwordErr,setPasswordErr]=useState(false);
  // function setNameValue(e) {
  //   setName(e.target.value);
  //   if(e.target.value.length<4){
  //     setNameErr(true);
  //     console.log(e.target.value)
  //   }
  //   else{
  //     setNameErr(false);
  //   }
  // }

  // function setEmailValue(e) {
  //   setEmail(e.target.value);
  //   let email=e.target.value;
  //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   let err=email.match(mailformat);
  //   setEmailErr(!err);
  // }

  // function setPasswordValue(e) {
  //   setPassword(e.target.value);
  //   if(e.target.value.length<5){
  //     setPasswordErr(true);
  //   }
  //   else{
  //     setPasswordErr(false);
  //   }
  // }

  // function setDateValue(e) {
  //   setDate(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if(nameErr || passwordErr || emailErr || name.length===0 || email.length===0 || password.length===0)
  //   {
  //     alert("Enter Vaid Details!!!");
  //   }
  //   else{
  //     alert(`Name:${name}  
  //     Password: ${password} 
  //     Email ID: ${email} 
  //     Date Of Birth: ${date}`)
  //   }
  // }

  const {register,handleSubmit , formState:{errors}}=useForm();
  console.log(errors);

  return (
    // <div id="form">
    //   <div>
    //   <span>Sign Up Form</span>
    //   <div>
    //     {/* <label>Name:</label> */}
    //     <input type="text" placeholder="Enter Your Name" onChange={setNameValue} /> {nameErr?"Enter Valid Name":""}
    //   </div>
    //   <div>
    //     {/* <label>Email Address:</label> */}
    //     <input type="text" placeholder="Enter your Email Address" onChange={setEmailValue} />{emailErr?"Enter Valid Email Address":""}
    //   </div>
    //   <div>
    //     {/* <label>Password:</label> */}
    //     <input type="Password" placeholder="Enter your password" onChange={setPasswordValue} />{passwordErr?"Password Length is too short":""}
    //   </div>
    //   <div>
    //     {/* <label>D.O.B:</label> */}
    //     <input type="date" onChange={setDateValue} />
    //   </div>
    //   <div>
    //     <button type="submit" onClick={buttonClick}>Submit</button>
    //   </div>
    //   </div>
    // </div>
    <div>
      <form onSubmit={handleSubmit((data)=>{
        console.log(data)
      })}>
        <h3>Sign Up Form</h3>
        <label>User Name</label>
        <input type='text' id='userName' {...register('userName',{required:"Enter the name"})} />
        <label>Email Id</label>
        <input type='text' id='emailId' {...register('emailId',{required:"Please Enter the email"})} />
        <label>Password</label>
        <input type='text' id='password' {...register('password',{required:"Enter the password", minLength:{value:7,message:"Mininum 7 length required"}})} />
        <label>Date Of Birth</label>
        <input type='date' id='dob' name='dob' />

        <button type='submit'>Submit</button>

      </form>
    </div> 
  );
}

export default App;
