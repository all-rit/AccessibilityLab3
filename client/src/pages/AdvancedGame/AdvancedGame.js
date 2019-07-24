import React,{Component} from 'react';
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
class AdvancedGame extends Component{

    render() {
        return(
            <div>
                <Typography aria-label={"Advanced Game"} variant={"h4"} gutterBottom>
                    Advanced Game
                </Typography><br/>
                <Typography aria-label={"instructions"} variant={"body1"} gutterBottom>The learning
                    objective of this lab is for students to learn and apply the Understandable
                    accessibility principle. The game consists of performing
                    some tasks. CLick Start game to begin!</Typography><br/>
                <Button href={"/Lab3/AdvancedInstructions"} variant={"contained"} color={"primary"} aria-label={"Start Game"}>
                    Start Game
                </Button>
            </div>
        );
    }
}
export default AdvancedGame;