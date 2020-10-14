import React from 'react';
import Launch from '../Launch/Launch.jsx';
import './styles.css';

class LaunchList extends React.Component{
    render(){
        return(
    <div className="Launchlist">
    <Launch
     title="tittle" 
     date="12/34/21" 
     description="description" 
     drawing="https://farm2.staticflickr.com/1648/23827554109_837b21739e_o.jpg"/>
     
     <Launch
     title="tittle" 
     date="12/34/21" 
     description="description" 
     drawing="https://farm2.staticflickr.com/1648/23827554109_837b21739e_o.jpg"/>
    </div>
        )
    }
}
export default LaunchList;
