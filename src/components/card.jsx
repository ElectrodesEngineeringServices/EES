
import { Link } from 'react-router-dom';

const Card = ({ image, name, description, link }) => {
  return (
    
    <div className="max-w-sm w-80 lg:max-w-full lg:flex lg:flex-col rounded-2xl overflow-hidden shadow-lg m-4 bg-gray-800">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-6 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-white font-bold text-xl mb-2">{name}</div>
          <p className="text-white text-base">{description}</p>
        </div>
        <div className="flex justify-center">
          <Link to={link} className="w-full">
            <button className="bg-gray-800 border-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-gray-800 py-2 px-4 w-full rounded-full">
              MORE INFO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
