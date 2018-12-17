import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    };
  }

  resetState = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text, emoji } = this.state;
    const newCard = { text: text, emoji: emoji };

    this.props.addCB(newCard);
  }

  render() {
    return(
      <div className="new-card-form">
        <h2 className="new-card-form__header">
          Add a Card!
        </h2>
        <form onSubmit={this.onSubmit} name="new-card-form__form" className="new-card-form__form">
          <label className="new-card-form__form-label" htmlFor="text">
            Text
          </label>
          <textarea className="new-card-form__form-textarea" name="text" placeholder="text goes here"  onChange={this.onFormChange} value={this.state.text} />
          <label className="new-card-form__form-label" htmlFor="emoji">
            Emoji
          </label>
          <select className="new-card-form__form-select" name="emoji" onChange={this.onFormChange}>
            <option value=""></option>
            <option value="heart_eyes">😍</option>
            <option value="beer">🍺</option>
            <option value="clap">👏</option>
            <option value="sparkling_heart">💖</option>
            <option value="heart_eyes_cat">😻</option>
            <option value="dog">🐶</option>
          </select>
          <input className="new-card-form__form-button" type="submit" name="submit" value="add it" />
        </form>
      </div>
    );
  }
}

export default NewCardForm;
