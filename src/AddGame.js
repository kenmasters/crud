import React, { Component } from 'react';
import classnames from 'classnames';


class AddGame extends Component {
  state = {
  	title: '',
  	cover: ''
  };

  handleChange = (e) => {
  	this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');

  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>

     	<h2>Add New Game</h2>

        <div className={classnames('field')}>
          <label>Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} id="title" placeholder="Title" />
        </div>

        <div className="field">
          <label>Cover URL</label>
          <input type="text" name="cover" value={this.state.cover} onChange={this.handleChange} id="cover" placeholder="Cover URL" />
        </div>

        <div className="field">
          {this.state.cover !== '' && <img className="ui small bordered image" src={this.state.cover} alt="cover"/>}
        </div>

        <div className="field">
			<button className="ui button primary" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

// Games.propTypes = {
//   games: PropTypes.array.isRequired,
// 	fetchGames: PropTypes.func.isRequired

// }

// function mapStateToProps(state) {
// 	return {
// 		games: state.games
// 	}
// }

export default AddGame;
