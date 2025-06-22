import { useState } from "react";
function Item({name}){
    const [pack,setPack]=useState(false);
    function RandomDice(){
        let num=Math.round(Math.random()*6)+1;
        setPack(num);
    }
    if(pack%6==0)    
        return(<li onClick={RandomDice}>{name}1️⃣</li>);
    if(pack%6==1)    
        return(<li onClick={RandomDice}>{name}2️⃣</li>);
    if(pack%6==2)    
        return(<li onClick={RandomDice}>{name}3️⃣</li>);
    if(pack%6==3)    
        return(<li onClick={RandomDice}>{name}4️⃣</li>);
    if(pack%6==4)    
        return(<li onClick={RandomDice}>{name}5️⃣</li>);
    if(pack%6==5)    
        return(<li onClick={RandomDice}>{name}6️⃣</li>);
}
export default function Backpack(){
    const item=["Sun glasses","Powerbank","Money","Phone","Shampoo","Wallet"];
    const filterList=item.filter(i=>i.includes("n"));
    return (
    <>
        <h1>Backpack List</h1>
            <ol>
               {filterList.map(i=><Item name={i}/>)}
            </ol>
    </>);
}