import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={800}
        totalSlides={7}
      >
        <Slider>
          <Slide index={0}> <img src="../../original/img/mural.png"></img> </Slide>
          <Slide index={0}> <img src="../../original/img/nbc-4.png"></img> </Slide>
          <Slide index={1}> <img src="../../original/img/nbc-3.png"></img> </Slide>
          <Slide index={2}> <img src="../../original/img/nbc-2.png"></img> </Slide>
          <Slide index={0}> <img src="../../original/img/modderfontein-trips.png"></img> </Slide>
          <Slide index={0}> <img src="../../original/img/nbc-1.png"></img> </Slide>
          <Slide index={0}> <img src="../../original/img/nbc-5.png"></img> </Slide>

        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}