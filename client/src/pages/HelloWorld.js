import React, {Component} from "react";
import carImage from "../assets/images/c2.svg";
import helloWorldImage from "../assets/images/hello_world.png";
import {Link} from "@material-ui/core";
import Button from "@material-ui/core/Button"

class HelloWorld extends Component {
    render() {
        const tableStyle = {border: "1px solid black", marginLeft: "auto", marginRight: "auto", textAlign: "center"};
        return (
            <div>
                <h1>Hello World Example Page For Accessibility</h1>
                <br/>
                <h2>Images</h2>
                <br/>
                <h3>InAccessible Image</h3>
                <img src={carImage} alt={""}/>
                <br/>
                <h3>Accessible Image</h3>
                <img src={carImage} alt={"Car"}/>
                <br/>
                <h3>Example Accessible text</h3>
                <p>Hello world</p>
                <br/>
                <h3>Example InAccessible text</h3>
                <img src={helloWorldImage} alt={""} height={"25%"} width={"25%"}/>
                <br/>
                <h3> Table</h3>
                <br/>
                <table tabIndex={"0"} style={tableStyle}>
                    <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Name</th>
                        <th>Favorite Animal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td tabIndex={"0"}>1</td>
                        <td tabIndex={"0"}>Liz</td>
                        <td tabIndex={"0"}>Horse</td>
                    </tr>
                    <tr>
                        <td tabIndex={"0"}>2</td>
                        <td tabIndex={"0"}>Aurora</td>
                        <td tabIndex={"0"}>Sheep</td>
                    </tr>
                    <tr>
                        <td tabIndex={"0"}>3</td>
                        <td tabIndex={"0"}>Jai</td>
                        <td tabIndex={"0"}>Panda</td>
                    </tr>
                    <tr>
                        <td tabIndex={"0"}>4</td>
                        <td tabIndex={"0"}>Noah</td>
                        <td tabIndex={"0"}>Tiger</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <Button href={"/Lab3/"} component={Link} color={"primary"} variant={"contained"}>Back To Lab 3
                    Homepage</Button>
            </div>
        );
    }
}

export default HelloWorld;