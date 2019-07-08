import React, {Component} from 'react';
import './gameStyle.css';
class game extends Component{
    constructor(props){
        super(props);
    }

    redirectToInstructions(){

    };
    render() {
       return(
           <div>
               <p>Click on the image of a cat.</p>
               <table>
                   <tr>
                       <td>{/* cat image*/}<input id="img" type="image" src="img/c1.svg" onClick={this.redirectToInstructions().bind(this)} /></td>
                       <td>{/* car image*/}<input id="img" type="image" src="img/c2.svg" onClick={this.redirectToInstructions().bind(this)} /></td>
                   </tr>
                   <tr>
                       <td>{/* burger image */}<input id="img" type="image" src="img/b.png" onClick={this.redirectToInstructions().bind(this)} /></td>
                       <td>{/* cat image*/}<input id="img" type="image" src="img/c1.svg" onClick={this.redirectToInstructions().bind(this)} /></td>
                   </tr>
               </table>
               <br />
           </div>
       );
    }
}

export default game;