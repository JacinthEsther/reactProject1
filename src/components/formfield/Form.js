import React,{useState} from 'react'
import './form.css'

function Form({submitForm}) {
    const [userData, setUserData] = useState({name:"", password:""})
    const handleClick = (e) =>{
      setUserData({...userData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userData.name ==="esther" && userData.password !== null) submitForm();
        else alert("Please enter a correct name");
    }
  return (
    <div className="form-body">
        <h2>LOGIN</h2>
        <form action="submit">
            <label htmlFor="login">Name: </label>
            <input type="text" name="name" id="login" placeholder="Enter your name" onChange={handleClick}/>
            
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleClick}/>
            <button onClick={handleSubmit}>Form</button>
        </form>
    </div>
  )
}

export default Form