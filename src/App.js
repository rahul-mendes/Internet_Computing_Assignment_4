import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import Footer from './components/footer';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';


import './index.css'


class App extends Component {
  render() {
    return (

      <Router>
      <div>

        <Header />

        <Route exact path='/' component={Main} />
        <Route exact path='/post1' component={Page1} />
        <Route exact path='/post2' component={Page2} />
        <Route exact path='/post3' component={Page3} />


        <Nav />

        

      </div>
      <Footer />
      </Router>

    );
  }  
}

export default App;

