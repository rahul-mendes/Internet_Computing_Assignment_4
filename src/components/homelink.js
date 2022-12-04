import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Homelink extends Component {
  render() {
    return (

       <div className="homepage">
            <Link to="/">Go to Homepage</Link>
        </div>

    );
  }  
}

export default Homelink;
