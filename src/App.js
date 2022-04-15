import React,{useState} from 'react'
import Authentication from './Authentication'
import Budget from "./Budget"
import Form from "./components/formfield/Form"
import "./components/MyApp.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    const[customerName, setCustomerName] = useState("") 
  return (
    <div className="app-container">
      <Router>
      
      <Switch>
        <Route exact path="/">
        <Authentication setCustomerName={setCustomerName}/>
        </Route>
        <Route path="/dashboard">
          <Budget customerName={customerName} />
        </Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App