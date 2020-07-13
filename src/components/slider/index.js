import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className="arrows next" onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className="arrows prev" onClick={onClick} />;
}
class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>{this.props.children}</Slider>
      </div>
    );
  }
}

export default Carousel;
