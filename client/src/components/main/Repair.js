import React, {Component} from 'react';
import Prism from 'prismjs';
import "../../assets/stylesheets/prism.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
class Repair extends Component {

    constructor(props){
        super(props);
        this.setState({altValue:' '});
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        Prism.highlightAll();
    }

    handleChange(event){
        this.setState({altValue: event.target.altValue});
    }
    handleSubmit(event){
        console.log('Alt Tag updated as: '+ this.state.altValue);
        event.preventDefault();
    }
    render() {
        const altValue = eval('`' + (this.state.altValue == null ? ' ' : this.state.altValue) + '`');
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
                    <TextField id={"code-field"} label={"AltTag="} value={this.state.altValue}
                               onChange={this.handleChange} margin={"normal"}/> <br/>
                    <Button type={"submit"} aria-label={"Update Code"} variant={"contained"}
                            color={"primary"} href={"#"}>Update Code</Button>
                </form>
            </div>
        );
    };

}

export default Repair;
