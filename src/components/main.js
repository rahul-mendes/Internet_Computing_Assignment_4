import React, { Component } from 'react';
import Blog1 from './Blogs/blog1';
import Blog2 from './Blogs/blog2';
import Blog3 from './Blogs/blog3';



class Main extends Component {
  render() {
    return (
      <div className="main">

        <Blog1 />
        <Blog2 />
        <Blog3 />

      </div>
    );
  }  
}

export default Main;
