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
import Nav from "./components/Nav";

function App() {
    return (
        //TODO fix this on production instance to match https://stevannn.github.io/portfolio/ instead /portfolio
        <Router basename={`https://stevannn.github.io/portfolio/}`}>
            <Nav/>
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/work" component={Work} />
                    <Route path="/contact" component={Contact} />
                    <Route component={PageNotFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
