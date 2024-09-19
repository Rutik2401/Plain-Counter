import React, { useState } from "react";
import './Counter.css'
const Counter = () => {
  const [count, setcount] = useState(0);
  
  return (
    <div className="counter-container d-flex justify-content-center align-items-center flex-column ">
      <p className="para fw-bold"> You Have Clicked {count} times</p>
      <button className="btn btn-success" onClick={()=>{
        setcount(count+1)
      }}>Click Me </button>
    </div>
  );
};

export default Counter;
