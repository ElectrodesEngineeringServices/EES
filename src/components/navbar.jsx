import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Drawer from './drawer';
import logo from '../assets/img/electrode.png';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const listItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Mechanical", path: "/mechanical" },
    { id: 3, name: "Electrical", path: "/electrical" },
    { id: 4, name: "Plumbing", path: "/plumbing" },
    { id: 5, name: "Trading", path: "/trading" }
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ">
          <img src={logo} className="h-18 w-24" alt="company logo" />
          <span className="text-white mr-4">Electrodes Engineering Services (Pvt) Ltd</span>
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center">
          <ul className="flex space-x-8">
            {listItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`text-white hover:text-yellow-500 transition-colors ${activeItem === item.name ? 'text-yellow-500 text-lg' : ''}`}
                  onClick={() => handleItemClick(item.name)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <Link to="/contact">
            <button className="border-2 border-yellow-500 text-yellow-500 py-2 px-6 rounded-full">Contact</button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleDrawer} className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </nav>
  );
}

export default Navbar;
