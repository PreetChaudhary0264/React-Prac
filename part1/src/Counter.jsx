import { useState } from 'react'

const counter = () => {
    const [counter, setCounter] = useState(0);

    function upHandler() {
        setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);  ek baar click krne se ek hi add hpga bcoz usestate actions ko batch me bhejta hai to use lgega same hi to kaam hai
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounter) => prevCounter + 1); //ab ye ek baar me 3  value increase hogi
        //pehle prevVal fetch kri fir update kiya
    }
    function downHandler() {
        setCounter(counter - 1);
    }  
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={upHandler}>Increment</button>
      <button onClick={downHandler}>Decrement</button>
    </>
  )
}

export default counter
