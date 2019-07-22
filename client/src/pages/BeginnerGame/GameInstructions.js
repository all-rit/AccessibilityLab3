import React, {Component} from 'react';
import {Button, Link} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

class GameInstructions extends Component {

    render() {
        return (
            <div>
                <h1>Instructions</h1>
                <ListItem component={ListItem}><ListItemText component={ListItemText}
                                                             primary={"You clicked on an image. However, without the ability to see, it may be difficult\n" +
                                                             "                to decipher what these images represent."}/></ListItem>
                <div>
                    <p>
                        Please make sure you are using <Link component={Link} href={"https://www.google.com/chrome/"}>Google
                        Chrome</Link>. Please install the <Link component={Link}
                                                                href={"https://chrome.google.com/webstore/"
                                                                + "detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en"}>ChromeVox</Link> screenreader(If
                        not already installed).
                        Please make sure that ChromeVox is active and then click the 'next' button to experience what a
                        similar, simple activity might look like to someone who is blind.</p>
                    <br/>
                </div>
                <Button href={"/Lab3/InAccessibleGame"} variant={"contained"} color={"primary"}>Next</Button>

            </div>
        );
    }
}

export default GameInstructions;