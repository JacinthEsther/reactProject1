import React,{useState} from 'react'
import './Budget.css'
import BudgetBalance from './components/budget/BudgetBalance'
import BudgetBody from './components/budget/BudgetBody'


const Budget=(props)=> {
    const[balance,setBalance] = useState(5000000)
    const [budget, setBudget] = useState([])
    const [selectOpt, setSelectOpt] = useState("NGN")
    
    return (
    <div className="budget-container">
        <BudgetBalance balance={balance} setSelectOpt={setSelectOpt}setBalance={setBalance} budget={budget} setBudget={setBudget}/>
        <BudgetBody customerName={props.customerName}selectOpt={selectOpt} budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
        
    </div>
    )
} 

export default Budget