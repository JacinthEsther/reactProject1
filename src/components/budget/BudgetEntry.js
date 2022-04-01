import React,{useState} from 'react'

export const BudgetEntry = (props) => { 

    let {budget, setBudget, balance, setBalance} = props
  

    const[input, setInput] = useState({budgetName:'',budgetAmount:'', budgetDescription:'', date: ''})

    const handleInput=(e)=>{
        setInput ({...input,[e.target.name]:e.target.value})
        
    }

    const createBudget=()=>{
        let budgetData=[{...input,date:Date.now()},...budget]
        let newBudget = {...input}
        if(!(balance - newBudget.budgetAmount < 0)){
            setBudget(budgetData)
            let newBalance = balance - newBudget.budgetAmount
            setBalance(newBalance)
        }
        else setBalance((initial)=>{
            setTimeout(()=> setBalance(initial), 1000)
            return "Budget limit exceeded!"
        })

    }

    return (
    <div className="budget-entry-container">
        <div className="budgetEntry">
            <p>Budget Name</p>
            <input value={input.budgetName} name="budgetName" onChange={handleInput}/>
        </div>
        <div className="budgetEntry">
            <p>Budget Amount</p>
            <input name="budgetAmount" onChange={handleInput}/>
        </div>
        <div className="budgetEntry">
            <p>Budget Description</p>
            <input name="budgetDescription" onChange={handleInput}/>
        </div>
        <button onClick={createBudget}>Enter</button>
    </div>
  )
}
