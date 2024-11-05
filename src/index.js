import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Cards';
import Sdata from './Sdata';
import {Counter,DigitalClock,Timer} from './UseStateHookCounter';

let emo = '😄';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>

    <h1 className='heading_style'>Top netflix movies or series</h1>
    {/* <Card cardImg="https://wallpapercave.com/wp/wp4056410.jpg" 
          category="A Netflix origional series" 
          title="Dark" 
          target="https://www.netflix.com/in/title/80990668?source=35"/> 

    <Card cardImg="https://wallpapercave.com/wp/wp4056410.jpg" 
              category="A Netflix origional series" 
              title="Dark" 
              target="https://www.netflix.com/in/title/80990668?source=35"/>
    <Card cardImg="https://wallpapercave.com/wp/wp4056410.jpg" 
              category="A Netflix origional series" 
              title="Dark" 
              target="https://www.netflix.com/in/title/80990668?source=35"/>
    <Card cardImg="https://wallpapercave.com/wp/wp4056410.jpg" 
              category="A Netflix origional series" 
              title="Dark" 
              target="https://www.netflix.com/in/title/80990668?source=35"/> 
    
    <Card cardImg="https://wallpapercave.com/wp/wp4056410.jpg" 
              category="A Netflix origional series" 
              title="Dark" 
              target="https://www.netflix.com/in/title/80990668?source=35"/>
    */}

    {
     
     
      Sdata.map((val)=>{
        return(
          <Card cardImg={val.cardImg} 
              category={val.category} 
              title={val.title} 
              target={val.target}

              /> 

        )
      })
    }

  <Counter/>
  <Timer />
  <DigitalClock />

  </React.StrictMode>
);


// first lecture till video 21
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
    
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
