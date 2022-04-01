import React from 'react'
import { toDatetimeLocal} from '../../util'
import "./budgetDetails.css"

const BudgetDetails = (props) => {
    let{budget, setBudget,balance, setBalance} = props

    const removeRow =(objectId,budgetAmount)=>{
        let newObject = [...budget]
        setBudget(newObject.filter((data,index)=>index !== objectId))
        let updateBalance = balance + budgetAmount
        setBalance(updateBalance)
    //     { if (input.budgetAmount > 0)
    //         { setBalance(balance-total)}
    //         else setBalance(balance)
    //  }
    }
 
  return (
    <div className="budget-details-container">
        <h1>Details</h1> 
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
                <td>{data.budgetAmount}</td>
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