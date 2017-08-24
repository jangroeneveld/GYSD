import * as React from "react";

import "./App.scss";

export default class App extends React.Component<{}, {}> {
    render() {
        return <div className="app">
            <h1>Hello World!</h1>
            <p>Foo to the barz</p>
            <ul>
                <li className="item"></li>
                <li className="item"></li>
                <li className="item"></li>
                <li className="item"></li>
                <li className="item"></li>
            </ul>
        </div>;
    }
}
