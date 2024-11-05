import { useState } from 'react';


function Counter() {
let [count,setCount]=useState(0)
  const Counter=()=>{
    setCount(count++)
  }
  return (
    // <div>
    // <ul>
    //   <h2>Un-ordered list</h2>
    //   <li>Addition of two values = {add(44,55)} </li>
    //   <li>Subtraction of two values = {sub(44,55)} </li>
    //   <li>Division of two values = {div(44,55)} </li>
    //   <li>Multiplication of two values = {multi(44,55)} </li>
    // </ul>
    // </div>

    <div>
      <h1>Counter : <span>{count}</span></h1>
      <button onClick={Counter} style={{backgroundColor:'#000000',
                                          color:'#fff',
                                          border:'1px solid red',
                                          padding:'10px'
                                          
                                          }}>Count</button>
    </div>
  );
}

function Timer(){
    let currentTime = new Date().toLocaleTimeString();
    const [cTime,setCTime]=useState(currentTime);

    let cColor='purple';
    const[currentColor,setColor]=useState(cColor);

    let divBgColor='purple';
    const[BgColor,setDivBgColor]=useState(divBgColor);

  
    let [count2,setCounter]=useState(0)

    const CurrentTime=()=>{
                    
            

        // cColor='black'
        // setColor(cColor)


        if(count2===0){                
            divBgColor='black'
            setDivBgColor(divBgColor)
            setCounter(count2++);   
        }else if(count2===1){
            setCounter(count2++);                           
            divBgColor='green'
            setDivBgColor(divBgColor)

        }else{         

            divBgColor='purple'
            setDivBgColor(divBgColor)
            setCounter(count2++);   
        }     
         
        if(count2===3){
            count2=0
            setCounter(count2);        
        }       
        
    }


    return(
        <div style={{margin:'100px'}}>
            <h1>Time : <span style={{backgroundColor:BgColor, color:'white'}}>{cTime}</span></h1>
            <button onClick={CurrentTime} style={{backgroundColor:currentColor,
                                                color:'#fff',
                                                border:'2px solid white',
                                                padding:'10px'
                                                
                                                }}>Count</button>
            </div>
    )
}


function DigitalClock(){
    let currentTime = new Date().toLocaleTimeString();
    const [cTime,setCTime]=useState(currentTime);

    const CurrentTime=()=>{
        currentTime = new Date().toLocaleTimeString();
        setCTime(currentTime);
    }
    setInterval(CurrentTime,1000)
    return(
        <div>
            <h1><span style={{backgroundColor:'purple',
                                                color:'#fff',
                                                border:'2px solid white',
                                                padding:'10px'
                                                
                                                }}>{'Time : '+cTime}</span></h1>
             
        </div>
    )
}
export {Counter,Timer,DigitalClock} ;
