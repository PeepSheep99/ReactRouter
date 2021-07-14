import React from 'react'
import Nav from './components/Nav';
import about from './components/about';
import home from './components/home';
import contact from './components/contact';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/ReactRouter' component={home}/>
            <Route exact path='/' component={home}/>
            <Route exact path='/about' component={about}/>
            <Route exact path='/contact' component={contact}/>   
          </Switch>
          
      </div>
    </Router>
  );
}

export default App;
