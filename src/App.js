import React from "react";
import "./App.css";
import {
    BrowserRouter as Router, Route, Switch, useParams, useLocation
} from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import DesignPage from "./pages/DesignPage";
import ContactPage from "./pages/ContactPage";
import LearnPage from "./pages/LearnPage";
import "./index.css";


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
        const PUBLIC_URL = process.env.PUBLIC_URL;
        console.log(PUBLIC_URL);
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route path="/portfolio" exact component={HomePage} />
                    <Route path="#/learning" component={LearnPage} />
                    <Route path="#/design" component={DesignPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/project/:page?" render={(props) => <ProjectPage title={this.state.project.title} {...props} />} />
                </Switch>
                {/* <Footer/> */}
            </Router>
        );
    }
} export default App;