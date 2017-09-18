import * as React from "react";
import * as ReactDOM from "react-dom";
import * as firebase from "firebase";
import { AppContainer } from "react-hot-loader";
import { App } from "./components/App";
import "./style.scss";

const rootEl = document.getElementById("root");
firebase.initializeApp({
    apiKey: "AIzaSyCNKc47ouR48jKJlryby3x36IyFsvDgrw0",
    authDomain: "gysdlist.firebaseapp.com",
    databaseURL: "https://gysdlist.firebaseio.com",
    projectId: "gysdlist",
    storageBucket: "",
    messagingSenderId: "726026243566"
});

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: {hot: any};

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NewApp = require("./components/App").default;

        ReactDOM.render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            rootEl
        );
    });
}
