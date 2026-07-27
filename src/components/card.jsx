import { Link } from "react-router-dom";

const Card = ({ image, name, description, link }) => {
  return (
    <div className="group w-[300px] rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(0,174,255,0.25)]">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center h-[320px] p-6">

  <h3 className="text-2xl font-bold text-secondary mb-4 transition duration-300 group-hover:text-cyan-500">
    {name}
  </h3>

  <p className="text-gray-600 leading-7 mb-8">
    {description}
  </p>

  <Link to={link} className="flex justify-center">
    <button className="px-8 py-3 border border-cyan-400/30 bg-cyan-50/40 backdrop-blur-md text-secondary rounded-full font-semibold transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(0,174,255,0.45)] hover:scale-105">
      Learn More →
    </button>
  </Link>

</div>

    </div>
  );
};

export default Card;