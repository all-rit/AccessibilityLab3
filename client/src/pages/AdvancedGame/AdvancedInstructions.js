import React, {Component} from "react";
import Button from "@material-ui/core/Button"
class AdvancedInstructions extends Component{
    render() {
        return(
            <div>
                <h1>Advanced Instructions</h1>
                <br/>
                <p>Instructions for Advanced Activity.</p>
                <Button href={"/Lab3/ProblemDiscovery"} variant={"contained"} color={"primary"}>
                    Next
                </Button>
            </div>
        );
    }
}
export default AdvancedInstructions;