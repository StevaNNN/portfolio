import React from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './scss/main.scss';
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

import PackageJson from '../package.json';

function App() {
    return (
        <Router basename={`/${PackageJson.name}`}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default App;
