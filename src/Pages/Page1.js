import React, { Component } from 'react';
import Ferr from '../components/Blogs/blog1.jpg';



class Postpage1 extends Component {
  render() {
    return (
      <div className="blog">

      <h1>Ferrari LaFerrari</h1>
          <p>2022-11-26</p>
          <img src={Ferr } alt='Ferrari'/>
              <p className="text post">Leisure Drifting.</p>
          <p>The Ferrari LaFerrari - or just LaFerrari if you will - is the apogee of Ferrari’s current roadcar programme: a carbon, two-seat hypercar that melds a 6.3-litre Ferrari V12 with a KERS-esque battery pack and electric motor to give 950bhp and 663lb ft of torque. As you might expect, it looks like a spaceship, and drives like the best Ferrari ever made. Which in terms of useable horsepower, it is. Only 499 have been built, available only to serious Ferrari collectors, and they’re all sold out. A car so fantastic the company decided to make it definitive (it is literally called The Ferrari), neatly annexing the Italian company in a weird little semantic cul-de-sac when it comes to naming its next car…</p>
          <p>Above sports cars, there are exotic sports cars—and then there’s the LaFerrari. Its 789-hp V-12 gets a 161-hp boost from an electric motor—that’s right, it’s a hybrid—enabling it to accelerate like a Bugatti Veyron while achieving somewhat respectable fuel economy. Far prettier than its predecessor, the Enzo, the LaFerrari is styled like a ground-bound fighter jet. Its interior is custom-fit for its owner—as it should be, given its monumental price tag.</p>
  </div>
    );
  }  
}

export default Postpage1;
