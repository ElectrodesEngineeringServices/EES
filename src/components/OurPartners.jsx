

import lakecity from "../assets/img/army.png";
import ghani from "../assets/img/ACI.jpg";
import usapparel from "../assets/img/Bahira.png";
import fastcable from "../assets/img/DHA.jpg";
import doubletree from "../assets/img/dom.jpeg";
import topcity from "../assets/img/topcity.jpeg";
import zm from "../assets/img/ZM.jpg";
const OurPartners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Trusted Partners
          </h2>

          <p className="mt-4 text-gray-600">
            We are proud to work with leading organizations across Pakistan.
          </p>
        </div>

      <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-4">
  <img src={lakecity} alt="Lake City" className="h-24 w-auto mx-auto object-contain" />

  <img src={ghani} alt="Ghani Group" className="h-24 w-auto mx-auto object-contain" />

  <img src={usapparel} alt="US Apparel" className="h-24 w-auto mx-auto object-contain" />

  <img src={fastcable} alt="Fast Cable" className="h-24 w-auto mx-auto object-contain" />

  <img src={doubletree} alt="DoubleTree" className="h-24 w-auto mx-auto object-contain" />
  <img src={topcity} alt="DoubleTree" className="h-24 w-auto mx-auto object-contain" />
  <img src={zm} alt="DoubleTree" className="h-24 w-auto mx-auto object-contain" />

</div>

      </div>
    </section>
  );
};

export default OurPartners;