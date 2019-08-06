import React, {Component} from 'react';
import CodeUpdateHeader from "../../components/main/CodeUpdateHeader";
import Prism from "prismjs";
import {navigate} from "@reach/router";
import Button from "@material-ui/core/Button";
import "../../assets/stylesheets/prism.css";
import {Paper} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";

class CodeChange extends Component {

    constructor(props) {
        super(props);
        document.body.style = 'background: white';
        this.state = {textValue: '', textValue1: '',open: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        CodeChange.renderButton = CodeChange.renderButton.bind(this);
        if (window.location.state === undefined) {
            window.location.state = {endButtonEnabled: false}
        } else {
            window.location.state = {endButtonEnabled: true, catAltValue: window.location.state.catAltValue,carAltValue: window.location.state.carAltValue};
        }
    }
    handleClose = () => this.setState({ open: false });
    componentDidMount() {
        Prism.highlightAll();
        if(window.location.state.catAltValue !== undefined && window.location.state.carAltValue !== undefined){
            const el0 = document.getElementById("first");
            el0.value = window.location.state.catAltValue;
            this.doEvent( el0, 'input' );
            const el1 = document.getElementById("second");
            el1.value = window.location.state.carAltValue;
            this.doEvent( el1, 'input' );
        }
    }

    handleChange(event) {
        this.setState({textValue: event.target.value}, () => {
            console.log('handled change value: ' + this.state.textValue);
            Prism.highlightAll();
        });

    }

    handleChange1(event) {
        this.setState({textValue1: event.target.value}, () => {
            console.log('handled change value: ' + this.state.textValue1);
            Prism.highlightAll();
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Cat Alt Tag updated as: ' + this.state.textValue);
        console.log('Car Alt Tag updated as: ' + this.state.textValue1);
        if(this.state.textValue === '' || this.state.textValue1 === ''){
            // this.state = {open: true};
        }
        else{
            window.location.state = {
                catAltValue: this.state.textValue,
                carAltValue: this.state.textValue1,
                endButtonEnabled: true
            };
            navigate('/Lab3/AccessibleUserUpdatedGame');
        }
        Prism.highlightAll();
    }

    static renderButton() {
        const buttonEnabled = window.location.state.endButtonEnabled;
        const buttonStyle = {marginLeft: '10px'};
        if (buttonEnabled) {
            return (<Button href={"/Lab3/BeginnerGameConclusion"} aria-label={"End Activity"}
                            variant={"contained"} color={"secondary"} style={buttonStyle}>
                End Activity
            </Button>);
        }
    }
    doEvent( obj, event ) {
        /* Created by David@Refoua.me */
        const eventInit = new Event( event, {target: obj, bubbles: true} );
        return obj ? obj.dispatchEvent(eventInit) : false;
    }
    render() {
        const paperStyle = {marginLeft: "10px", marginRight: "10px", marginTop: "20px"};
        const snackBarStyle = {backgroundColor:"red"};
        return (
            <div>
                {<CodeUpdateHeader/>}
                <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
                    <Paper style={paperStyle}>
				<pre>
                    <code className="language-html">
					  {`
<table tabIndex="0">
	<tbody>
		<tr>
			<td tabIndex="0"><input type="image" src="cat.png" onClick="(); => catClick()" alt="`}
                    </code><input type={"text"} id="first" value={this.state.textValue}
                                  onChange={this.handleChange}
                                  aria-label={"Please type in alt tag contents for this image"}/>
                                  <code className="language-html">{`" tabIndex="0"/></td>
			<td tabIndex="0"><input type="image" src="car.png" onClick="(); => carClick()" alt="`}</code><input
                    type={"text"} id="second" value={this.state.textValue1}
                    onChange={this.handleChange1} aria-label={"Please type in alt tag contents for this image"}/><code
                    className="language-html">{`" tabIndex="0"/></td>
		</tr>
		<tr>
			<td tabIndex="0"><input type="image" src="burger.png" onClick="(); => burgerClick()" alt="burger" tabIndex="0"/></td>
			<td tabIndex="0"><input type="image" src="cow.png" onClick="(); => cowClick()" alt="cow" tabIndex="0"/></td>
		</tr>
	</tbody>
</table>`}
  					</code>
				</pre>
                    </Paper>
                    <br/>
                    <br/>
                    <Button type={"submit"} aria-label={"Update Code"} variant={"contained"}
                            color={"primary"}>
                        Update Code
                    </Button>
                    {CodeChange.renderButton()}
                </form>
                <Snackbar
                    open={this.state.open}
                    onClose={this.handleClose}
                    style={snackBarStyle}
                >
                    Code missing. Please enter code.
                </Snackbar>
            </div>
        );
    };

}

export default CodeChange;