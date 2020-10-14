import React from 'react';
import Header from './components/header/Header.jsx';
import LaunchList from './components/LaunchList/LaunchList.jsx';
import LaunchView from './components/LaunchView/LaunchView.jsx';
import './styles.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
     <Switch>
        <Route path="/launch/:flight_number">
            <LaunchView/>     
        </Route>
        <Route path="/">
            <LaunchList/>
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
