import React, { Component } from 'react';
import Landing from '../Landing'
import ProjectsCarousel from '../ProjectsCarousel'

class MainPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
          <Landing/>
              <ProjectsCarousel />
              <div className="button-div">
                <a href="/contact" className="button-link button-link-email">contact alina</a>
                <a href="https://www.linkedin.com/in/alina-lodahl/"  target="_blank" rel="noopener noreferrer" className="button-link">connect on linkedin</a>
              </div>
      </div>
    );
  }
}

export default MainPage;
