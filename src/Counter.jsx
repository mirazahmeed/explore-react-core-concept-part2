import { useState } from "react"

export default function(){
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
    }
    const reduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    
    return(
        <div style={{border:'1px solid'}}>
            <h3>Counter: {count}</h3>
            <button onClick={add}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}