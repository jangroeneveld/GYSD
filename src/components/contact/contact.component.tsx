import * as React from "react";
import { Paper, Typography, Table, TableBody, TableRow, TableCell } from "material-ui";

export class ContactComponent extends React.Component<{},{}> {
	paperStyle = {padding: 16, marginBottom: 16}
	contactMethods = [
		{name: "Phone", value: "+31 (0) 6 31 38 24 21"},
		{name: "E-Mail", value: "groeneveld1992@gmail.com"},
		{name: "Website", value: "you're on it"}
	];

	render(){
		return(
			<div className="container">
				<Paper style={this.paperStyle}>
					<Typography type="title" gutterBottom noWrap>
						Contact
					</Typography>
					<Typography gutterBottom>
						If you would like to contact me for any help with your JavaScript, TypeScript, ReactJS or Angular 2+ project,
						use one of the methods listed below.
					</Typography>
				</Paper>
				<Paper style={this.paperStyle}>
					<Table>
						<TableBody>
							{this.contactMethods.map(method => {
								return <TableRow key={method.value}>
								<TableCell>
									<Typography>
										{method.name}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography>
										{method.value}
									</Typography>
								</TableCell>
							</TableRow>
							})}
						</TableBody>
					</Table>
				</Paper>
			</div>
		)
	}
}