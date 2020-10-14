import React from 'react';
import Header from './components/header/Header.jsx';
import './styles.css'
import Launch from './components/Launch/Launch.jsx'
function App() {
  return (
    <div className="App">
     <Header/>
     <Launch 
     title="tittle" 
     date="12/34/21" 
     description="description" 
     drawing="https://farm2.staticflickr.com/1648/23827554109_837b21739e_o.jpg"/>
    </div>
  );
}

export default App;
