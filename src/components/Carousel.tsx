import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CarouselComponent({
  pictures,
}: {
  pictures: string[];
}) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider
      className="w-full md:w-3/4 flex-1 mx-auto ms-8 self-center"
      {...sliderSettings}
    >
      {pictures.map((picture, index) => (
        <div key={index} className="p-1 px-2">
          <img
            src={picture}
            alt={`Portfolio Image ${index}`}
            className="w-full rounded-2xl h-96 object-cover "
          />
        </div>
      ))}
    </Slider>
  );
}
