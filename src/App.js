import './App.css';
import Counter from './Components/Counter/Counter';
import CounterValue from './Components/CounterValue/CounterValue';
import React, {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  
  useEffect(()=>{      
    (async()=>{
        const counterGet = await fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/202010056.json')
        const counter = await counterGet.json();
        
        setCounter(counter?counter:1);          
                  
    })();
  },[])


  return (
    <div className="App">      
      <Counter counter={counter} setCounter={setCounter}/> 
      <CounterValue counter= {counter}  />
      
    </div>
  );
}

export default App;
