import { useState } from "react";

export default function Team() {
    const [count, setCount] = useState(0);
        const add= () => {
            setCount(count + 1);
        }
        const minus= () => {
            setCount(count - 1);
        }
    return (
        <div>
            <h3>Player: {count}</h3>
            <button onClick={add}>Add</button>
            <button onClick={minus}>minus</button>
        </div>
    );
}
