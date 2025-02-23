// HeroSection
import Img from '../assets/img/bg1.webp'

const HeroSection = () => {
  return (
    <div className="py-16  mt-12 flex  h-1/2-screen w-full items-center bg-cover bg-center bg-black opacity-95" style={{ backgroundImage: `url(${Img})` }}>
      <div className="relative my-32 justify-center items-center sm:mx-20 mx-10 ">
            <h1 className=" text-2xl sm:text-4xl font-bold mb-4 text-yellow-500">MECHANICAL AND <br/>+ ELECTRICAL <br/>PROFESSIONALS</h1>

      </div>
    </div>
  );
};

export default HeroSection;
