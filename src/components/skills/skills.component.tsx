import * as React from "react";
import { Paper, Typography, Grid, CardMedia, CardContent, CardActions, Button, Card } from "material-ui";

export class SkillsComponent extends React.Component<{}, {}> {
	paperStyle = { padding: 16, marginBottom: 16 }
	cardMediaStyle = { height: 200 };
	skillCards = [
		{
			title: "JavaScript", 
			description: "Worked with ES5, ES6, ES7 and ready for ES8!", 
			imageURL: "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAr8AAAAJGUxMTdlYzM4LWZmNmEtNGZiNi05Mjc0LTc1ODQ0MWZmYzU4Nw.png"
		},
		{
			title: "TypeScript", 
			description: "I also typed some scripts.", 
			imageURL: "https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/typescript-54e94491fc5706284262529e85755946.svg"
		},
		{
			title: "React", 
			description: "Developed with ReactJS with multiple different additional libraries", 
			imageURL: "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAU-AAAAJGY4ZTUzNzUxLTMxN2UtNGIwNS1iMWZiLTk5MjEwMWQ2Y2I4Ng.png"
		},
		{
			title: "Angular 2+", 
			description: "Developed a dashboard using Angular 2+ and RSJS", 
			imageURL: "https://i.ytimg.com/vi/DBjPIabiRNg/maxresdefault.jpg"
		},
		{
			title: "SCSS", 
			description: "I have used SCSS (not SASS) for preprocessing CSS.", 
			imageURL: "http://www.techprimelab.com/assets/images/scss.png"
		},
		{
			title: "HTML5", 
			description: "Kinda required if you look at the rest of my skills...", 
			imageURL: "https://articulate-heroes.s3.amazonaws.com/uploads/rte/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
		},
	]

	render() {
		return (
			<Grid item>
				<Grid container>
					<Grid item xs={12}>
						<Paper style={this.paperStyle}>
							<Typography type="title" gutterBottom noWrap>
								Skills
							</Typography>
							<Typography type="caption" gutterBottom noWrap>
								To pay the bills
							</Typography>
						</Paper>
					</Grid>
					{this.skillCards.map(skill => {
						return <Grid item xs={12} sm={6} lg={4}>
							<Card>
								<CardMedia
									style={this.cardMediaStyle}
									image={skill.imageURL}
								/>
								<CardContent>
									<Typography type="headline" component="h2">
										{skill.title}
									</Typography>
									<Typography component="p">
										{skill.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					})}
				</Grid>
			</Grid>
		)
	}
}