import ImgComponent from "../components/imgComponent";

import electricalp1 from "../assets/img/hv.jpg";
import electricalp2 from "../assets/img/electricalP2.jpg";
import electricalp3 from "../assets/img/electricalP3.jpg";

import electricallv1 from "../assets/img/lv.jpg";
import electricallv2 from "../assets/img/lvsystem.jpg";
import electricallv3 from "../assets/img/lv2.png";

import spanal1 from "../assets/img/spanal1.jpg";
import spanal2 from "../assets/img/spanal2.jpg";
import spanal3 from "../assets/img/spanal3.jpg";

const Electrical = () => {
  return (
    <>
      {/* Hero */}

      <section className="pt-36 pb-24 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">

        <div className="max-w-[1500px] mx-auto px-6 text-center">

          {/* <span className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-full uppercase tracking-[3px] font-semibold">
            Electrical Division
          </span> */}

          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
            Electrical Engineering Services
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-9 max-w-5xl mx-auto">
            Electrodes Engineering Services provides complete Electrical
            Engineering Solutions for commercial, industrial and infrastructure
            projects. Our expertise includes High Voltage Systems, Low Voltage
            Systems, Solar PV Solutions, Testing, Commissioning and complete
            turnkey electrical installations with international quality and
            safety standards.
          </p>

        </div>

      </section>

      {/* High Voltage */}

      <section className="bg-white">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            subHeading="Electrical Distribution"
            heading="High Voltage Systems"
            mainParagraph="We provide complete supply, installation, testing and commissioning of High Voltage electrical systems."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>11kV Panels</li>
                <li>Ring Main Units (RMU)</li>
                <li>Power Transformers</li>
                <li>LT Panels & Service Boxes</li>
                <li>Motor Control Centers (MCC)</li>
                <li>ATS & Synchronization Panels</li>
                <li>Earthing & Lightning Protection</li>
              </ul>
            }

            images={[electricalp1, electricalp2, electricalp3]}
          />

        </div>

      </section>

      {/* Low Voltage */}

      <section className="bg-gray-50">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            subHeading="Communication & Security"
            heading="Low Voltage Systems"

            mainParagraph="We deliver modern Low Voltage systems for security, communication and networking infrastructure."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>CCTV Surveillance Systems</li>
                <li>Public Address Systems</li>
                <li>Access Control Systems</li>
                <li>Wi-Fi & Data Networking</li>
                <li>Structured Cabling</li>
              </ul>
            }

            images={[electricallv1, electricallv2, electricallv3]}
          />

        </div>

      </section>

      {/* Solar */}

      <section className="bg-white">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            subHeading="Renewable Energy"
            heading="Solar PV Systems"

            mainParagraph="Electrodes Engineering Services provides complete Solar PV solutions including design, supply, installation, testing and maintenance for residential, commercial and industrial projects."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>On-Grid Solar Systems</li>
                <li>Off-Grid Solar Systems</li>
                <li>Hybrid Solar Solutions</li>
                <li>Net Metering</li>
                <li>Solar Maintenance & Monitoring</li>
              </ul>
            }

            images={[spanal1, spanal2, spanal3]}
          />

        </div>

      </section>
    </>
  );
};

export default Electrical;