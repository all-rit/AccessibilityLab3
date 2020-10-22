import React, { Component } from "react";
import CodeUpdateHeader from "../../components/main/CodeUpdateHeader";
import Prism from "prismjs";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";
import "../../assets/stylesheets/prism.css";
import { Paper } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { amber, green, red, yellow } from "@material-ui/core/colors";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {GAME_PLAYING} from "../../constants";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

function MySnackbarContentWrapper(props) {
  const classes = {
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: red
    },
    info: {
      backgroundColor: yellow
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 10
    },
    iconVariant: {
      opacity: 0.9
    },
    message: {
      display: "flex",
      alignItems: "center"
    }
  };
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  const messageStyle = { marginLeft: "10px" };
  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span
          id="client-snackbar"
          className={classes.message}
          color={amber}
          aria-label={message}
        >
          <Typography variant={"body2"} style={messageStyle} gutterBottom>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />{" "}
            {message}
          </Typography>
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

class CodeChange extends Component {
  handleEnd() {
    navigate(process.env.PUBLIC_URL + "/BeginnerGameConclusion");
  }
  constructor(props) {
    super(props);
    document.body.style = "background: white";
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    CodeChange.renderButton = CodeChange.renderButton.bind(this);
    if (window.location.state === undefined) {
      window.location.state = { endButtonEnabled: false };
      this.state = {
        textValue: "",
        textValue1: "",
        textValue2: "",
        textValue3: "",
        snackBarOpen: false
      };
    } else {
      window.location.state = {
        endButtonEnabled: true,
        catAltValue: window.location.state.catAltValue,
        carAltValue: window.location.state.carAltValue,
        burgerAltValue: window.location.state.burgerAltValue,
        cowAltValue: window.location.state.cowAltValue
      };
      this.state = {
        textValue: window.location.state.catAltValue,
        textValue1: window.location.state.carAltValue,
        textValue2: window.location.state.burgerAltValue,
        textValue3: window.location.state.cowAltValue
      };
    }
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(GAME_PLAYING);
    Prism.highlightAll();
    if (
      window.location.state.catAltValue !== undefined &&
      window.location.state.carAltValue !== undefined
    ) {
      const el0 = document.getElementById("first");
      el0.value = window.location.state.catAltValue;
      CodeChange.doEvent(el0, "input");
      const el1 = document.getElementById("second");
      el1.value = window.location.state.carAltValue;
      CodeChange.doEvent(el1, "input");
      const el2 = document.getElementById("third");
      el2.value = window.location.state.burgerAltValue;
      CodeChange.doEvent(el2, "input");
      const el3 = document.getElementById("fourth");
      el3.value = window.location.state.cowAltValue;
      CodeChange.doEvent(el3, "input");
    }
  }

  handleChange(event) {
    this.setState({ textValue: event.target.value }, () => {
      Prism.highlightAll();
    });
  }

  handleChange1(event) {
    this.setState({ textValue1: event.target.value }, () => {
      Prism.highlightAll();
    });
  }

  handleChange2(event) {
    this.setState({ textValue2: event.target.value }, () => {
      Prism.highlightAll();
    });
  }

