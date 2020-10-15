import React from 'react';
import Launch from '../Launch/Launch.jsx';
import './styles.css';
import axios from 'axios';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router';

export class LaunchList extends React.Component{
    state={
        launches:[]
    }
    componentDidMount = () =>  {
        this.getLaunches()
    }
    getLaunches= ()=>{
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((response)=>{
            this.setState({
                launches:response.data
            })
        })
        .catch((error)=>{
            console.log("eroror")
        })

    }
    launchList=()=>{
        const launchlistcomponent=this.state.launches.map((launch,index) =>{
            const image=launch.links.flickr_images.length===0?'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60':launch.links.flickr_images[0]
            console.log(launch)
            return (
            <Link key={"launch_"+index} to={'/launch/'+launch.flight_number}>
            <Launch 
                
                title={launch.mission_name} 
                date={launch.launch_date_local} 
                description={launch.details} 
                drawing={image}
            />
            </Link>)
        })
        return launchlistcomponent
    }

    render(){
        console.log(this.state.launches[0])
        return(
            <div className="Launchlist">
                {this.launchList()}
            </div>
        )
    }
}
export default withRouter(LaunchList);
