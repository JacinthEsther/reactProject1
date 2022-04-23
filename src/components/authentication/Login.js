import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const Login = ({setAlert}) => {
    let history = useHistory();


  const [userDetails, setUserDetails] = useState({identity:"", password:""})
  const [user, setUser] = useState({})
  const handleUserInput = (e)=> {
      setUserDetails({...userDetails,[e.target.name]:e.target.value})
  }
  const handleLogin = ()=> {
    let usersRepository = JSON.parse(localStorage.getItem('users'))
    let user;
    let isValid = usersRepository.some((userObject)=>{
      let idCheck=(userObject?.email === userDetails.identity|| 
              userObject?.userName === userDetails?.identity)
      let passwordCheck = userObject.password === userDetails.password
      if(idCheck && passwordCheck){
          user  = userObject
      }
    
    return idCheck && passwordCheck
  })
  // isValid && setUser(usersRepository.find())

  let{ identity } = userDetails

      isValid?
    history.push(`/dashboard/${user.userName}/?id=${user.userName}`):
    setAlert({ishow: true, status: 'error', message: 'User Details Incorrect'})
    setTimeout(
      ()=>
      setAlert({ishow: false, status: '', message: ''})
      , 5000
    )
  }
  return (
    <div>
      <label>Email or UserName</label>
        <input name="identity" onChange={handleUserInput}/>
      
        <label>Password</label>
        <input type="password" name="password"  onChange={handleUserInput}/>
        <button  onClick={handleLogin}>Login</button>
      </div>
  )
}

export default Login


