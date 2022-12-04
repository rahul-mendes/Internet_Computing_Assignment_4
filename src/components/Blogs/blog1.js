import React, { Component } from 'react';
import Ferr from './blog1.jpg';
import {Link} from 'react-router-dom';



class Blog1 extends Component {
  render() {
    return (
    <div className = "blog">
        <h1>
            <Link to="/post1">Ferrari LaFerrari</Link>
        </h1>
        <p>2022-11-26</p>
        <div>
            <img src={Ferr} alt='Ferrari' />
            <p>Leisure Drifting:</p>
            <p>A red Ferrari speedily drifting through the roads of Edinburgh</p>
        </div>
    </div>
    );
  }  
}

export default Blog1;
