import aftab from "../assets/img/aftabch.jpeg";
import tayyab from "../assets/img/tayyab.jpeg";

const About = () => {
  return (
    <>
      {/* Hero */}

      <section className="pt-36 pb-24 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            About Electrodes Engineering Services
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-9 max-w-5xl mx-auto">
            Electrodes Engineering Services is a trusted engineering company
            providing complete Electrical, Mechanical, Trading and Industrial
            Engineering Solutions for commercial, industrial and infrastructure
            projects throughout Pakistan.
          </p>

        </div>
      </section>

      {/* Company */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h4 className="text-cyan-600 uppercase tracking-[3px] font-semibold">
  Company Overview
</h4>

            <h2 className="text-4xl font-bold text-secondary mt-3">
              Engineering Excellence You Can Trust
            </h2>

          </div>

        <p className="text-gray-600 leading-9 text-lg text-center max-w-5xl mx-auto">
  Electrodes Engineering Services specializes in delivering innovative
  engineering solutions with a strong commitment to quality, safety, and
  customer satisfaction. Our expertise includes Electrical Installations,
  LV & MV Switchgear, MEP Services, HVAC Systems, Fire Fighting Systems,
  Earthing & Lightning Protection Systems, Renewable Energy (Solar)
  Solutions, Plumbing Engineering, Industrial Trading, and complete
  design, supply, installation, testing, commissioning, and maintenance
  services for commercial, industrial, and infrastructure projects.
</p>

        </div>
      </section>

      {/* Mission Vision */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

         <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition duration-300">
  <h3 className="text-3xl font-bold text-secondary mb-5">
    Our Mission
  </h3>

  <p className="text-gray-600 leading-8 text-lg">
    To deliver innovative, reliable, and cost-effective engineering solutions
    that exceed client expectations through technical excellence, quality
    workmanship, and an unwavering commitment to safety. We strive to build
    lasting partnerships by providing exceptional service, sustainable
    solutions, and value-driven results for every project we undertake.
  </p>
</div>

         <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition duration-300">
  <h3 className="text-3xl font-bold text-secondary mb-5">
    Our Vision
  </h3>

  <p className="text-gray-600 leading-8 text-lg">
    To become a leading engineering company recognized for delivering world-class
    electrical, mechanical, solar, and industrial solutions. We aim to drive
    innovation, embrace advanced technologies, and contribute to sustainable
    infrastructure development while setting new standards of quality,
    reliability, and customer satisfaction.
  </p>
</div>

        </div>
      </section>

      {/* Why Choose Us */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h4 className="text-cyan-600 uppercase tracking-[3px] font-semibold">
              Why Choose Us
            </h4>

            <h2 className="text-4xl font-bold text-secondary mt-3">
              Our Strengths
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-3xl p-8 shadow-md text-center">
              <h3 className="text-5xl font-bold text-cyan-600">10+</h3>
              <p className="mt-4 font-semibold">
                Years of Experience
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-md text-center">
              <h3 className="text-5xl font-bold text-cyan-600">100+</h3>
              <p className="mt-4 font-semibold">
                Completed Projects
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-md text-center">
              <h3 className="text-5xl font-bold text-cyan-600">24/7</h3>
              <p className="mt-4 font-semibold">
                Technical Support
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-md text-center">
              <h3 className="text-5xl font-bold text-cyan-600">100%</h3>
              <p className="mt-4 font-semibold">
                Quality Commitment
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Leadership */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            {/* <h4 className="text-cyan-600 uppercase tracking-[3px] font-semibold">
              Leadership Team
            </h4> */}

            <h2 className="text-4xl font-bold text-secondary mt-3">
              Who We Are?
            </h2>

          </div>

        <div className="flex items-center gap-5">

  <img
    src={aftab}
    alt="Aftab"
    className="w-28 h-28 rounded-full object-cover border-4 border-cyan-500"
  />

  <div>

    <h3 className="text-2xl font-bold">
      Engr. Aftab Ch
    </h3>

    <p className="text-cyan-600 font-semibold">
     CEO
    </p>

    <p className="text-gray-500">
      Electrical Engineer | 10+ Years Experience
    </p>

  </div>

</div>

<p className="mt-6 text-gray-600 leading-8">
  Engr. Aftab ch is the Chief Executive Officer of Electrodes Engineering Services Pvt. Ltd., bringing over 10 years of professional experience in the electrical engineering industry. His expertise spans LV & MV switchgear design, electrical design consultancy, power distribution systems, project estimation, testing & commissioning, industrial electrical installations, and engineering project management.

Throughout his career, he has successfully managed and delivered electrical projects across the commercial, industrial, and infrastructure sectors. With a strong background in design engineering, cost estimation, technical compliance, and project execution, he ensures that every project meets international standards, safety regulations, and client expectations.

Under his leadership, Electrodes Engineering Services is dedicated to providing innovative, reliable, and cost-effective engineering solutions, while maintaining the highest standards of quality, technical excellence, and customer satisfaction.
</p>
<div className="flex items-center gap-5">

  <img
    src={tayyab}
    alt="Tayyab"
    className="w-28 h-28 rounded-full object-cover border-4 border-cyan-500"
  />

  <div>

    <h3 className="text-2xl font-bold">
      Engr. Syed Tayyab ul Hussain Shah
    </h3>

    <p className="text-cyan-600 font-semibold">
      Director
    </p>

   <p className="text-gray-500">
  Electrical Engineer | 20+ Years of Experience | M.S. (London, UK)
</p>

  </div>

</div>

<p className="mt-6 text-gray-600 leading-8">
  Engr. Tayyab serves as the Director of Electrodes Engineering Services.
  He is an Electrical Engineer with over 20 years of professional experience
  and holds a Master's (MS) degree from London. His core expertise includes
  MEP engineering, site execution, project planning, construction management,
  engineering coordination, testing & commissioning, and turnkey project
  execution. He is committed to delivering high-quality engineering solutions
  with excellence, safety, and timely project completion.
</p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 bg-cyan-600">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Let's Build Something Great Together
          </h2>

          <p className="text-white/90 mt-6 text-lg leading-8">
            Whether it's an electrical, mechanical, solar or industrial
            engineering project, our experienced team is ready to deliver
            reliable and high-quality solutions tailored to your needs.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-white text-cyan-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </a>

        </div>

      </section>

    </>
  );
};

export default About;