import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "@material-ui/core";

class CatClickNavigate extends Component{
    render() {
        return(
            <div id={"catClickMessage"}>
            <p>Cat clicked! Please click the 'next' button to continue.</p>
                <br/>
                <Button component={Link} href={"/"} variant="contained" >Next</Button>
            </div>
        );
    }
}

export default CatClickNavigate;