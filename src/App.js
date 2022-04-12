import React,{useState} from 'react'
import Authentication from './Authentication'
import Budget from "./Budget"
import Form from "./components/formfield/Form"
import "./components/MyApp.css"

function App() {
  // const[loginSuccessful, setLoginSuccessful] = useState(false)

  // const submitForm = ()=>{
  //   setLoginSuccessful(true)
  // }
 
  return (
    <div className="app-container">
      
      {/* {!loginSuccessful ? < Form submitForm={submitForm}/>: <Budget/>} */}
      {/* <Budget/> */}
      <Authentication/>
      
    </div>
  )
}

export default App