import React, { Component } from 'react';
import Prism from 'prismjs';
import "../../assets/stylesheets/prism.css";

class Repair extends Component {

	componentDidMount() {
		Prism.highlightAll();
	}
	render() {
		return(
			<div>
				<pre>

{/*<input type={"text"} name={""}/>*/}
  					<code className="language-javascript">
					  {`
					 	<table style={tableStyle} tabIndex={"0"}>
					  		<tbody>
								<tr>
									<td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage} onClick={() => catClick()} alt={"image of cat"} tabIndex={"0"}/></td>
									<td tabIndex={"0"}><input style={imgStyle} type={"image"} src={carImage} onClick={() => carClick()} alt={"image of car"} tabIndex={"0"}/></td>
								</tr>
								<tr>
									<td tabIndex={"0"}><input style={imgStyle} type={"image"} src={burgerImage} onClick={() => burgerClick()} alt={"image of burger"} tabIndex={"0"}/></td>
									<td tabIndex={"0"}><input style={imgStyle} type={"image"} src={catImage} onClick={() => catClick()} alt={"image of cat"} tabIndex={"0"}/></td>
								</tr>
							</tbody>
						</table>
					  `}
  					</code>
				</pre>
			</div>
		);
	};

}

export default Repair;
