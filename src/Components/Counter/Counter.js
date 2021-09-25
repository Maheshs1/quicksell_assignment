import "./Counter.css";
import React, { useState, useEffect } from 'react';
import Loader from "../Loader/Loader";

function Counter(props){
    const {counter, setCounter} = props;
    const [isLoading, setIsLoading] = useState(false);
    
    const increaseCount = () => {                
        if(counter==='') setCounter(1);
        else if(counter<1000){
            setCounter(counter + 1);            
        }        
    }

    const decreaseCount = () => {
        if(counter==='') setCounter(1);
        else if(counter>=1){
            setCounter(counter - 1);
        }        
    }

    const handleCounterChange = (event) => {      
        const value = event.target.value;
        
        let number = parseInt(value);
        if(isNaN(number)){
            setCounter('');
        }
        if(number>=0 && number<=1000){
            setCounter(number);  
        }   
        
    }

    useEffect(() => {
        setIsLoading(true);
        (async()=>{
            const counterPut = await fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json' , {
                method:'PUT',
                body : JSON.stringify({'202010056' : counter?counter:1})
            })
            
            const res = await counterPut.json();
            if(res)setIsLoading(false);
        })();
    },[counter] )
    
    return(
        <div className="container">                      
            <Loader isLoading={isLoading} />
            <button className="btn1" onClick={decreaseCount}>-</button>
            <input type="number" min="0" max="1000" value={counter} className="input" onChange={handleCounterChange} />
            <button className="btn2" onClick={increaseCount}>+</button>            
        </div>
    )
}
export default Counter;