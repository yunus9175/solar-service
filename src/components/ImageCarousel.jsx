import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  solar0,
  solar1,
  solar10,
  solar11,
  solar12,
  solar13,
  solar14,
  solar2,
  solar3,
  solar4,
  solar5,
  solar6,
  solar7,
  solar8,
  solar9,
} from "../constants";

const ImageCarousel = () => {
  const images = [
    { src: solar0, alt: "Solar Installation 0" },
    { src: solar1, alt: "Solar Installation 1" },
    { src: solar2, alt: "Solar Installation 2" },
    { src: solar3, alt: "Solar Installation 3" },
    { src: solar4, alt: "Solar Installation 4" },
    { src: solar5, alt: "Solar Installation 5" },
    { src: solar6, alt: "Solar Installation 6" },
    { src: solar7, alt: "Solar Installation 7" },
    { src: solar8, alt: "Solar Installation 8" },
    {
      src: "https://5.imimg.com/data5/FT/QK/MY-8764054/img20171023135250-500x500.jpg",
      alt: "Solar Installation 9",
    },
    { src: solar9, alt: "Solar Installation 9" },
    { src: solar10, alt: "Solar Installation 10" },
    { src: solar11, alt: "Solar Installation 11" },
    { src: solar12, alt: "Solar Installation 12" },
    { src: solar13, alt: "Solar Installation 13" },
    { src: solar14, alt: "Solar Installation 14" },
  ];

  return (
    <div className="h-full">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        className="carousel-container " // Added class for styling
      >
        {images.map((image, index) => (
          <div key={index} className="image-wrapper bg-red-500">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-fit"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
