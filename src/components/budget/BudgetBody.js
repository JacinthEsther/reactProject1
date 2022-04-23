import React,{useState}from 'react'
import {useLocation, useParams} from 'react-router-dom'
import "./budgetBody.css"
import BudgetDetails from './BudgetDetails'
import { BudgetEntry } from './BudgetEntry'


const BudgetBody =(props)=> {
    
    const {balance, setBalance,budget, setBudget, selectOpt}  = props
    const {identity} = useParams()
    
    
        let myDate = new Date();
        let hrs = myDate.getHours();
    
        let greet;
    
        if (hrs < 12)
            greet = 'Good Morning';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Good Afternoon';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Good Evening';
    
    return (
        <div className="budget-body">
            <div className="text-intro">
                <h1>{greet} {identity}, Welcome To Your Personal Budget</h1>
                <p>Enter the price, description and give a special name
                    to your expenditure
                </p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
                <BudgetDetails budget={budget} selectOpt={selectOpt} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
            </div>
        </div>
    )
}

export default BudgetBody