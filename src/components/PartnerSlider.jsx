import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Img1 from "../assets/img/slider1.jpeg";
import Img2 from "../assets/img/slider2.jpeg";
import Img3 from "../assets/img/slider3.jpeg";
import Img4 from "../assets/img/slider4.jpeg";
import Img5 from "../assets/img/slider5.jpeg";
import Img6 from "../assets/img/slider6.jpeg";
import Img7 from "../assets/img/slider7.jpeg";
import Img8 from "../assets/img/slider8.jpeg";

import Img10 from "../assets/img/slider10.jpeg";


const data = [
  { image: Img1, title: "Quality Checking" },
  { image: Img2, title: "Testing" },
  { image: Img3, title: "Latest Technology" },
  { image: Img4, title: "Laser Cutting" },
  { image: Img5, title: "Solar Systems" },
  { image: Img6, title: "LV Switchgear" },
  { image: Img7, title: "MV Switchgear" },
  { image: Img8, title: "MEP Services" },
  
  { image: Img10, title: "MV Switchgear" },
  
];
function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -right-6 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300"
    >
      <FaChevronRight />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -left-6 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300"
    >
      <FaChevronLeft />
    </div>
  );
}
const PartnerSlider = () => {

 const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,
  arrows: true,
nextArrow: <NextArrow />,
prevArrow: <PrevArrow />,
  slidesToShow: 4,
  slidesToScroll: 1,

  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (

    <section className="pt-24 pb-0 bg-white">

     <div className="max-w-7xl mx-auto px-12 relative">

        <h2 className="text-4xl font-bold text-center text-secondary mb-3">
  Why Choose Electrodes Engineering?
</h2>

       <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto leading-8">
  With years of industry experience, we have successfully completed numerous
  engineering projects, delivering reliable, innovative, and high-quality
  solutions that exceed our clients' expectations.
</p>
        <Slider {...settings}>

          {data.map((item, index) => (

            <div key={index} className="px-4">

              <div className="rounded-3xl overflow-hidden shadow-lg bg-white">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover hover:scale-110 transition duration-500"
                />

                <div className="p-5">

                  <h3 className="text-center text-xl font-bold">
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>

          ))}

        </Slider>

      </div>

    </section>
    

  );
  
};

export default PartnerSlider;