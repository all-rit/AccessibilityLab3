import React, {Component} from 'react';
import CodeUpdateHeader from "../../components/main/CodeUpdateHeader";
import Prism from "prismjs";
import {navigate} from "@reach/router";
import Button from "@material-ui/core/Button";
import "../../assets/stylesheets/prism.css";
class CodeChange extends Component {

    constructor(props){
        super(props);
        document.body.style = 'background: white';
        this.state = {textValue:'',textValue1: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        CodeChange.renderButton = CodeChange.renderButton.bind(this);
        if(window.location.state === undefined){
            window.location.state = {endButtonEnabled: false}
        }
        else{
            window.location.state = {endButtonEnabled: true}
        }
    }
    componentDidMount() {
        Prism.highlightAll();
    }

    handleChange(event){
        this.setState({textValue: event.target.value},() => {
            console.log('handled change value: '+ this.state.textValue);
            Prism.highlightAll();
        });

    }
    handleChange1(event) {
        this.setState({textValue1: event.target.value},() => {
            console.log('handled change value: '+ this.state.textValue1);
            Prism.highlightAll();
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('Cat Alt Tag updated as: '+ this.state.textValue);
        console.log('Car Alt Tag updated as: '+ this.state.textValue1);
        Prism.highlightAll();
        window.location.state = {catAltValue: this.state.textValue, carAltValue: this.state.textValue1, endButtonEnabled: true};
        navigate('/Lab3/AccessibleUserUpdatedGame');
    }
    static renderButton(){
        const buttonEnabled = window.location.state.endButtonEnabled;
        const buttonStyle = {marginLeft: '10px'};
        if(buttonEnabled){
            return (<Button href={"/Lab3/BeginnerGameConclusion"} aria-label={"End Activity"}
                            variant={"contained"} color={"secondary"} style={buttonStyle}>
                End Activity
            </Button>);
        }
    }
    render() {
        //const altValue = eval('`' + this.state.actualAltValue + '`');
        return (
            <div>
                {<CodeUpdateHeader/>}
                <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
				<pre>
                    <code className="language-html">
					  {`
<table tabIndex="0">
	<tbody>
		<tr>
			<td tabIndex="0"><input type="image" src="cat.png" onClick="(); => catClick()" alt="`}
                    </code><input type={"text"} value={this.state.textValue}
                                  onChange={this.handleChange}
                                  aria-label={"Please type in alt tag contents for this image"}/>
                                  <code className="language-html">{`" tabIndex="0"/></td>
			<td tabIndex="0"><input type="image" src="car.png" onClick="(); => carClick()" alt="`}</code><input type={"text"} value={this.state.textValue1}
                                                                                                                onChange={this.handleChange1} aria-label={"Please type in alt tag contents for this image"}/><code className="language-html">{`" tabIndex="0"/></td>
		</tr>
		<tr>
			<td tabIndex="0"><input type="image" src="burger.png" onClick="(); => burgerClick()" alt="burger" tabIndex="0"/></td>
			<td tabIndex="0"><input type="image" src="cow.png" onClick="(); => cowClick()" alt="cow" tabIndex="0"/></td>
		</tr>
	</tbody>
</table>`}
  					</code>
				</pre>
                    <br/>
                    <br/>
                    <Button type={"submit"} aria-label={"Update Code"} variant={"contained"}
                            color={"primary"}>
                        Update Code
                    </Button>
                    {CodeChange.renderButton()}
                </form>
            </div>
        );
    };

}

export default CodeChange;