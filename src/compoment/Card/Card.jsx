import React from 'react';
import './card.css'
import CountUp from 'react-countup';


const Card = (props)=>{
    

   try {
      
   
   
      
      if(!props.data.confirmed){
          return 'loading...'
      }
      return(
       <div className="container" >
           <div className="card">
              <div className="confirmed">
                 <h1>infected:</h1>
                 <CountUp style={{color: "rgba(240, 196, 2, 0.966)"}} start={0} end={props.data.confirmed.value} duration={1.75}   separator=","/>
                 <h1>latest update:</h1>
                 <h1>{new Date(props.data.lastUpdate).toDateString()}</h1>
              </div>
              <span className="span"></span>
           </div>
           <div className="card">
              <div className="confirmed">
              <h1>deaths:</h1>
              <CountUp style={{color: " rgba(226, 12, 12, 0.966)"}} start={0} end={props.data.deaths.value} duration={1.75}   separator=","/>
              <h1>latest update:</h1>
              <h1>{new Date(props.data.lastUpdate).toDateString()}</h1>
              </div>
              <span className="span" style={{ backgroundColor: " rgba(226, 12, 12, 0.966)"}}></span>
           </div>
           <div className="card">
              <div className="confirmed">
              <h1>recovered:</h1>
              <CountUp style={{color: "rgba(30, 185, 51, 0.966)"}} start={0} end={props.data.recovered.value} duration={1.75}   separator=","/>
              <h1>latest update:</h1>
              <h1>{new Date(props.data.lastUpdate).toDateString()}</h1>
              </div>
              <span className="span" style={{backgroundColor: "rgba(30, 185, 51, 0.966)"}}></span>
           </div>
  
       </div>
    )    
      
   } catch (error) {
      console.log(error)
      return("sorry can't get thte data please reload...")
   }

}


export default Card;  