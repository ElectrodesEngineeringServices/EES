import React from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const ImgComponent = ({  subHeading,heading, mainParagraph, listComponent, prevBtnId, nextBtnId, mainImageId, images }) => {
  const setupImageSlider = (prevBtnId, nextBtnId, mainImageId, images) => {
    let currentIndex = 0;

    const handlePrevClick = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      document.getElementById(mainImageId).src = images[currentIndex];
    };

    const handleNextClick = () => {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById(mainImageId).src = images[currentIndex];
    };

    document.getElementById(prevBtnId).addEventListener('click', handlePrevClick);
    document.getElementById(nextBtnId).addEventListener('click', handleNextClick);
  };

  React.useEffect(() => {
    setupImageSlider(prevBtnId, nextBtnId, mainImageId, images);
  }, [prevBtnId, nextBtnId, mainImageId, images]);

  return (
    <div className=" justify-center items-center flex pt-20">
      <main className=" mx-4 bg-gradient-to-r from-gray-800 to-yellow-500 rounded-2xl shadow-2xl py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-2 flex flex-col-reverse rounded-lg sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold sm:text-white text-white md:text-2xl">{heading}</h1>
            <p className="text-sm leading-4 font-medium sm:text-white text-white">{subHeading}</p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 relative lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <div className="relative w-full h-60 sm:h-52 sm:col-span-2 flex items-center justify-center lg:col-span-full">
              <img id={mainImageId} src={images[0]} alt="" className="w-full h-full object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full transition-transform duration-300 transform lg:hover:scale-150" loading="lazy" />
              <button id={prevBtnId} className="absolute left-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-2xl bg-black bg-opacity-50 text-white sm:hidden" aria-label="Previous"> 
                <FaLessThan />
              </button>
              <button id={nextBtnId} className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-2xl bg-black bg-opacity-50 text-white sm:hidden" aria-label="Next">
                <FaGreaterThan />
              </button>
            </div>
            <img src={images[1]} alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32 transition-transform duration-300 transform lg:hover:scale-150" loading="lazy" />
            <img src={images[2]} alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32 transition-transform duration-300 transform lg:hover:scale-150" loading="lazy" />
          </div>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-2 lg:col-span-1 text-white">
            {mainParagraph}
            {listComponent}
          </p>
        </div>
      </main>
    </div>
  );
}

export default ImgComponent;
