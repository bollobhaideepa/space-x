import React from 'react';
import './styles.css';

class Launch extends React.Component{
render(){
    return(
    <div className='launch'>
        <img src={this.props.drawing} alt='launch'/>
    <div className='content'>
      <div className='data'>
    <h2>{this.props.title}</h2>
    <h2>{this.props.date}</h2>
      </div>
    <p>{this.props.description}</p>
    </div>
    </div>
    )
}
}
export default Launch;