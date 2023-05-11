import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.ticketnew.com/tn/offer_banner/Pathan/1920_400.jpg"
          alt="Pathan"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.ticketnew.com/tn/offer_banner/Vaarisu/1920_400.jpg"
          alt="Varisu"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.ticketnew.com/tn/offer_banner/Waltair_veerayya/1920_400.jpg"
          alt="Waltair Veerayya"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.ticketnew.com/tn/offer_banner/Bommai_nayagi/1920_400.jpg"
          alt="Bommai Nayagi"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider