import { useState } from "react";
import "./Practise.css";

export default function Practise({khan}) {
    let [count,setCount] = useState(0);

    let incCount = () => {
        setCount(count+1);
    };

    return (
        <>
          <h3>Count = {count}</h3>
          <button onClick={incCount}>+1</button>
        </>
    );
}