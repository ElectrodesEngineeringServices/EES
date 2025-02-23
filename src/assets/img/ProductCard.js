import React from 'react';

const ProductCard = ({ product }) => {
  return (
    
    <div className="max-w-sm w-56 lg:max-w-full lg:flex lg:flex-col rounded-2xl overflow-hidden shadow-lg m-4 bg-gray-800">
    <img className="w-full h-40 object-cover" src={product.image} alt={product.name} />
    <div className="p-6 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <div className="text-white font-bold text-xl mb-2">{product.name}</div>
        <p className="text-white text-base">{product.description}</p>
      </div>
      
    </div>
  </div>
  );
};

export default ProductCard;