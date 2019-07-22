import React, {Component} from 'react';
import Prism from 'prismjs';
import "../../assets/stylesheets/prism.css";

class Repair extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
				<pre>
                    <code className="language-html">
					  {`
					 	<table tabIndex="0">
					  		<tbody>
								<tr>
									<td tabIndex="0"><input type="image" src="cat.png" onClick="(); => catClick()" alt="image of cat" tabIndex="0"/></td>
									<td tabIndex="0"><input type="image" src="car.png" onClick="(); => carClick()" alt="image of car" tabIndex="0"/></td>
								</tr>
								<tr>
									<td tabIndex="0"><input type="image" src="burger.png" onClick="(); => burgerClick()" alt="image of burger" tabIndex="0"/></td>
									<td tabIndex="0"><input type="image" src="cat.png" onClick="(); => catClick()" alt="image of cat" tabIndex="0"/></td>
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
