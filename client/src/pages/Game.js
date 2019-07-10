import React, { Component } from 'react';
import catImage from "../assets/images/c1.svg";
import carImage from "../assets/images/c2.svg";
import burgerImage from "../assets/images/b.png";
class Game extends Component {
	render() {
		const imgStyle = {width:"128px",height:"128px",border:"1px solid black"};
		const tableStyle = {border: "1px solid black"};
		return (
			<div>
				<p>Click on the image of a cat.</p>
				<table style={tableStyle}>
					<tr>
						<td><input style={imgStyle} type={"image"} src={catImage}/></td>
						<td><input style={imgStyle} type={"image"} src={carImage}/></td>
					</tr>
					<tr>
						<td><input style={imgStyle} type={"image"} src={burgerImage}/></td>
						<td><input style={imgStyle} type={"image"} src={catImage}/></td>
					</tr>
				</table>
			</div>
		);
	}
}

export default Game;
