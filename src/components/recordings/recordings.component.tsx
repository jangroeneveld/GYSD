import * as React from "react";
import * as firebase from "firebase";
import { Paper, Typography, Grid, Button, Menu, MenuItem, TextField, LinearProgress, Divider, IconButton } from "material-ui";
import { Cancel } from "material-ui-icons"
import * as uuid from "uuid";

export class RecordingsComponent extends React.Component<{}, {}>{
	database = firebase.database().ref("/recordings");
	state = { recordings: null, anchorEl: null, dayPickerOpen: false};
	days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
	paperStyle = { padding: 16, marginBottom: 40 };
	newRecording = {day: undefined, name: undefined, channel: undefined, time: undefined, entry: undefined};

	constructor() {
		super();
		this.database.on("value", result => {
			var recordings = {};
			if(!result.val()) return this.setState({ recordings: recordings });
			this.days.forEach(day => {
				var shows = [];
				if (result.val()[day]) Object.keys(result.val()[day]).forEach(s => shows.push(Object.assign(result.val()[day][s], {key: s})));
				recordings[day] = shows;
			});
			this.setState({ recordings: recordings })
		});
	}

	componentWillUnmount(){
		this.database.off();
	}

	render() {
		return (
			<div className="component">
				<Typography type="title" color="secondary" noWrap gutterBottom>
					Recordings
				</Typography>
				{!this.state.recordings &&
					<Paper style={this.paperStyle}>
						<Typography type="subheading" color="inherit" noWrap>
							Fetching recordings
						</Typography>
						<LinearProgress mode="query"/>
					</Paper>
				}
				{this.state.recordings &&
					<div>
						{this.getRecordings()}
					</div>
				}

				<Typography type="title" color="secondary" noWrap gutterBottom>
					Add Recording
				</Typography>
				<Paper style={this.paperStyle}>
					<Grid container align="center" justify="center">
						<Grid item xs={6} sm={3}>
							<Button aria-owns={this.state.dayPickerOpen ? 'simple-menu' : null} aria-haspopup="true" onClick={this.openDayPicker}>
								{this.newRecording.day || "Select a day"}
							</Button>
							<Menu id="simple-menu" anchorEl={this.state.anchorEl} open={this.state.dayPickerOpen} onRequestClose={() => {this.closeDayPicker(this.newRecording.day)}}>
								{this.days.map(d => {
									return <MenuItem onClick={() => {this.closeDayPicker(d)}} key={d}>{d}</MenuItem>
								})}
							</Menu>
						</Grid>
						<Grid item xs={6} sm={3}>
							<TextField
								label="Name"
								onChange={this.handleNameChange}
								placeholder="Name"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={6} sm={3}>
							<TextField
								label="Channel"
								onChange={this.handleChannelChange}
								placeholder="Channel"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={6} sm={3}>
							<TextField
								label="Time"
								onChange={this.handleTimeChange}
								placeholder="Time"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={12}>
							<Button onClick={this.addRecording}>add</Button>
						</Grid>
					</Grid>
				</Paper>
			</div>
		)
	}

	private getRecordings = () => {
		return this.days.map(d => {
			return <Paper style={this.paperStyle} key={d}>
				<Typography type="button" color="inherit" gutterBottom>{d}</Typography>
				{this.getRecordingsForDay(d)}
			</Paper>
		});
	}

	private getRecordingsForDay = (day: string) => {
		return !this.state.recordings[day].length ? <Typography type="caption">Nothing to record</Typography> : this.state.recordings[day].map(show => { 
			return <div key={uuid()}>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={6}>
						<Typography noWrap style={{lineHeight: "36px"}}>{show.Name}</Typography>
					</Grid>
					<Grid item xs={5} sm={3}>
						<Typography noWrap style={{lineHeight: "36px"}}>{show.Channel}</Typography>
					</Grid>
					<Grid item xs={5} sm={2}>
						<Typography noWrap style={{lineHeight: "36px"}}>{show.Time}</Typography>
					</Grid>
					<Grid item xs={2} sm={1}>
						<IconButton onClick={() => {this.removeRecording(show.key, day)}}>
							<Cancel />
						</IconButton>
					</Grid>
				</Grid>
				<Divider light />
			</div>
		});
	}

	openDayPicker = (event) => {
		this.setState({ dayPickerOpen: true, anchorEl: event.currentTarget });
	}

	closeDayPicker = (d) => {
		this.newRecording.day = d;
		this.setState({dayPickerOpen: false});
	}

	handleNameChange = (event) => {
		this.newRecording.name = event.target.value;
	}

	handleChannelChange = (event) => {
		this.newRecording.channel = event.target.value;
	}

	handleTimeChange = (event) => {
		this.newRecording.time = event.target.value;
	}

	addRecording = () => {
		if(!this.newRecording.day || !this.newRecording.name || !this.newRecording.channel || !this.newRecording.time) return;
		firebase.database().ref("recordings/" + this.newRecording.day + "/" + uuid()).set({
			Name: this.newRecording.name,
			Channel: this.newRecording.channel,
			Time : this.newRecording.time
		});
	}

	removeRecording = (key: string, day: string) => {
		firebase.database().ref("recordings/" + day + "/" + key).set(null);
	}
}