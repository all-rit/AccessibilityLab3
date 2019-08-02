import React,{Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "../../assets/stylesheets/prism.css";
import Prism from "prismjs";
import {navigate} from "@reach/router";
class ProblemFix extends Component{
    constructor(props){
        super(props);
        this.state = {textValue:'',textValue1: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        ProblemFix.renderButton = ProblemFix.renderButton.bind(this);
        if(window.location.state === undefined){
            window.location.state = {endAdvancedActivityButtonEnabled: false}
        }
        else{
            window.location.state = {endAdvancedActivityButtonEnabled: true}
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
        window.location.state = {aria1: this.state.textValue, aria2: this.state.textValue1};
        Prism.highlightAll();
        navigate('/Lab3/ViewFix');
    }
    static renderButton(){
        const buttonEnabled = window.location.state.endAdvancedActivityButtonEnabled;
        const buttonStyle = {marginLeft: '10px'};
        if(buttonEnabled){
            return (<Button href={"/Lab3/AdvancedGameConclusion"} aria-label={"End Activity"}
                            variant={"contained"} color={"secondary"} style={buttonStyle}>
                End Activity
            </Button>);
        }
    }
    render(){
        return(
            <div>
                <Typography variant={"h4"} aria-label={"Title"} gutterBottom>
                    Problem Fix
                </Typography><br/>
                <Typography variant={"subtitle1"} aria-label={"Subtitle Instructions"} gutterBottom>
                    Update the aria-tags to fix the accessibility issues.
                </Typography><br/>
                <Typography variant={"body1"} aria-label={"Body Instructions"} gutterBottom>
                    Make changes and then press update Code.
                </Typography>
                <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
                <pre>
                    <code className="language-html">
                        {`
<button aria-label="`}</code><input type={"text"} value={this.state.textValue}
                                    onChange={this.handleChange}
                                    aria-label={"Please type in alt tag contents for text field"}/>
                                    <code>{`">Ok</button>
<button aria-label="`}</code><input type={"text"} value={this.state.textValue1}
                                    onChange={this.handleChange1}
                                    aria-label={"Please type in alt tag contents for text field"}/><code>{`">Cancel</button>                        
`}
                    </code>
                </pre>
                <br/>
                <Button type={"submit"} aria-label={"Update Code"} variant={"contained"}
                        color={"primary"}>
                    Update Code
                </Button>
                    {ProblemFix.renderButton()}
                </form>
            </div>
        );
    }
}
export default ProblemFix;