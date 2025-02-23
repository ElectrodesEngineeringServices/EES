
import ImgComponent from '../components/imgComponent';
import pumping1 from '../assets/img/plumbing1.jpg'
import pumping2 from '../assets/img/plumbing2.jpg'
import pumping3 from '../assets/img/plumbing3.jpg'
import pumping4 from '../assets/img/pumping4.jpeg'
import pumping5 from '../assets/img/pumping5.jpeg'
import pumping6 from '../assets/img/pumping6.jpeg'
import CenteredContent from '../components/centeredContent';



const plumbing = () => {
  const content = [
    {
      heading: 'Plumbing',
      para1: 'Our plumbing division is committed to delivering high-quality plumbing solutions that cater to the needs of residential, commercial, and industrial clients. From durable pipes and fittings to advanced plumbing systems, we provide a comprehensive range of products designed to ensure reliability and efficiency.',
      para2: 'Our expertise in plumbing ensures that you receive the best solutions for water management and distribution in any project.',
      para3: 'At the heart of our plumbing offerings is a dedication to quality and innovation. We supply a wide array of plumbing products, including state-of-the-art fixtures, piping systems, and essential tools. '
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
        heading="Plumbing"
        mainParagraph="MEP Engineering Services is dedicated to delivering top-notch residential and commercial plumbing solutions. With a team of skilled technicians and a commitment to exceptional customer service. Company is offering a comprehensive range of services, including repairs, installations and maintenance, we are poised to address the diverse needs of our clients efficiently and effectively."
        listComponent=""
        prevBtnId="prevBtn1"
        nextBtnId="nextBtn1"
        mainImageId="mainImage1"
        images={[ pumping1,pumping2, pumping3]}
      />
      <ImgComponent
        subHeading=""
        heading="Plumbing"
        mainParagraph=" MEP Engineering services undertakes the Supply, Installation, Testing & Commissioning of:"
        listComponent={
          <ul className="list-disc ml-6 mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:col-span-1 text-white">
            <li>Sewerage System</li>
            <li>Water Supply System</li>
            <li>Natural Gas System</li>
        </ul>
        }
        prevBtnId="prevBtn2"
        nextBtnId="nextBtn2"
        mainImageId="mainImage2"
        images={[ pumping4,pumping5, pumping6]}
      />
      </div>
    </>
  );
}

export default plumbing;
