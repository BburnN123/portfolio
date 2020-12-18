import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';

import Footer from './components/Footer';
import Nav from './components/Nav';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import LabPage from './pages/LabPage';
import ContactPage from './pages/ContactPage';


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
        <Container fluid className="p-8">
        
            <Nav/>


          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/project/:page?" render={(props)=> <ProjectPage title={this.state.project.title} {...props}/>}/>
          </Switch>
          {/* <Footer/> */}
        </Container>
      </Router>
    );
  }
 
}

export default App;
