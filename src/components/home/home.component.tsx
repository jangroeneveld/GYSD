import * as React from "react";
import { Typography, Paper } from "material-ui";

export class HomeComponent extends React.Component<{}, {}>{
	paperstyle = {padding: 24}
	render(){
		return(
			<div className="container">
				<Typography type="display3"gutterBottom noWrap>Jan Groeneveld</Typography>
				<Paper style={this.paperstyle}>
					<Typography gutterBottom>
						Hallo ik ben Jan Groeneveld, en ik ben een front-end developer, dit moet een lange zin 
						zijn met veel informatie over mezelf, zodat ik kan kijken of de zin ook gewrapt wordt, 
						en hoe de paper er dan nog uitziet.
					</Typography>
					hoi
				</Paper>
			</div>
		)
	}
}