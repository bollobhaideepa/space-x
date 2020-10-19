import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import './styles.css';

  
export class LaunchView extends React.Component{
    state={
        launch:{
            links:{
                flickr_images: [],
            },
        },
    };
    componentDidMount=()=>{
        const flightNo=this.props.match.params.flight_number
        this.getLaunch(flightNo);
    };
    getLaunch=(flightNo)=>{
        axios.get('https://api.spacexdata.com/v3/launches/3'+flightNo).then((response) => {
            this.setState({
                launch:response.data
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
        );
    };
    render(){
        const hashImages = this.state.launch.links.flickr_images.length > 0;
        return(
            <div className="launchview">
                <div className="attribute_section">
                    {this.launchAttribute("Mission Name ------------------>","mission_name")}
                    {this.launchAttribute("Flight Number ----------------->","flight_number")}
                    {this.launchAttribute("Launch Date ------------------->","launch_date_local")}
                </div>
                <hr/>
                <div className="flickr_images">
                    {hashImages &&
                    this.state.launch.links.flickr_images.map((each, index) => (
                    <img key={index} alt="flicker" style={{ width: "100%" }} src={each} />))
                    }
                </div>
                <p className="launchdescription"> {this.state.launch.details}</p>
            </div>
        );
    }
}
export default withRouter(LaunchView);