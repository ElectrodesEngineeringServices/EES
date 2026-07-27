import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImgComponent = ({
  subHeading,
  heading,
  mainParagraph,
  listComponent,
  images,
}) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 border-b border-gray-200 last:border-0">

      <div className="w-[95%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="w-20 h-1 "></div>

            {subHeading && (
              <p className="uppercase tracking-[3px] text-cyan-600 font-semibold mb-2">
                {subHeading}
              </p>
            )}

            <h2 className="text-5xl font-bold text-secondary mb-8">
              {heading}
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              {mainParagraph}
            </p>

            {listComponent && (
              <div className="mt-6 text-gray-700 leading-8">
                {listComponent}
              </div>
            )}

            {/* <button className="mt-10 px-8 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition">
              Learn More
            </button> */}

          </div>

          {/* RIGHT */}

          <div>

            <div className="relative">

              <img
                src={images[current]}
                alt=""
                className="w-full h-[420px] rounded-xl object-cover shadow-xl"
              />

              <button
                onClick={prevImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex justify-center items-center hover:bg-cyan-500 hover:text-white"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex justify-center items-center hover:bg-cyan-500 hover:text-white"
              >
                <FaChevronRight />
              </button>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-5">

              {images.map((img, index) => (

                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setCurrent(index)}
                  className={`h-28 w-full rounded-lg object-cover cursor-pointer border-4 transition ${
                    current === index
                      ? "border-cyan-500"
                      : "border-transparent"
                  }`}
                />

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ImgComponent;