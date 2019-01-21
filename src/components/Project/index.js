import React, { Component } from 'react';

export default class Project extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // });

  onLoad(e) {
    e.preventDefault();
    e.target.classList.remove('hidden');
    e.target.closest('div').childNodes[0].classList.add('hidden');
  }

  // componentDidMount() {
  //   this.url = this.props.iframe.title === "Techtonica Curriculum" && window.innerWidth < 960 ? "../../images/GitCurriculumSmall.png" : this.props.iframe.url;
  // }

  render() {

    let icons = this.props.icons.map((icon, index) => {
      return  <i key={index} aria-hidden="true" data-icon="&#xe001;" className={icon}></i>;
    })
    let text = this.props.text.map((textItem, index) => {
      return(
        <div key={index}>
          <p>{textItem}</p>
        </div>
      );
    })
    let projectLinks = this.props.links.map((projectLink, index) => {
      return  <a key={index} className="project-link" href={projectLink.url} target="_blank" rel="noopener noreferrer">{projectLink.text}</a>
    })

    return(
      <div className="project-div" id="projects">
        <div className="iframe-div">
          <div className='spinner-div'>
            <img className='spinner' src='https://thumbs.gfycat.com/WelldocumentedRevolvingBass-size_restricted.gif' alt="This page is still loading."/>
          </div>
          <iframe
            className={"project-iframe hidden "+ this.props.iframe.class}
            title={this.props.iframe.title}
            src={this.props.iframe.title.includes("Techtonica") && window.innerWidth > 950 ? this.props.iframe.url2 : this.props.iframe.url}
            onLoad={(e) => this.onLoad(e)}
          />
        </div>
        <h2 className="project-title">{this.props.title}</h2>
        {icons}
        {text}
        <div className="project-link-div">
          {projectLinks}
        </div>
      </div>
    );
  }
}
