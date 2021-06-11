import React from 'react';
import './CountryPicker.css'
import{handelChange} from '../../api/index'



const CountryPicker = (props)=>{
 
 
 


  if(!props.countriesList){
    return 'loading...'
  }
  let data = [];
  for(let i = 0; i < props.countriesList.length; i++) {
    data.push(
      <option key={i }value={props.countriesList[i]}>{props.countriesList[i]}</option>
    );
  }
      return(
        <div className="CountryPicker">
          <label>
            Pick a Country:
          </label>
          <div className="select">
          <select onChange={handelChange}>
            <option key='global' value="Global">Global</option>
            {data}
          </select>
          <button onClick={()=>props.reseting()} >Select</button>
          </div>
        </div>
      )

}

export default CountryPicker;
