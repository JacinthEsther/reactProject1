import React,{useState} from 'react'
import './Budget.css'
import BudgetBalance from './components/budget/BudgetBalance'

const Budget=()=> {
    const[balance,setBalance] = useState(5000000)
    return (
    <div className="budget-container">
        {/* My Budget */}
        <BudgetBalance balance={balance} setBalance={setBalance}/>
    </div>
    )
}

export default Budget