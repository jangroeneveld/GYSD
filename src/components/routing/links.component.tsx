import * as React from "react";
import { List, ListItem, Typography } from "material-ui";
import { Link } from "react-router-dom";
import Divider from "material-ui/Divider/Divider";

export class LinksComponent extends React.Component<{onClick: () => void},{}> {

	render() {
		return(
			<List>
				<Link to="/" onClick={this.props.onClick} style={{ textDecoration: "none" }}>
					<ListItem>
						<Typography type="button" color="accent">Home</Typography>
					</ListItem>
				</Link>
				<Divider />
				<Link to="/recordings" onClick={this.props.onClick} style={{ textDecoration: "none" }}>
					<ListItem>
						<Typography type="button" color="accent">Recordings</Typography>
					</ListItem>
				</Link>
				<Divider />
				<Link to="/skills" onClick={this.props.onClick} style={{ textDecoration: "none" }}>
					<ListItem>
						<Typography type="button" color="accent">Skills</Typography>
					</ListItem>
				</Link>
				<Divider />
				<Link to="/contact" onClick={this.props.onClick} style={{ textDecoration: "none" }}>
					<ListItem>
						<Typography type="button" color="accent">Contact</Typography>
					</ListItem>
				</Link>
			</List>
		)
	}
}