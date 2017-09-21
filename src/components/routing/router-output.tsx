import * as React from "react";
import { Route } from "react-router-dom";
import { HomeComponent } from "../home/home.component";
import { RecordingsComponent } from "../recordings/recordings.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";
import { Grid } from "material-ui";

export class RouterOutput extends React.Component<{}, {}>{
	style = {flexGrow: 1, paddingTop: 100, margin: "auto", maxWidth: "95%"}
	render(){
		return(
			<div style={this.style}>
				<Grid spacing={0} container align="center" justify="center" >
					<Grid item xs={12} md={8} lg={6} xl={4}>
						<Route path="/" exact={true} component={HomeComponent}/>
						<Route path="/recordings" component={RecordingsComponent}/>
						<Route path="/skills" component={SkillsComponent}/>
						<Route path="/contact" component={ContactComponent}/>
					</Grid>
				</Grid>
			</div>
		)
	}
}