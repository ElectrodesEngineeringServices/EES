import ProductCard from '../components/productCard';
import CenteredContent from '../components/centeredContent';
// import { mechanicalProduct, electricalProduct, plumbingProduct } from '../data/data';

const mechanicalProduct = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Mechanical Tool Set',
      description: 'High-quality mechanical tools for all your needs.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Electrical Components Kit',
      description: 'A complete kit of electrical components and accessories.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Pumping Equipment',
      description: 'Durable and reliable pumping equipment for industrial use.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Trading Software',
      description: 'Advanced trading software for efficient market analysis.',
    },
  ];
  
  const electricalProduct = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Mechanical Tool Set',
      description: 'High-quality mechanical tools for all your needs.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Electrical Components Kit',
      description: 'A complete kit of electrical components and accessories.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Pumping Equipment',
      description: 'Durable and reliable pumping equipment for industrial use.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Trading Software',
      description: 'Advanced trading software for efficient market analysis.',
    },
  ];
  
  const plumbingProduct = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Mechanical Tool Set',
      description: 'High-quality mechanical tools for all your needs.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Electrical Components Kit',
      description: 'A complete kit of electrical components and accessories.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Pumping Equipment',
      description: 'Durable and reliable pumping equipment for industrial use.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Trading Software',
      description: 'Advanced trading software for efficient market analysis.',
    },
  ];
  

const content = [
  {
    heading: 'Trading',
    para1: 'MEP trading provides services to Mechanical, Electrical, Civil, and Water sectors in Northern Pakistan. We deal primarily in the supply and support of tools, consumables, and related equipment for Builders and Industrialists.',
    para2: 'With a solid communication network, the company has been able to successfully promote the business interests of the manufacturers and contractors whom we represent.',
    para3: 'The prime goal is to build positive and lasting relationships with our customers by delivering exemplary and outstanding service within budget.'
  }
];

const Trading = () => {
  return (
    <div className="p-6 mt-20 bg-gradient-to-r from-yellow-500 to-gray-800">
      {content.map((content, index) => (
        <CenteredContent key={index} content={content} />
      ))}
      <h2 className="text-3xl font-bold mb-4 pt-7 text-center text-white">Mechanical Products</h2>
      <div className="flex flex-wrap justify-center items-center p-4">
        {mechanicalProduct.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-4 pt-7 text-center text-white">Electrical Products</h2>
      <div className="flex flex-wrap justify-center items-center p-4">
        {electricalProduct.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-4 pt-7 text-center text-white">Plumbing Products</h2>
      <div className="flex flex-wrap justify-center items-center p-4">
        {plumbingProduct.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Trading;
