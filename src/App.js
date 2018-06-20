import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

class App extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
        <div><img src={require('./images/img1.jpg')} alt="freepik"/></div>
        <div><img src={require('./images/img2.jpg')} alt="freepik"/></div>
        <div><img src={require('./images/img3.jpg')} alt="freepik"/></div>
        <div><img src={require('./images/img4.jpg')} alt="freepik"/></div>
        </Slider>
      </div>
    );
  }
}

export default App;