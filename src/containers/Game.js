import React, { Component } from "react";
import TopBar from "../components/TopBar";
import Rules from "../components/Rules";
import GameCards from "../components/GameCards";

// Import UI components
import { Grid } from "semantic-ui-react";

import characterData from "../data/characterData";

class Game extends Component {
  state = {
    characterData: characterData,
    score: 0,
    topScore: 0
  }

  // when component mounts shuffle cards
  componentDidMount() {
    this.setState({
      characterData: this.shuffleCharacters(this.state.characterData)
    })
  }
  
  // shuffle characters list and return new array
  shuffleCharacters = characterData => {
    const shuffledCharacterList = characterData.sort(() => (0.5 - Math.random()));
    return shuffledCharacterList;
  }

  // when image is clicked, pass it's id through and check to see if it's been clicked before
  handleCardClick = id => {
    // set flag of correct guess status
    let guessedCorrectly = false;
    const newCharacterList = this.state.characterData.map(character => {

      // if id passed in is equal to friend[i].id
      if (character.id === id) {
        // if that friend's clicked state is false, then let's make it a correct guess
        if (!character.clicked) {
          character.clicked = true;
          guessedCorrectly = true;
        } 
      }
      return character;

    });

    // if guessedCorrectly was set to `true` then run handleCorrectGuess
    (guessedCorrectly) 
      ? 
    this.handleCorrectGuess(newCharacterList) 
      : 
    this.handleIncorrectGuess(newCharacterList)

  }

  handleCorrectGuess = newCharacterList => {
    // destructure score and topScore out of state
    const {score, topScore} = this.state;

    // create a new score based on the current score + 1
    const newScore = score + 1;

    // if newScore is greater than the current topScore, newScore is the new topScore
    const newTopScore = (newScore > topScore) ? newScore : topScore;

    this.setState({
      characterData: this.shuffleCharacters(newCharacterList),
      topScore: newTopScore,
      score: newScore
    });
  }

  // reset game
  handleIncorrectGuess = newCharacterList => {
    // reset all friends to have a `clicked` property of `false`
    const resetCharacterList = newCharacterList.map(character => {
      character.clicked = false;
      return character;
    })

    this.setState({
      characterData: this.shuffleCharacters(resetCharacterList),
      score: 0
    });
  }

  render() {
    console.log(characterData);
    return (
      <Grid centered padded>
        <TopBar score={this.state.score} topScore={this.state.topScore}/>
        <Rules/>
        <GameCards score={this.state.score} characterData={this.state.characterData} handleCardClick={this.handleCardClick}/>
      </Grid>
    )
  }
}

export default Game;