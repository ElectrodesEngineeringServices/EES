import ImgComponent from "../components/imgComponent";

import pumping1 from "../assets/img/plumbing1.jpg";
import pumping2 from "../assets/img/plumbing2.jpg";
import pumping3 from "../assets/img/plumbing3.jpg";

import pumping4 from "../assets/img/pumping4.jpeg";
import pumping5 from "../assets/img/pumping5.jpeg";
import pumping6 from "../assets/img/pumping6.jpeg";

const Plumbing = () => {
  return (
    <>
      {/* Hero */}

      <section className="pt-36 pb-24 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">

        <div className="max-w-[1500px] mx-auto px-6 text-center">

          {/* <span className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-full uppercase tracking-[3px] font-semibold">
            Plumbing Division
          </span> */}

          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
            Plumbing Engineering Services
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-9 max-w-5xl mx-auto">
            Electrodes Engineering Services provides complete Plumbing
            Engineering Solutions for residential, commercial and industrial
            projects. Our services include Water Supply Systems, Sewerage
            Systems, Natural Gas Pipelines, Drainage Networks and complete
            plumbing installations designed to meet international quality,
            safety and performance standards.
          </p>

        </div>

      </section>

      {/* Plumbing Systems */}

      <section className="bg-white">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            subHeading="Residential & Commercial"
            heading="Plumbing Systems"
            mainParagraph="We provide complete plumbing design, installation, testing and maintenance services for residential, commercial and industrial buildings. Our experienced team ensures reliable water distribution, drainage and sanitary solutions."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>Water Supply Networks</li>
                <li>Drainage Systems</li>
                <li>Sanitary Installations</li>
                <li>Pipe Fittings & Fixtures</li>
                <li>Maintenance & Repair Services</li>
              </ul>
            }

            images={[pumping1, pumping2, pumping3]}
          />

        </div>

      </section>

      {/* Utility Systems */}

      <section className="bg-gray-50">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            subHeading="Infrastructure Solutions"
            heading="Utility & Distribution Systems"

            mainParagraph="Electrodes Engineering Services undertakes the complete supply, installation, testing and commissioning of underground and above-ground utility systems for residential, commercial and industrial developments."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>Sewerage Systems</li>
                <li>Water Supply Systems</li>
                <li>Natural Gas Distribution</li>
                <li>Storm Water Drainage</li>
                <li>Pumping Stations</li>
              </ul>
            }

            images={[pumping4, pumping5, pumping6]}
          />

        </div>

      </section>
    </>
  );
};

export default Plumbing;