import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames } from './actions';
import { NavLink } from 'react-router-dom';

class Games extends Component {
  
  componentDidMount() {
    
    this.props.fetchGames();
  }

  render() {
    return (
        <div>

          <h2>Games List</h2>
          <NavLink to={this.props.match.url + "/new"} className="ui basic button">
            <i className="icon plus"></i>
            Add Game
          </NavLink>
        
          <GamesList games={this.props.games} />

        </div>
    
    );
  }
}

Games.propTypes = {
  games: PropTypes.array.isRequired,
	fetchGames: PropTypes.func.isRequired

}

function mapStateToProps(state) {
	return {
		games: state.games
	}
}

export default connect(mapStateToProps, { fetchGames })(Games);
