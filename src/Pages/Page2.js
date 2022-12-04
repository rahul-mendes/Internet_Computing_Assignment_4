import React, { Component } from 'react';
import lambo from '../components/Blogs/blog2.jpg';



class Postpage2 extends Component {
  render() {
    return (
        <div className="blog">
            <h1>Lamborghini Aventador</h1>
            <p>2022-11-27</p>
            <img src={lambo} alt='Lamborghini' />
            <p>Speeding Along</p>
            <p>One-hundred and eighty-seven thousand dollars. Most of us would never even dream of spending that much (around £135,000) on a car, let alone on a fresh bodykit for a car we already own.</p>
            <p>Still, for those very very rich folk that have become tired of how their Aventador looks (how?), Japanese tuner Liberty Walk has the answer. This – the Silhouette Works GT-EVO – will be its last ever kit for the big Lamborghini, and just 20 examples will ever see the light of day.</p>
            <p>Pretty intense, isn’t it? There’s none of the trademark Liberty Walk riveted bodywork because this is its GT-racecar-like line, but just get a look at the size of that rear wing and its accompanying diffuser. The arches aren’t small, either. </p>
    </div>
    );
  }  
}

export default Postpage2;
