import axios from 'axios';

let url = 'https://covid19.mathdro.id/api';
let urlC = 'https://covid19.mathdro.id/api/countries';





export const handelChange = (event)=>{
  if(event.target.value ==='Global'){
    url = 'https://covid19.mathdro.id/api';
    console.log(url)
  }else{
    url = `${url}/countries/${event.target.value}`
    console.log(url)
    fetchData(url)
  }
}


export const fetchData = async ()=>{

    try {
      const {data} = await axios.get(url);
      let modifData = {
          confirmed:data.confirmed,
          deaths:data.deaths,
          recovered:data.recovered,
          lastUpdate:data.lastUpdate,    
    }
    console.log(modifData)
    console.log(`${url} in the fetchData function`)
      return(modifData);

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountriesList = async ()=>{
  try {
    let country = [];
    const {data :{countries}} = await axios.get(urlC)
    
    countries.forEach(element => {
      country.push(element.name)      
    });
    return(country)

  } catch (error) {
    console.log(error)
  }
}
