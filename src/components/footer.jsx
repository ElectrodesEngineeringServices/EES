
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between items-center">
        {/* Left Section */}
        <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-2">Company Name</h2>
          <p className="text-sm">Quote of the company</p>
        </div>

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
        <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-right">
          <h3 className="text-lg font-light mb-2 underline-offset-4">Contact Us</h3>
          <div className="flex justify-center sm:justify-end flex-col items-center space-x-4">
            {/* Email */}
            <a href="www.instagram.com" className="text-gray-400 hover:text-white flex items-center text-xl" aria-label="Email">
              <div className="flex items-center">
              <MdEmail/>
                <span className="ml-2">Email Address</span>
              </div>
            </a>
            {/* WhatsApp */}
            <a href="www.instagram.com" className="text-gray-400 hover:text-white flex items-center text-xl" title="WhatsApp Icon" aria-label="WhatsApp">
              <div className="flex items-center">
              <FaWhatsapp/> 
                <span className="ml-2">+976543456789</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-gray-600 pt-4 text-center sm:text-left">
          <p className="text-sm">1234 Street Name, City, Country</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
