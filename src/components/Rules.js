import React from "react";
import {Grid, Header} from "semantic-ui-react";

const styles = {
  background: "url('https://preview.ibb.co/eO0UCU/martini_bg.jpg') repeat",
  backgroundBlendMode: "lighten",
  boxShadow: "0 3px 3px 0 rgba(34,36,38,.15)"
}

const Rules = () => (
  <Grid.Row color={"pink"} style={styles} verticalAlign={"middle"} centered >
    <Grid.Column width={12} textAlign={"center"} style={{margin: "50px 0"}}>
      

      <Header sub inverted style={{color: "black", textShadow: "1px 1px #ffffff", fontFamily: "bangers, cursive", fontSize: "36px"}}>Click on an image to earn points, but don't click on any more than once!</Header>
    </Grid.Column>

  </Grid.Row>

);

export default Rules;