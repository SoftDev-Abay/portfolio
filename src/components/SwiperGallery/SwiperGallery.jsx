import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "./styles.css";

import { FreeMode, Thumbs, Navigation } from "swiper/modules";

const defaultImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
  },
];

// import required modules

export default function SwiperGallery({ images = defaultImages }) {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [open, setOpen] = React.useState(false);

  let imagesCopy = images;

  if (images.length < 1) {
    imagesCopy = defaultImages;
  }

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs, Navigation]}
        className="mySwiper2"
        navigation
      >
        {imagesCopy.map(({ src: imgSrc }, index) => (
          <SwiperSlide
            className="cursor-pointer"
            key={index}
            onClick={() => setOpen(true)}
          >
            <img
              src={imgSrc}
              alt={`Slide ${index + 1}`}
              // className="h-[232px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        // should not be in the loop
        carousel={{
          finite: true,
        }}
        close={() => setOpen(false)}
        slides={imagesCopy}
      />
    </>
  );
}
