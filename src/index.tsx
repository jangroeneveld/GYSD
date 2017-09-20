import * as React from "react";
import * as ReactDOM from "react-dom";
import * as firebase from "firebase";
import { AppContainer } from "react-hot-loader";
import { App } from "./components/App";
import "./style/style.scss";
import { HashRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui";
import { amber, blue } from "material-ui/colors";

firebase.initializeApp({
    apiKey: "AIzaSyCNKc47ouR48jKJlryby3x36IyFsvDgrw0",
    authDomain: "gysdlist.firebaseapp.com",
    databaseURL: "https://gysdlist.firebaseio.com",
    projectId: "gysdlist",
    storageBucket: "",
    messagingSenderId: "726026243566"
});
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const theme = createMuiTheme({palette:{
    type: "light",
    primary: blue,
    secondary: amber
}});

const rootEl = document.getElementById("root");

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <AppContainer>
            <HashRouter>
                <App />
            </HashRouter>
        </AppContainer>
    </MuiThemeProvider>
    ,
    rootEl
);

declare let module: { hot: any };

if (module.hot) {
    module.hot.accept();
}