import React,{Component} from 'react';
import {Link,Button} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
class BlindnessInstructions extends Component{

    render(){
        return(
            <div>
                <h1>Instructions</h1>
            <ListItem component={ListItem}><ListItemText  component={ListItemText} primary={"You clicked on an image. However, without the ability to see, it may be difficult\n" +
            "                to decipher what these images represent."}/></ListItem>
               <ListItem component={ListItem}><ListItemText  component={ListItemText} primary={"Please install the "}><Link component={Link} href={"https://chrome.google.com/webstore/"
               + "detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en"}>ChromeVox</Link></ListItemText>
                   screenreader.</ListItem>

                Please make sure that your screenreader is active and then click the 'next' button to experience what a
                    similar, simple activity might look like to someone who is blind.
                <br/>
                <Button href={"/Lab3/blindGame"}>Next</Button>

            </div>
        );
    }
}
export default BlindnessInstructions;