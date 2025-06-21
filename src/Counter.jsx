import { useState } from "react";
export default function Counter(){
    const [count,setCounts]=useState(0);
    return (<>
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
        You Click {count} times
    </p>
    </>);
}