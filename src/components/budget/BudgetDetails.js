import React,{useState} from 'react'
import { toDatetimeLocal} from '../../util'
import "./budgetDetails.css"

const BudgetDetails = (props) => {
    let{budget, setBudget,balance, setBalance, selectOpt} = props
    const [input,setInput] = useState("")


    const handleInput = (e) => {
        setInput(e.target.value )
    }

    const filterObject = ()=>{
        let newObject = [...budget]
        setBudget(newObject.filter((data)=>input===data["budgetDescription"] || input===data["budgetName"]))
    }

    const removeRow =(objectId,budgetAmount)=>{
        let newObject = [...budget]
        setBudget(newObject.filter((data,index)=>index !== objectId))
        let updateBalance = balance + budgetAmount
        setBalance(updateBalance)
    }
 
  return (
    <div className="budget-details-container">
        <div>
        <h1>Details</h1> 
        <div>
            <label>Search For: </label>
            <input onChange={handleInput}/>
            <button  onClick={filterObject}>Search</button>
        </div>
        </div>
        {budget.length > 0  
        ? 
        <table>
            <tr>
                <th>Date</th>
                <th>Budget Name</th>
                <th>Amount</th>
                <th>Description</th>
                <th></th>
            </tr>
            {budget.map((data,index) =>
            <tr key ={index}>
                <td>{toDatetimeLocal(data.date)}</td>
                <td>{data.budgetName}</td>
                <td>{selectOpt} {data.budgetAmount}</td>
                <td>{data.budgetDescription}</td>
                <td><button style={{backgroundColor: "red", color: "white", padding:"2px 10px", border: "unset"}} onClick={()=> removeRow(index, + data.budgetAmount)}>Delete</button>
                </td>
            
            </tr>
            )}
        </table>
        :"Empty"}
    </div>
  )
}

export default BudgetDetails