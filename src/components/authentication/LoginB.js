import React,{useState} from 'react'

const Login = ({setIsSubmittted, setAlert}) => {
  const[userDetails, setUserDetails] = useState({username: '', password: ''})

  const handleUserInput=(e)=>{
      setUserDetails({...userDetails,[e.target.name]:e.target.value})
  }

  const handleLogin=(e) => {
    e.preventDefault()
    localStorage.getItem('users')
    let users = JSON.parse(window.localStorage.getItem('users'));

    users.map((user=>{
      if(user.username=== userDetails.username && user.password=== userDetails.password){
        setIsSubmittted(true)
      }
      else{
        setAlert({
          ishow: true, status: "error",message: "incorrect username"
        })
      }
    }))
  }

  return (
    <div className="auth-register">
        <label>UserName</label>
        <input name="username" onChange={handleUserInput}/>
        
        <label>Password</label>
        <input type="password" name="password"  onChange={handleUserInput}/>
        <button  onClick={handleLogin}>Login</button>
    </div>
  ) 
}

export default Login;
