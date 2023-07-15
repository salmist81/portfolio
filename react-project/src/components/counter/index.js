import {useState} from "react";
import "./counter.css";

//counter component
function Counter() {
    //initialize the state variable called counter
    const [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1);
    }

    function decreaseCounter() {
        setCounter(counter - 1);
        
    }

    return (
        <div>
            <button onClick={decreaseCounter}>Decrease</button>
            {counter}
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
    
}
export default Counter;