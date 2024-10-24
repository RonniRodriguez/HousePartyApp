import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";



export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
        <div className="center">
            <HomePage />
        </div>
        );
        
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const appDiv = document.getElementById('app');

    if (appDiv) {
        const root = createRoot(appDiv);
        root.render(<App />);
    } else {
        console.error("App container element not found!");
    }
});