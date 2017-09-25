import * as React from "react";
import { List, ListItem, Typography } from "material-ui";
import { Link } from "react-router-dom";
import Divider from "material-ui/Divider/Divider";

export class LinksComponent extends React.Component<{onClick: () => void},{}> {
	links = ["portfolio", "skills", "recordings", "contact"]

	render() {
		return(
			<List>
				<Link to="/" onClick={this.props.onClick} style={{ textDecoration: "none" }}>
					<ListItem>
						<Typography type="button" color="accent">Home</Typography>
					</ListItem>
				</Link>
				{this.links.map(link => {
					return <Link to={"/"+link} onClick={this.props.onClick} key={link} style={{ textDecoration: "none" }}>
					<Divider/>
					<ListItem>
						<Typography type="button" color="accent">{link}</Typography>
					</ListItem>
				</Link>
				})}
			</List>
		)
	}
}