import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from './components/TopMenu';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div>
        
        <TopMenu />
        <div className="container">
        <Switch>
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </div>
        </div>
      
      <Footer />
    </Router>
    

  );
}

export default App;
