import React, { Component } from 'react';
import corv from './blog3.jpg';
import {Link} from 'react-router-dom';


class Blog3 extends Component {
  render() {
    return (
        <div className="blog">
        <h1>
            <Link to="/post3">Chevrolet Corvette Stingray</Link>
        </h1>
        <p >2022-11-28</p>
        <div>
            <img src={corv} alt='Corvette'/>
            <p>City Drifts:</p>
            <p>The classic Corvette with a super paintjob burning rubber in the streets</p>
        </div>
    </div>
    );
  }  
}

export default Blog3;
