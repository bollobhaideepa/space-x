import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import './styles.css';
export class LaunchView extends React.Component{
    state={
        launch:{}
    }
    componentDidMount=()=>{
        const flight_No=this.props.match.params.flight_number
        this.getLaunch(flight_No)
    }
    getLaunch=(flight_No)=>{
        axios.get('https://api.spacexdata.com/v3/launches/3'+flight_No).then((responce) => {
            this.setState({
                launch:responce.data
            })
            }).catch((error)=>{
                console.log(error)
            })
    }
    launchAttribute = (title, key)=>{
        const value=this.state.launch[key];
        return (
            <div className="attbr">
                <h1>{title}</h1>
                <h1>{value}</h1>
            </div>
        )
    }
    render(){
        return(
            <div className="launchview">
                {this.launchAttribute("Mission Name","mission_name")}
                {this.launchAttribute("Flight Number","flight_number")}
                {this.launchAttribute("Launch Date","launch_date_local")}
               <p className="launchdescription"> {this.state.launch.details}</p>
            </div>
        )
    }
}
export default withRouter(LaunchView);