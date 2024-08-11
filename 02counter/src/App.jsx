import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // if(counter >= 20){
  //   counter = 0
  // } else if(counter < 0){
  //   counter = 0
  // }  

  /*

Your code has a small issue. The problem lies in the condition that resets the counter to 0 when it reaches 20 or goes below 0. The way you've implemented it directly modifies the counter variable, which won't trigger a re-render in React. Instead, you should use the setCounter function to update the state so that React knows the state has changed and updates the UI accordingly.
  */


  
  // let counter = 5;

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1;
    if(counter >= 20){
      setCounter(0)
    } else{
      setCounter(counter + 1)
    }
    
    
  }

  const decValue = () => {
    if(counter <= 0){
      setCounter(0)
    } else {
    setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <br />
    <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
