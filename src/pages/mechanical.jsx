
import ImgComponent from '../components/imgComponent';
import fire1 from '../assets/img/firef1.jpg';
import fire2 from '../assets/img/firef2.jpg';
import fire3 from '../assets/img/firef3.jpg';
import hvac1 from '../assets/img/hvac1.jpg';
import hvac2 from '../assets/img/hvac2.jpg';
import hvac3 from '../assets/img/hvac3.jpg';
import cabletray1 from '../assets/img/cabletray4.jpg';
import cabletray2 from '../assets/img/cabletray2.jpg';
import cabletray3 from '../assets/img/cabletray5.jpg';
import CenteredContent from '../components/centeredContent';




const Mechinical = () => {
  const content = [
    {
      heading: 'Mechanical',
      para1: 'Our mechanical department specializes in providing high-quality mechanical tools and equipment designed to meet the rigorous demands of various industries.',
      para2: 'From precision tools to robust machinery, we offer solutions that are engineered for reliability and efficiency. Our products are crafted to help you achieve optimal performance in all your mechanical projects.',
      para3: ''
    }
  ];
  return (
    <>
    <div className=" p-6 mt-20 bg-gradient-to-r from-yellow-500 to-gray-800">
        {content.map((content, index) => (
          <CenteredContent key={index} content={content} />
        ))}
      <ImgComponent
        subHeading=""
        heading="Fire Fighting"
        mainParagraph="MEP Engineering services undertakes the Supply, Installation, Testing & Commissioning of:"
        listComponent={
          <ul className="list-disc ml-6 mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:col-span-1 text-white">
          <li>Fire Detection and Alarm System</li>
          <li>Fire Hydrant System</li>
          <li>Sprinkler System</li>
        </ul>
        
        }
        prevBtnId="prevBtn1"
        nextBtnId="nextBtn1"
        mainImageId="mainImage1"
        images={[ fire1,fire2, fire3]}
      />
      <ImgComponent
        subHeading="Heating, Ventilation & Air Conditioning"
        heading="HVAC"
        mainParagraph="MEP Engineering services provides high-quality heating, ventilation, and air conditioning services to residential and commercial customers. The goal is to deliver superior HVAC services that enhance the comfort, health, and energy efficiency of our customers' living and working environments."
        listComponent=""
        prevBtnId="prevBtn2"
        nextBtnId="nextBtn2"
        mainImageId="mainImage2"
        images={[ hvac1,hvac2, hvac3]}
      />
      <ImgComponent
        subHeading=""
        heading="Cable Tray & Electric Panels"
        mainParagraph="MEP Engineering services provides high-quality cable trays, ladders, solar panels frame structure and electrical panels etc..."
        listComponent=""
        prevBtnId="prevBtn3"
        nextBtnId="nextBtn3"
        mainImageId="mainImage3"
        images={[ cabletray1,cabletray2, cabletray3]}
      />
      </div>
    </>
  );
}

export default Mechinical;
