import React from "react";
import {Grid, Header} from "semantic-ui-react";

const styles = {
  fontFamily: "bangers, cursive",
  fontSize: "40px",
  margin: "12px 0",
  textShadow: "2px 2px black"
};

const styles2 = {
  fontFamily: "Luckiest Guy",
  fontSize: "45px",
  color: "#FABBBB",
  margin: "12px 0",
  textShadow: "4px 4px black"
};

const styles3 = {
  fontFamily: "bangers, cursive",
  fontSize: "40px",
  margin: "12px 0",
  color: "orange",
  textShadow: "2px 2px black"
};

const TopBar = props => (
  <Grid.Row 
    as="div"
    centered
    verticalAlign={"middle"}
    color={"brown"}
  >

    <Grid.Column width={5} textAlign={"center"}>
      <Header inverted as={"h2"} style={styles2} textAlign={"center"}>
        Archer Click Game!
      </Header>
    </Grid.Column>

    <Grid.Column width={5} textAlign={"center"}>
      <Header inverted as={"h2"} style={styles3} textAlign={"center"}>
        {props.score ? ("You Guessed Correctly!") : ("Click Image To Start Game")}
      </Header>
    </Grid.Column>

    <Grid.Column width={5} textAlign={"center"}>
      <Header inverted as={"h2"} style={styles} textAlign={"center"}>
        Current Score: {props.score} | Top Score: {props.topScore}
      </Header>
    </Grid.Column>

  </Grid.Row>
);

export default TopBar;