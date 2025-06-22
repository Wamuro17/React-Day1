import { useState } from "react";
export default function Counter(){
    const [count,setCounts]=useState(0);
    const [value,setValue]=useState("type here!");
    function onTextChange(event){
        console.log("this function is called!:"+event.target.value);
        console.error("this is error")
        setValue(event.target.value);
    }
    return (<> 
        <input value={value} onChange={(event)=>onTextChange(event)}/>
        <p>You typed {value.length} charaters</p>
        <p>{value} Celcius to {value*1.8+32} Fahrenheit</p>
        <p>{value} Kilometer to {value*0.621} Miles</p>
        <p>{value} Baht to {value*0.031} dollar</p>
        <p>{value} Centimeter to {value*0.393700787} Inches</p>
        <button onClick={()=>setCounts(count+1)}>
        +
        </button>
        <button onClick={()=>setCounts(count-1)}>
        -
        </button>
        <button onClick={()=>setCounts(0)}>
        Reset
        </button>
        <p>
        You Clicked {count} times
        </p>
        </>);
}