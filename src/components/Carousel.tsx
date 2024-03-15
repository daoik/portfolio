import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CarouselComponent({
  pictures,
}: {
  pictures: string[];
}) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider
      className="w-full md:w-3/4 flex-1 mx-auto md:ms-20 self-center"
      {...sliderSettings}
    >
      {pictures.map((picture, index) => (
        <div key={index}>
          <img
            src={picture}
            alt={`Portfolio Image ${index}`}
            className="w-full rounded-2xl h-96 object-cover px-2 mx-2"
          />
        </div>
      ))}
    </Slider>
  );
}
