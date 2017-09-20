import * as React from "react";
import { Route } from "react-router-dom";
import { HomeComponent } from "./home/home.component";
import { RecordingsComponent } from "./recordings/recordings.component";
import { Grid } from "material-ui";

export class RouterOutput extends React.Component<{}, {}>{
	style = {flexGrow: 1, paddingTop: 100, margin: "auto", maxWidth: "100%"}
	render(){
		return(
			<Grid container align="center" justify="center" style={this.style}>
				<Grid item xs={12} md={8}>
					<Route path="/" exact={true} component={HomeComponent}/>
					<Route path="/recordings" component={RecordingsComponent}/>
				</Grid>
			</Grid>
		)
	}
}