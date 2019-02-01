import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavLinks: true,
      width: "0",
    };
    this.updateWidth = this.updateWidth.bind(this);
  }
  componentWillMount() {
    this.updateWidth();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }
  updateWidth() {
    this.setState({width: window.innerWidth});
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({showNavLinks: !this.state.showNavLinks});
  }
  // <a href={document.URL.includes("contact")? "/" : "/contact" }title="contact alina">
  // </a>

  render() {
    return(
      <div className="navbar" role="navigation">
        <div className="name"><p>alina lodahl</p></div>
        <div className="navlinks-div">
          <button className="dropdown-icon" id="dropdown-icon" onClick={(e) => this.handleClick(e)}>&#9776;</button>
          { this.state.width > 529 || this.state.showNavLinks
          ?
            <div className="navlinks-only js-navlinks-only">
              <a className="navlink" href="#projects">projects</a>
              <a className="navlink" href="https://www.instagram.com/nimblestudio/" target="_blank" rel="noopener noreferrer">art</a>
              <a className="navlink" href="https://github.com/alodahl" target="_blank" rel="noopener noreferrer">github</a>
              <a className="navlink" href="https://www.linkedin.com/in/alina-lodahl/" target="_blank" rel="noopener noreferrer">linkedin</a>
            </div>
          : null
          }
        </div>
      </div>
    );
  }
}
