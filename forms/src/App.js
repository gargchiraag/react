import './App.css';
// import { useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
const userSchema=yup.object().shape({
  userName:yup.string().min(3,'Name must be greater than 3').required("Name is Required!"),
  emailId:yup.string().email("Invalid Email Address!!").required("Email is Required!"),
  password:yup.string().min(3,"Password must be greater than 3").required("Password is required!!")
})
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

  const {register,handleSubmit , formState:{errors}}=useForm({resolver: yupResolver(userSchema),});
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
        alert(`Name: ${data.userName}
        Email : ${data.emailId}
        Password: ${data.password}
        D.O.B: ${data.dob}
        `)
      })}>
        <h3>Sign Up Form</h3>
        <label>User Name</label>
        <input type='text' id='userName' {...register('userName')} placeholder='Name'/>
        <span >{errors.userName?.message}</span>
        <label>Email Id</label>
        <input type='text' id='emailId' placeholder='Email' {...register('emailId')} />
        <span >{errors.emailId?.message}</span>
        <label>Password</label>
        <input type='password' id='password' placeholder='Password' {...register('password')} />
        <span >{errors.password?.message}</span>
        <label>Date Of Birth</label>
        <input type='date' id='dob' name='dob'  {...register('dob')} />
        <button type='submit'>Submit</button>
      </form>
    </div> 
  );
}

export default App;
