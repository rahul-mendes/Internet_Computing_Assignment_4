import React, { Component } from 'react';
import corv from '../components/Blogs/blog3.jpg';



class Postpage3 extends Component {
  render() {
    return (
        <div className="blog">
            <h1>Chevrolet Corvette Stingray</h1>
            <p>2022-11-28</p>
            <img src={corv} alt='Corvette' />
            <p>City Drifts</p>
            <p>The C4 Corvette thrust Chevy’s sports car into supercar handling territory, if not ultimate speed, when it debuted for 1984. With 0.9-g cornering, reliable Chevy small-block V-8 performance, and excellent brakes, the C4 quickly proved its mettle in SCCA Showroom Stock GT racing. The Vette utterly dominated the podium in the Playboy and then Escort Endurance Championship from 1985–87, relegating the Porsche 944 Turbo to a cameo role in the series.</p>
            <p>Corvette fans were happy, but the Vette’s dominance threatened race participation by other brands, as well as fan attendance. And so, after the 1987 series, the SCCA booted the Corvettes. Powell says that when Corvette chief engineer Dave McLellan asked him for ideas, he proposed creating a new spec series along the lines of the Player’s Challenge that he’d produced in Canada for the Camaro and Firebird. Chevy leadership and marketing got onboard with his proposal for a Corvette Challenge, anticipating high visibility.</p>
        </div>
    );
  }  
}

export default Postpage3;
