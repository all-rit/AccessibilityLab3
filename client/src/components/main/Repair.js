import React, {Component} from 'react';
import Prism from 'prismjs';
import "../../assets/stylesheets/prism.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
class Repair extends Component {

    constructor(props){
        super(props);
        this.state = {altValue:'', actualAltValue: '',textValue:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        Prism.highlightAll();
    }

    handleChange(event){
        this.setState({textValue: event.target.value},() => {
            this.setState({actualAltValue: this.state.textValue},() => {
                console.log('handled change value: '+ this.state.actualAltValue);
                Prism.highlightAll();
            });
        });

    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({altValue:this.state.actualAltValue}, () => {
            console.log('Alt Tag updated as: '+ this.state.altValue);
            Prism.highlightAll();
        });

    }
    render() {
        const altValue = eval('`' + this.state.actualAltValue + '`');
        return (
            <div>
				<pre>
                    <code className="language-html">
					  {`
<table tabIndex="0">
	<tbody>
		<tr>
			<td tabIndex="0"><input type="image" src="cat.png" onClick="(); => catClick()" alt="`+altValue+`" tabIndex="0"/></td>
			<td tabIndex="0"><input type="image" src="car.png" onClick="(); => carClick()" alt="car" tabIndex="0"/></td>
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
                <Typography variant={"h6"} align={"center"}>Update code here:</Typography>
                <br/>
                <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
                    <TextField required id={"code-field"} label={"AltTag="} value={this.state.textValue}
                               onChange={this.handleChange} margin={"normal"} variant={"standard"}/> <br/>
                    <Button type={"submit"} aria-label={"Update Code"} variant={"contained"}
                            color={"primary"}>Update Code</Button>
                </form>
            </div>
        );
    };

}

export default Repair;
