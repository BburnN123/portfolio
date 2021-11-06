import React from "react";
import "./App.css";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import DesignPage from "./pages/DesignPage";
import ContactPage from "./pages/ContactPage";
import LearnPage from "./pages/LearnPage";
import "./index.css";

import ReactGA from "react-ga";
import RouteChangeTracker from "./RouteChangeTracker";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: {
                title: "Home"
            },
            about: {
                title: "About"
            },
            contact: {
                title: "Contact"
            },
            project: {
                title: "Project"
            }
        };
    }

    render() {

        // eslint-disable-next-line no-undef
        ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
        ReactGA.pageview(window.location.pathname);

        return (
            <Router>
                <RouteChangeTracker />
                <Nav />
                <Switch>
                    <Route path="/portfolio" exact component={HomePage} />
                    <Route path="/design" component={DesignPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/learning" component={LearnPage} />
                    <Route path="/project/:page?" render={(props) => <ProjectPage title={this.state.project.title} {...props} />} />
                </Switch>
                {/* <Footer/> */}
            </Router>
        );
    }
} export default App;