import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Switch, useParams, useLocation} from 'react-router-dom';

import Footer from './components/Footer';
import Nav from './components/Nav';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';


class App extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state ={
      home:{
        title: "Home"
      },
      about:{
        title: "About"
      },
      contact:{
        title: "Contact"
      },
      project:{
        title: "Project"
      }
    }
  }

  render(){

    return (

      <Router>

          <Nav/>
          <Switch>
            <Route path="/portfolio" exact component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/project/:page?" render={(props)=> <ProjectPage title={this.state.project.title} {...props}/>}/>
          </Switch>
          {/* <Footer/> */}

      </Router>
      
    );
  }
 
}

export default App;
