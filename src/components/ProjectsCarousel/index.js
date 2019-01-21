import React, { Component } from 'react';
import Slider from 'react-slick';
import Project from '../Project'
import projectData from './ProjectData'

export default class ProjectsCarousel extends Component {
  // constructor(props) {
  //   super(props);
  // }
  settings = {
      dots: true,
      arrows: true,
      dotsClass: 'slick-dots',
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 10000,
      adaptiveHeight: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      variableHeight: true,
      multipleItems: false,
      focusOnSelect: true,
      focusOnChange: true,
      touchMove: true,
      swipeToSlide: true,
      mobileFirst: true,
      touchThreshold: 10,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: false,
          }
        },
      ]
  };

  render() {
    let projects = projectData.map((project, index) => {
      return  <Project key={index} {...project} />;
    });

    return(
      <Slider id="projects" {...this.settings}>
        {projects}
      </Slider>

    );
  }
}