  handleChange3(event) {
    this.setState({ textValue3: event.target.value }, () => {
      Prism.highlightAll();
    });
  }

  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackBarOpen: false }, () => {
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      window.location.state.carAltValue != null &&
      window.location.state.catAltValue != null &&
      window.location.state.burgerAltValue != null &&
      window.location.state.cowAltValue != null &&
      window.location.state.endButtonEnabled != null
    ) {
      window.location.state = {
        catAltValue: this.state.textValue,
        carAltValue: this.state.textValue1,
        burgerAltValue: this.state.textValue2,
        cowAltValue: this.state.textValue3,
        endButtonEnabled: true
      };
      navigate(process.env.PUBLIC_URL +"/AccessibleUserUpdatedGame");
    } else if (
      this.state.textValue === "" ||
      this.state.textValue1 === "" ||
      this.state.textValue2 === "" ||
      this.state.textValue3 === ""
    ) {
      this.setState({ snackBarOpen: true });
    } else {
      window.location.state = {
        catAltValue: this.state.textValue,
        carAltValue: this.state.textValue1,
        burgerAltValue: this.state.textValue2,
        cowAltValue: this.state.textValue3,
        endButtonEnabled: true
      };
      navigate(process.env.PUBLIC_URL +"/AccessibleUserUpdatedGame");
    }
    Prism.highlightAll();
  }

  static renderButton() {
    const buttonEnabled = window.location.state.endButtonEnabled;
    const buttonStyle = { marginLeft: "10px" };
    if (buttonEnabled) {
      return (
        <Button
          href="#"
          onClick={this.handleEnd}
          aria-label={"End Activity"}
          variant={"contained"}
          color={"secondary"}
          style={buttonStyle}
        >
          End Activity
        </Button>
      );
    }
  }

  static doEvent(obj, event) {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  }

  render() {
    const paperStyle = {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "20px"
    };
    return (
      <div>
        <CodeUpdateHeader
          heading={"Make Code Changes"}
          justifyAlignment={"space-between"}
        />
        <Typography
          variant={"subtitle"}
          aria-label={
            "First make changes to the code, if not satisfied try again.\n" +
            "                    Then click the 'End Activity' button which will appear when you have made changes " +
            "at least once."
          }
          color={"inherit"}
          tabIndex={"0"}
        >
          First make changes to the code, if not satisfied try again. Then click
          the 'End Activity' button, which will appear when you have made
          changes at least once.
        </Typography>
        <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"} >
          <Paper style={paperStyle}>
            <pre style={{whiteSpace: "initial"}}>
              <code className="language-html">
                {`
<table tabIndex="0">
	<tbody>
		<tr>
			<td tabIndex="0"><input type="image" src="cat.png" onClick="(); => catClick()" alt="`}
              </code>
              <input
                type={"text"}
                id="first"
                value={this.state.textValue}
                onChange={this.handleChange}
                aria-label={"Please type in alt tag contents for this image"}
                className="smallInput"
              />
              <code className="language-html">{`" tabIndex="0"/></td>
			<td tabIndex="0"><input type="image" src="car.png" onClick="(); => carClick()" alt="`}</code>
              <input
                type={"text"}
                id="second"
                value={this.state.textValue1}
                onChange={this.handleChange1}
                aria-label={"Please type in alt tag contents for this image"}
                className="smallInput"
              />
              <code className="language-html">{`" tabIndex="0"/></td>
		</tr>
		<tr>
			<td tabIndex="0"><input type="image" src="burger.png" onClick="(); => burgerClick()" alt="`}</code>
              <input
                type={"text"}
                id="third"
                value={this.state.textValue2}
                onChange={this.handleChange2}
                aria-label={"Please type in alt tag contents for this image"}
                className="smallInput"
              />
              <code className="language-html">
                {" "}
                {`"tabIndex="0"/></td>
			<td tabIndex="0"><input type="image" src="cow.png" onClick="(); => cowClick()" alt="`}
              </code>
              <input
                type={"text"}
                id="fourth"
                value={this.state.textValue3}
                onChange={this.handleChange3}
                aria-label={"Please type in alt tag contents for this image"}
                className="smallInput"
              />
              <code className="language-html">
                {`" tabIndex="0"/></td>
		</tr>
	</tbody>
</table>`}
              </code>
            </pre>
          </Paper>
          <br />
          <br />
          <Button
            type={"submit"}
            aria-label={"Update Code"}
            variant={"contained"}
            className = "btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton"
          >
            Update Code
          </Button>
          {CodeChange.renderButton()}
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.snackBarOpen}
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
  }
}

export default CodeChange;
