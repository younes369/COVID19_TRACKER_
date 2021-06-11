import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './Chart.css'


const Chart = (props)=>{
    
    try {
        
    
    
        if(!props.data.confirmed){
            return 'loading...'
        }
        return(
            <div className="chart">
                 <Doughnut
                data={{
                    labels:['confirmed','deaths','recovered'],
                    datasets:[{
                        label: 'My First Dataset',
                        data:[props.data.confirmed.value,props.data.deaths.value,props.data.recovered.value ],
                        backgroundColor:[
                           ' rgba(240, 196, 2, 0.966)',
                            'rgba(226, 12, 12, 0.966)',
                            'rgba(30, 185, 51, 0.966)',
                        ],
                        hoverOffset: 4
                    
                    }]
                }}
          />
            </div>
        )
    
    } catch (error) {
        console.log(error)
        return("sorry can't get thte data please reload...")
    }
    
    
    
}

export  default Chart;