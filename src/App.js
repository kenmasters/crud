import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Games from './Games';
import AddGame from './AddGame';
import About from './About';
import Topics from './Topics';
import { NavLink, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="ui menu">
          <NavLink className="item" activeClassName="active" exact to='/'>HOME</NavLink>
          <NavLink className="item" activeClassName="active" exact to='/games'>GAMES</NavLink>
          <NavLink className="item" activeClassName="active" exact to='/about'>ABOUT</NavLink>
          <NavLink className="item" activeClassName="active" exact to='/topics'>TOPICS</NavLink>
        </div>
        
          
       

        <Route exact path="/" component={Home}/>
        <Route exact path="/games" component={Games}/>
        <Route path="/games/new" component={AddGame}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    );
  }
}

export default App;
