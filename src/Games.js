import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames } from './actions';

class Games extends Component {
  
  componentDidMount() {
    
    this.props.fetchGames();
  }

  render() {
    return (

        <div>
          <h2>Games List</h2>
          

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
