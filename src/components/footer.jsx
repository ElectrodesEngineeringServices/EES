
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between items-center">
        {/* Left Section */}
        {/* <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-2">Company Name</h2>
          <p className="text-sm">Quote of the company</p>
        </div> */}

        {/* Center Section */}
        <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
          <h3 className="text-lg font-light mb-2 underline-offset-4">Follow Us</h3>
          <div className="flex justify-center sm:justify-start items-center space-x-4">
            {/* Facebook */}
            <a href="www.facebook.com" className="text-gray-400 hover:text-white text-xl" aria-label="Facebook">
            <FaFacebook/>
            </a>
            {/* Instagram */}
            <a href="www.instagram.com" className="text-gray-400 hover:text-white text-xl" aria-label="Instagram">
            <FaInstagram/>
            </a>
            {/* LinkedIn */}
            <a href="www.instagram.com" className="text-gray-400 hover:text-white text-xl" aria-label="LinkedIn">
            <FaLinkedin/>
            </a>
          </div>
        </div>

        {/* Right Section */}
      <div className="w-full sm:w-auto">
  <h3 className="text-lg font-medium mb-4 text-white">
    Contact Us
  </h3>

  <div className="space-y-4">

    {/* Email */}
    <a
      href="mailto:info@electrodeseng.com"
      className="flex items-center text-gray-300 hover:text-white"
    >
      <MdEmail className="text-xl w-6 flex-shrink-0" />
      <span className="ml-3">info@electrodeseng.com</span>
    </a>

  {/* Contact Numbers */}
<div className="text-gray-300 space-y-2">

  <a
    href="https://wa.me/923415233397"
    className="flex items-center hover:text-white"
  >
    <FaWhatsapp className="text-xl w-6 flex-shrink-0" />
    <span className="ml-3">+92 341 5233397</span>
  </a>

  <a
    href="tel:+923335691813"
    className="flex items-center hover:text-white"
  >
    <FaPhoneAlt className="text-lg w-6 flex-shrink-0" />
    <span className="ml-3">+92 333 5691813</span>
  </a>

</div>

  </div>
</div>

        {/* Bottom Section */}
       <div className="w-full border-t border-gray-600 pt-4">
  <div className="flex items-start justify-center sm:justify-start text-sm text-gray-300">
    <FaMapMarkerAlt className="text-red-500 text-lg mt-1 flex-shrink-0" />
    <p className="ml-3">
      MC 14, Ghauri Town Phase VII Block C, Akbar Enclave,
      Islamabad, 44000
    </p>
  </div>
</div>
      </div>
    </footer>
  );
}

export default Footer;
