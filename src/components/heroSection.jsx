import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Img1 from "../assets/img/lv.jpg";
import Img2 from "../assets/img/mv.png";
import Img3 from "../assets/img/solar1.jpeg";
import Img4 from "../assets/img/Hvac.jpg";

const slides = [
  {
  image: Img1,
  title: "LV & MV SWITCHGEAR",
  subtitle:
    "Delivering advanced low and medium voltage switchgear solutions with superior safety, reliability, and performance for industrial and commercial applications.",
},
  {
    image: Img2,
    title: "MECHANICAL & ELECTRICAL",
    subtitle:
      "Delivering reliable mechanical and electrical solutions with quality, precision, and excellence for every project.",
  },
  {
  image: Img3,
  title: "SOLAR PANELS",
  subtitle:
    "Providing high-performance solar energy solutions with professional installation, maximum efficiency, and long-term reliability.",
},
  {
  image: Img4,
  title: "HVAC SYSTEMS",
  subtitle:
    "Providing complete HVAC installation, maintenance, ventilation, and air conditioning solutions for commercial and industrial facilities.",
},
];

const HeroSection = () => {
  const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 900,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  pauseOnHover: false,
};
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-cyan-600 transition"
    >
      <FaChevronRight className="mx-auto" />
    </button>
  );
}
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-cyan-600 transition"
    >
      <FaChevronLeft className="mx-auto" />
    </button>
  );
}
 return (
  <div className="w-full overflow-hidden">
    <Slider {...settings}>
  {slides.map((slide, index) => (
    <div key={index}>
      <div
       className="h-[75vh] lg:h-[82vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="w-full h-full bg-black/50 flex items-center">
  <div className="max-w-7xl mx-auto w-full px-6 lg:px-16">

    {/* Small Badge
    <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-6 py-2 rounded-full mb-6 uppercase tracking-widest">
  Engineering Excellence
</div> */}

    {/* Heading */}
    <h1 className="text-white text-5xl lg:text-7xl font-extrabold leading-tight max-w-3xl">
      {slide.title}
    </h1>

    {/* Description */}
    <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-2xl">
      {slide.subtitle}
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-wrap gap-4">

     
{/* <button className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-2xl">
  Our Services
</button> */}
    </div>

  </div>
</div>
      </div>
    </div>
  ))}
</Slider>
</div>
  );
};

export default HeroSection;