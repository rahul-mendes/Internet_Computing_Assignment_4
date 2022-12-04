import React, { Component } from 'react';
import lambo from './blog2.jpg';
import {Link} from 'react-router-dom';


class Blog2 extends Component {
  render() {
    return (
        <div className="blog">
        <h1>
            <Link to="/post2">Lamborghini Aventador</Link>
        </h1>
        <p>2022-11-27</p>
        <div>
            <img src={lambo} alt='Lamborghini'/>
            <p>Speeding Along:</p>
            <p>A yellow Lamborghini Aventador with a custom bodykit driving through a British countryside.</p>
        </div>
    </div>
    );
  }  
}

export default Blog2;
