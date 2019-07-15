import React, { Component } from 'react';
import catImage from "../assets/images/c1.svg";
import carImage from "../assets/images/c2.svg";
import burgerImage from "../assets/images/b.png";
import CatClickNavigate from '../components/helpers/CatClickNavigate.js'
class BlindGame extends Component {
	constructor(props){
		super(props);
		this.state = {render:''};
		document.body.style = 'background: black';
	}

	_renderSubComp(path){
		if (this.state.render === 'CatClickNavigate') {
			return <CatClickNavigate path={path}/>
		}
	}
	render() {
		const {
			path
		} = this.props;
		const catClick = () => {
			console.log('Cat image clicked!');
			this.setState({render:'CatClickNavigate'});
		};
		const burgerClick = () => {
			console.log('Burger image clicked!');
		};
		const carClick = () => {
			console.log('Car image clicked!');
		};

		const imgStyle = {width:"128px",height:"128px",border:"1px solid black",opacity:"0.0"};
		const tableStyle = {border: "1px solid black"};
		const pTagStyle ={color: 'white'};
		return (
			<div>
				<p style={pTagStyle}>Click on the image of a cat.</p>
				<table style={tableStyle}>
					<tbody>
					<tr>
						<td><input style={imgStyle} type={"image"} src={catImage} onClick={() => catClick()}/></td>
						<td><input style={imgStyle} type={"image"} src={carImage} onClick={() => carClick()}/></td>
					</tr>
					<tr>
						<td><input style={imgStyle} type={"image"} src={burgerImage} onClick={() => burgerClick()}/></td>
						<td><input style={imgStyle} type={"image"} src={catImage} onClick={() => catClick()}/></td>
					</tr>
					</tbody>
				</table>
				{this._renderSubComp("/Lab3/AccessibleInstructions")}
			</div>

		);
	}
}

export default BlindGame;
