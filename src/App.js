import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Games from './Games';
import About from './About';
import Topics from './Topics';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to='/'>HOME</Link>
          <Link to='/games'>GAMES</Link>  
          <Link to='/about'>ABOUT</Link>
          <Link to='/topics'>TOPICS</Link>
        </p>

        <Route exact path="/" component={Home}/>
        <Route path="/games" component={Games}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>

        
      </div>
    );
  }
}

export default App;
