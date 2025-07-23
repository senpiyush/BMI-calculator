import "./App.css";
import { useState } from "react";

function BmiCalculator() {
    const [weight,setWeight]=useState(0);
    const [height,setHeight]=useState(0);
    const [bmi,setBmi]=useState('');
    const [message,setMessage]=useState('');
  
    // logic part 
    let calbmi=(e)=>{
       
      e.preventDefault();
      if(weight<=0||height<=0){
       alert("please! Enter the valid height and weight");
      }
      else{
         let bmi=(weight/(height*height)*703);
         setBmi(bmi.toFixed(1))

         if(bmi<25){
             setMessage('you are underweight');
         }
         else if(bmi>=25&&bmi<30){
             setMessage('you are healthy');
         }
         else{
             setMessage('you are  overweight ');
         }
      }
    }

    let relod=()=>{
       window.location.reload();
    }

   return (
    <div className="main">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calbmi}>
          <div>
            <label>Weight (ibs):</label>
            <input
              type="text"
              placeholder="Enter the weight"
              value={weight}
             onChange={(e)=> setWeight(e.target.value)}
         />
          </div>
          <div>
            <label>Height (in):</label>
            <input type="text" placeholder="Enter the Height" value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">submit</button>
            <button className="btn-outline" onClick={relod}>reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BmiCalculator;
