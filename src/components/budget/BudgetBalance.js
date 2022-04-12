import axios from 'axios'
import React,{useEffect, useState} from 'react'
import "./BudgetBalance.css"

const BudgetBalance =(props)=> { 
    const [input,setIsInput] = useState("")
    const[exchangerate, setExchangeRate] = useState({})
    const[selectOption, setSelectOption] = useState("")


    const handleInput = (e) => {
        // console.log(e)
        setIsInput(e.target.value)
    }
    const handleSelect = (e)=>{
        e.target.value===Object.keys(exchangerate)[0] ?
        props.setBalance(1000 * exchangerate[e.target.value]):
        (selectOption===""?
        props.setBalance(props.balance * exchangerate[e.target.value]) :
        props.setBalance(props.balance / exchangerate[selectOption] * exchangerate[e.target.value])
        )
        setSelectOption(e.target.value)
    }
    useEffect(()=>{
        axios.get('https://v6.exchangerate-api.com/v6/8f58fa831aa1c2654d0d26a0/latest/NGN')
        .then((response)=> 
        {setExchangeRate(response.data.conversion_rates)
        setSelectOption(Object.keys(response.data.conversion_rates)[0])
        })
    },[])

    useEffect(()=>{
        console.log('mounted @ budget balance')
        return()=>{
            console.log('unmounted @ budget balance')
        }
    },[props.balance])
    return (
        <div className="budgetBalance">
            <div className="balance">
                {props.balance}
            </div>
            <select className="balance-dropdown" onChange = {handleSelect}>
                {Object.keys(exchangerate).length>0 &&
                Object.keys(exchangerate).map(
                (data, index)=><option key={index}>{data}</option>)}
            </select>
            <div className="balance-buttons">
                <input onChange={handleInput} />
                <button  onClick={()=>props.setBalance(input)}>Update Balance</button>
            </div> 
        </div>
    )
}

export default BudgetBalance 