import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
          <div>
              <img src="./assets/myprofilepicture"/>
              <h1>Jorge Luiz</h1>
        </div>
        <div>
            <h1>WHO AM I?</h1>
            <p>A luso-brazilian man, at the age of 58, always studying and trying to practice what I learn.I graduated for Theology in 1984, then I got some other certificates including Physiotherapy technician, Scriptwriter, Human resources and Computer repair and maintenance.
            Nowadays I'm studying web development. I've already finished HTML and CSS course. Now I'm studying REACT-JS.
            I love to live within the totality of my being, so I'm always trying to develop my spiritual life, my physical body and my mind.
            I love to teach and practice sports. I'm always envolved with some spiritual activity and one for my projects for 2020 is in this area. </p>
        </div>
         
      </section>
    );
  }
}

export default App;

