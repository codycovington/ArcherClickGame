import React from "react";
import {Grid, Image} from "semantic-ui-react";
import "./gameCard.css";

const GameCards = props => (
  <Grid.Row centered>
    <Grid.Column width={12}>
      <Grid centered padded >
        <Grid.Row>
          {props.characterData.map(character => (
            <Grid.Column key={character.id} width={4}>
              <Image 
              className={`classOne classTwo ${(!props.score) ? "incorrect" : ""}`} onClick={() => props.handleCardClick(character.id)} src={character.image} bordered spaced rounded circular />
            </Grid.Column>
          ))
        }
        </Grid.Row>
      </Grid>
    </Grid.Column>
  </Grid.Row>
);

export default GameCards;