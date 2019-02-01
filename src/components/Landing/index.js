import React, { Component } from 'react';
import AlinaPortrait1 from '../../images/alina1.jpg';

export default class Landing extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <div className="wrapper">
        <img className="portrait" src={AlinaPortrait1} alt="Alina Lodahl Portrait"/>
        <div className="bio">
            <h2 className="message">I'm Alina Lodahl, a Software Engineer with a passion for problem-solving and visual aesthetics.</h2>
            <p>  After graduating from
              <a className="link" href="https://www.thinkful.com/press/#press-resources" target="_blank" rel="noopener noreferrer"> Thinkful</a>
              's Full-Stack Web Development Program,
              I've gained field experience in San Francisco as a Software Engineering Intern at
              <a className="link" href="https://www.gliffy.com/"target="_blank" rel="noopener noreferrer"> Gliffy </a>
              and
              <a className="link" href="https://diwala.io/" target="_blank" rel="noopener noreferrer"> Diwala</a>
              , a Software Engineer/Mentor at
              <a className="link" href="https://www.colark.com/" target="_blank" rel="noopener noreferrer"> Colark</a>
              , and a City Director with
              <a className="link" href="https://womenwhocode.com/sf/about"target="_blank" rel="noopener noreferrer"> Women Who Code</a>
              .
              <br/>
              <br/>
              With a background in teaching and a Bachelor's in
              <a className="link" href="https://www.instagram.com/nimblestudio/" target="_blank" rel="noopener noreferrer"> Fine Art</a>
              , I've been able to apply much of my experience to Web Development.
              Training in visual design,
              <a className="link" href="https://github.com/Techtonica/curriculum/graphs/contributors" target="_blank" rel="noopener noreferrer"> Technical Writing</a>
              , project planning, and a productive experiment/critique cycle
              have been valuable tools for creating and debugging web apps.
            </p>
            <div className="button-div">
              <a href="#projects" className="button-link">view projects</a>
              <a href="mailto:alina@womenwhocode.com" className="button-link button-link-email">email me</a>
            </div>
        </div>
      </div>
    );
  }
}
