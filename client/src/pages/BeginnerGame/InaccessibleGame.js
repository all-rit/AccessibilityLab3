import React, {Component} from 'react';
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import CatClickNavigate from '../../components/helpers/CatClickNavigate.js'
import {navigate} from "@reach/router";

class InaccessibleGame extends Component {
    constructor(props) {
        super(props);
        this.state = {render: ''};
        document.body.style = 'background: black';
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    _renderSubComp(path) {
        if (this.state.render === 'CatClickNavigate') {
            return <CatClickNavigate path={path}/>
        }
    }
    handleKeyDown(event){
        console.log('detected key code is: '+event.keyCode);
        if(event.keyCode === 27){
            console.log('Enter key pressed!');
            navigate("/Lab3/AccessibleInstructions");
        }
    }
    onFocus(event){
        console.log('focus gained');
    }
    render() {

        const catClick = () => {
            console.log('Cat image clicked!');
            this.setState({render: 'CatClickNavigate'});
        };
        const burgerClick = () => {
            console.log('Burger image clicked!');
        };
        const carClick = () => {
            console.log('Car image clicked!');
        };

        const imgStyle = {
            width: "128px", height: "128px", border: "1px solid black", opacity: "0.0",
            tabIndex: "0"
        };
        const tableStyle = {
            border: "1px solid black", marginLeft: "auto", marginRight: "auto",
            textAlign: "center", tabIndex: "0"
        };
        const textStyle = {color: 'white', tabIndex: "0"};
        return (
            <div>
                <h1 style={textStyle} tabIndex={"0"}>Inaccessible Game</h1>
                <p style={textStyle} tabIndex={"0"}>Click on the image of a cat. You can use the keyboard to
                    navigate by tabbing across the page. Press the enter key to select.</p>
                <table style={tableStyle} tabIndex={"0"}>
                    <tbody>
                    <tr>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage}
                                                  onClick={() => catClick()} alt={""} tabIndex={"0"}
                                                  onKeyDown={this.handleKeyDown}
                                                  onFocus={this.onFocus}
                                                  onKeyPress={this.handleKeyDown}/>
                        </td>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={carImage}
                                                  onClick={() => carClick()} alt={""} tabIndex={"0"}
                                                  onKeyDown={this.handleKeyDown}
                                                  onFocus={this.onFocus}
                                                  onKeyPress={this.handleKeyDown}/>
                        </td>
                    </tr>
                    <tr>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={burgerImage}
                                                  onClick={() => burgerClick() } alt={""}
                                                  tabIndex={"0"}
                                                  onKeyDown={this.handleKeyDown}
                                                  onFocus={this.onFocus}
                                                  onKeyPress={this.handleKeyDown}/></td>
                        <td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage}
                                                  onClick={() => catClick()} alt={""}
                                                  tabIndex={"0"}
                                                  onKeyDown={this.handleKeyDown}
                                                  onKeyPress={this.handleKeyDown}
                                                  onFocus={this.onFocus}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                {this._renderSubComp("/Lab3/AccessibleInstructions")}
            </div>

        );
    }
}

export default InaccessibleGame;
