import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/ultra_princess/cards')
      .then((res) => {
        this.setState({ cards: res.data })
      })
      .catch((error) => {
        alert('hm ur cards didnt load maybe u should refresh lol');
      });
  }

  delCard = (id) => {
    const url = 'https://inspiration-board.herokuapp.com/cards/' + id.toString();

    axios.delete(url)
      .then(() => {
        let index;
        let newState = this.state;

        newState.cards.forEach((card, i) => {
          if (card.card.id === id) {
            index = i;
          }
        });

        newState.cards.splice(index, 1);

        this.setState(newState);
      })
      .catch((e) => {
        alert('sry could not delete ?? idk tbh..');
        console.log(e);
      });
  }

  addCard = (newCard) => {
    const url = `https://inspiration-board.herokuapp.com/boards/ultra_princess/cards?text=${newCard.text}&emoji=${newCard.emoji}`;

    axios.post(url)
      .then((res) => {
        let newState = this.state;
        newState.cards.push(res.data);

        this.setState(newState);
      })
      .catch((e) => {
        alert('sry could not add card ?? idk tbh..');
        console.log(e);
      });
  }

  render() {
    const cards = this.state.cards.map((e, i) => {
      return (
        <Card key={ e.card.id }
          id={ e.card.id }
          text={ e.card.text }
          emoji={ e.card.emoji }
          delCB={ this.delCard } />
      )
    });

    return (
      <div className="board">
        { cards }
        <NewCardForm addCB={ this.addCard } />
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
