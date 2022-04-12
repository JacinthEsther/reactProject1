import React,{useState} from 'react'

const Register = (props) => {
    let setAlert = props.setAlert
    const [userDetails, setUserDetails] = useState({username: '', email: '', password: ''})

    const handleUserInput = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    const handleRegistration = () => {
        let{username, email} = userDetails 
        // check if all fields have values
        let isFieldCorrect=Object.keys(userDetails).some((detail) => detail ===" ")
        if(isFieldCorrect){

            setAlert({ishow: true, status: "error",message: "field incomplete"})
            return;
        }
        // validate email is email
        let validRegex=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let isEmailCorrect = email.match(validRegex)
        if(!isEmailCorrect){
            setAlert({ishow: true, status: "error",message: "Email incorrect"})
            return;
        }
        // validate username  doesn't exist
        // let usersRepository
        try {
            let usersRepository
            usersRepository =  JSON.parse(localStorage.getItem('users'))
            let isUserExist = usersRepository.some((user)=> user.username=== username)
            if(isUserExist){
                setAlert({ishow: true, status: "error", message: "Username Already Exists"})
                console.log([userDetails]);
                return;
            }
            let newUsersRepository = [userDetails, ...usersRepository]
            localStorage.setItem("users", JSON.stringify(newUsersRepository))
            setAlert({ishow: true, status: "success", message: "Registration Successful"})

        } catch (error) {
            localStorage.setItem("users", JSON.stringify([userDetails]))
            setAlert({ishow: true, status: "success",message: "Registration Successful"})
            console.log([userDetails]);
        }

        

        // console.log([userDetails])
    }
    return (
    <div className="auth-register">
        <label>UserName</label>
        <input name="userName" onChange={handleUserInput}/>
        <label>Email</label>
        <input name="email"  onChange={handleUserInput}/>
        <label>Password</label>
        <input type="password" name="password"  onChange={handleUserInput}/>
        <button  onClick={handleRegistration}>Register</button>

    </div>
  )
}

export default Register;
