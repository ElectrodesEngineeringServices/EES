import HeroSection from '../components/heroSection';
import Card from '../components/card';
import cardData from '../data/data'; // assuming this is the default export

const Home = () => {
  const cards = cardData.cardDataHome; // Access the array within the object
  console.log(cards);

  return (
    <>
      <HeroSection />
      <div className="text-center p-8  bg-gradient-to-r from-yellow-500 to-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4 ">What we do?</h2>
        <p className="text-white text-base">Explore the various services we offer to meet your needs and requirements. Our expert team is dedicated to providing top-notch solutions tailored to your business.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center bg-gradient-to-r from-yellow-500 to-gray-800 p-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
