import React from 'react';
import styles from './App.module.css';
import {fetchData} from './api/index'
import {fetchCountriesList} from './api/index'

import {Card, Chart, CountryPicker} from './compoment';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {data:{}, countriesList:{}, value:true};
  }
  
  
  async componentDidMount(){
    const Data = await fetchData();
    const CountiesList = await fetchCountriesList();
    console.log('component did mount')
    console.log(Data)


    this.setState({
      data: Data, countriesList:CountiesList
    })

  }

   reseting = async() => {
    const Data = await fetchData();
    const CountiesList = await fetchCountriesList();

    this.setState({
      data: Data, countriesList:CountiesList
    })
  }



  componentWillUnmount(){
    console.log("unmounted")
  }
  
  render() {

        return (
          <div className={styles.container} >
              <Card data ={this.state.data}/>
              <CountryPicker reseting ={this.reseting} countriesList={this.state.countriesList}/>  
              <Chart data={this.state.data} value={this.state.value}/>
          </div>
        );
      }

}





export default App;
