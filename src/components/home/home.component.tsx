import * as React from "react";
import { Typography, Paper, Grid, Divider } from "material-ui";

export class HomeComponent extends React.Component<{}, {}>{
	paperstyle = {padding: 24, marginBottom: 24}
	render(){
		return(
			<div className="container">
				<Typography type="display2"gutterBottom noWrap>Jan Groeneveld</Typography>
				<Paper style={this.paperstyle}>
					<Typography gutterBottom>
						Hallo ik ben Jan Groeneveld, en ik ben een front-end developer, dit moet een lange zin 
						zijn met veel informatie over mezelf, zodat ik kan kijken of de zin ook gewrapt wordt, 
						en hoe de paper er dan nog uitziet.
					</Typography>
				</Paper>
				<Paper style={this.paperstyle}>
					<Typography type="title" gutterBottom>
						Nog een paper
					</Typography>
					<Typography type="caption" gutterBottom>
						maar nu met een title en een caption
					</Typography>
					<Divider light/>
					<Typography gutterBottom>
						Hallo ik ben Jan Groeneveld, en ik ben een front-end developer, dit moet een lange zin 
						zijn met veel informatie over mezelf, zodat ik kan kijken of de zin ook gewrapt wordt, 
						en hoe de paper er dan nog uitziet.
					</Typography>
				</Paper>
			</div>
		)
	}
}