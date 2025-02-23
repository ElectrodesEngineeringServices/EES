
import ImgComponent from '../components/imgComponent';
import electricalp1 from '../assets/img/electricalp1.jpg';
import electricalp2 from '../assets/img/electricalP2.jpg';
import electricalp3 from '../assets/img/electricalP3.jpg';
import electricallv1 from '../assets/img/cctv.jpg';
import electricallv2 from '../assets/img/electricalLV2.jpg';
import electricallv3 from '../assets/img/electricalLV3.jpg';
import spanal1 from '../assets/img/spanal1.jpg';
import spanal2 from '../assets/img/spanal2.jpg';
import spanal3 from '../assets/img/spanal3.jpg';
import CenteredContent from '../components/centeredContent';



const Electrical = () => {
  const content = [
    {
      heading: 'Electrical',
      para1: 'Whether you require domestic, industrial or commercial electrical work, MEP Engineering Services is fully committed to provide professional & affordable services.',
      para2: ' We carry out all aspects of electrical work, from design review & consultation through to installation, Testing & commissioning for clients in the domestic, commercial, industrial and Housing Society’s.',
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
        subHeading="Electrical"
        heading="High Voltage"
        mainParagraph="MEP Engineering services undertakes the Supply, Installation, Testing & Commissioning of:"
        listComponent={
        
          <ul className="list-disc ml-6 mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:col-span-1 text-white">
          <li>11kv Panels, RMU & Transformers</li>
                    <li>LT Panels & Service Box</li>
                    <li>Street light control panels</li>
                    <li>Motor control centres</li>
                    <li>ATS & Sink Panels</li>
                    <li>Earthing & Lightning</li>
        </ul>
        
        }
        prevBtnId="prevBtn1"
        nextBtnId="nextBtn1"
        mainImageId="mainImage1"
        images={[electricalp1 ,electricalp2, electricalp3]}
      />
       <ImgComponent
        subHeading="Electrical"
        heading="Low Voltage"
        mainParagraph=
       " MEP Engineering services undertakes the Supply, Installation, Testing & Commissioning of:"
        listComponent={
        
          <ul className="list-disc ml-6 mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:col-span-1 text-white">
            <li>Closed Circuit Television (CCTV)</li>
            <li>Public Address System</li>
            <li>Wi-Fi & Data Networking</li>
        </ul>
        
        }
        prevBtnId="prevBtn2"
        nextBtnId="nextBtn2"
        mainImageId="mainImage2"
        images={[electricallv1,electricallv2, electricallv3]}
      />
      <ImgComponent
        subHeading=""
        heading="Solar PV System"
        mainParagraph=
       "MEP Engineering Services is fully committed to provide professional & affordable services. where we specialize in expert solar panel installation services."
        listComponent=""
        prevBtnId="prevBtn3"
        nextBtnId="nextBtn3"
        mainImageId="mainImage3"
        images={[spanal1,spanal2, spanal3]}
      />
      </div>
    </>
  );
}

export default Electrical;
