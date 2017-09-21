import * as React from "react";
import { Toolbar, AppBar, IconButton, Drawer } from "material-ui";
import { Avatar, Button, Typography, Paper, Divider, List, ListItem } from "material-ui";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import * as firebase from "firebase";
import { RouterOutput } from "./routing/router-output";
import { LinksComponent } from "./routing/links.component";

export class App extends React.Component<{}, {}>{
	state = { drawerOpen: false, popoverOpen: false, user: undefined };
	paperStyle = { height: "auto", width: 300 };
	provider = new firebase.auth.GoogleAuthProvider();

	componentDidMount() {
		var userKey = Object.keys(window.localStorage)
			.filter(it => it.substr(0, 17) === 'firebase:authUser')[0];
		var user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
		if (user) this.setState({ user: user });
	}

	render() {
		return (
			<div className="application">
				<AppBar>
					<Toolbar>
						<IconButton color="contrast" aria-label="Menu" onClick={this.toggleDrawer}>
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit" noWrap style={{ flex: 1 }}>
							My first website
						</Typography>
						{this.state.user &&
							<Avatar src={this.state.user.photoURL} alt={this.state.user.displayName}></Avatar>
						}
						{!this.state.user &&
							<Button color="contrast" style={{ top: 16, right: 20, position: 'fixed' }} onClick={this.signIn}>Login</Button>
						}
					</Toolbar>
				</AppBar>
				<Drawer type="persistent" open={this.state.drawerOpen} onRequestClose={this.toggleDrawer}>
					<Paper style={this.paperStyle} >
						<List>
							<ListItem style={{ cursor: "pointer" }} onClick={this.toggleDrawer}>
								<IconButton color="accent">
									<ChevronLeftIcon />
								</IconButton>
							</ListItem>
						</List>
					</Paper>
					<LinksComponent onClick={this.toggleDrawer}/>
				</Drawer>
				<RouterOutput />
			</div>
		)
	}

	signIn = () => {
		firebase.auth().signInWithPopup(this.provider).then(result => {
			var token = result.credential.accessToken;
			var user = result.user;
			this.setState({ user: user });
		}).catch(function (error) {
			console.error(error)
		});
	}

	toggleDrawer = () => {
		this.setState({ drawerOpen: !this.state.drawerOpen });
	}

	togglePopover = () => {
		this.setState({ popoverOpen: !this.state.popoverOpen });
	}
}