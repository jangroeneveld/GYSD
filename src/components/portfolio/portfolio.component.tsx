import * as React from "react";
import { Paper, Typography, Grid, CardMedia, CardContent, CardActions, Button, Card } from "material-ui";
import { Launch } from "material-ui-icons";

export class PortfolioComponent extends React.Component<{}, {}> {
	paperStyle = { padding: 16, marginBottom: 16 }
	cardMediaStyle = { height: 200 };
	portfolioCards = [
		{
			title: "Windplanner", 
			description: "I currently work at the Imagineers, where I work on Windplanner with many great colleagues", 
			imageURL: "https://cleantechnica.com/files/2012/07/wind-turbines.jpg",
			url: "https://www.windplanner.com"
		}
	]

	render() {
		return (
			<Grid container>
				<Grid item xs={12}>
					<Paper style={this.paperStyle}>
						<Typography type="title" gutterBottom noWrap>
							Portfolio
						</Typography>
						<Typography type="caption" gutterBottom noWrap>
							What work I've done, and am currently doing
						</Typography>
					</Paper>
				</Grid>
				{this.portfolioCards.map(item => {
					return <Grid item xs={12} sm={6} xl={4} key={item.title}>
						<Card>
							<CardMedia
								style={this.cardMediaStyle}
								image={item.imageURL}
							/>
							<CardActions style={{height: 0, justifyContent: "flex-end", padding: 0}}>
								<Button fab color="primary" aria-label="open" onClick={() => {window.open(item.url)}}>
									<Launch />
								</Button>
							</CardActions>
							<CardContent>
								<Typography type="headline" component="h2">
									{item.title}
								</Typography>
								<Typography component="p">
									{item.description}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				})}
			</Grid>
		)
	}
}