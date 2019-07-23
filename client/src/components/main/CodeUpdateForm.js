import React,{Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CodeUpdateForm extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.handleChange.bind(this)});
    }
    handleSubmit(event){
        console.log('Alt Tag updated as: '+ this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
                <TextField id={"code-field"} label={"AltTag="} value={this.state.value} onChange={this.handleChange}
                           margin={"normal"}/>
                <Button type={"submit"} aria-label={"Update Code"}/>

            </form>
        );
    }
}
export default CodeUpdateForm;