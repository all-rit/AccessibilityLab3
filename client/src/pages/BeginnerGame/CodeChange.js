import React, {Component} from 'react';
import CodeUpdateHeader from "../../components/main/CodeUpdateHeader";
import Prism from "prismjs";
import {navigate} from "@reach/router";
import Button from "@material-ui/core/Button";
import "../../assets/stylesheets/prism.css";
import {Paper} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {amber, green, red, yellow} from "@material-ui/core/colors";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};


function MySnackbarContentWrapper(props) {


    const classes = {
        success: {
            backgroundColor: green[600],
        },
        error: {
            backgroundColor: red,
        },
        info: {
            backgroundColor: yellow,
        },
        warning: {
            backgroundColor: amber[700],
        },
        icon: {
            fontSize: 10,
        },
        iconVariant: {
            opacity: 0.9,
        },
        message: {
            display: 'flex',
            alignItems: 'center',
        }
    };
    const {className, message, onClose, variant, ...other} = props;
    const Icon = variantIcon[variant];
    const messageStyle = {marginLeft: '10px'};
    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message} color={amber}>
                    <Typography variant={"body2"} style={messageStyle} aria-label={message} gutterBottom>
                      <Icon className={clsx(classes.icon, classes.iconVariant)}/> {message}
                    </Typography>
        </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon}/>
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

class CodeChange extends Component {

    constructor(props) {
        super(props);
        document.body.style = 'background: white';
        this.state = {textValue: '', textValue1: '', open: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        CodeChange.renderButton = CodeChange.renderButton.bind(this);
        if (window.location.state === undefined) {
            window.location.state = {endButtonEnabled: false}
        } else {
            window.location.state = {
                endButtonEnabled: true,
                catAltValue: window.location.state.catAltValue,
                carAltValue: window.location.state.carAltValue
            };
        }
    }

    componentDidMount() {
        Prism.highlightAll();
        if (window.location.state.catAltValue !== undefined && window.location.state.carAltValue !== undefined) {
            const el0 = document.getElementById("first");
            el0.value = window.location.state.catAltValue;
            CodeChange.doEvent(el0, 'input');
            const el1 = document.getElementById("second");
            el1.value = window.location.state.carAltValue;
            CodeChange.doEvent(el1, 'input');
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

    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open: false}, () => {
            console.log('SnackBar Closed')
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Cat Alt Tag updated as: ' + this.state.textValue);
        console.log('Car Alt Tag updated as: ' + this.state.textValue1);
        if (this.state.textValue === '' || this.state.textValue1 === '') {
            this.setState({open: true});
        } else {
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

    static doEvent(obj, event) {
        const eventInit = new Event(event, {target: obj, bubbles: true});
        return obj ? obj.dispatchEvent(eventInit) : false;
    }

    render() {
        const paperStyle = {marginLeft: "10px", marginRight: "10px", marginTop: "20px"};
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
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <MySnackbarContentWrapper
                        onClose={this.handleClose}
                        variant="warning"
                        message="Please type code before updating code!"
                    />
                </Snackbar>
            </div>
        );
    };

}

export default CodeChange;