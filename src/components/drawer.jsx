import { useEffect, useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Drawer = ({ isDrawerOpen, closeDrawer }) => {
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isDrawerOpen]);

    const DrawerComponents = [
        { id: 1, name: "Home", path: '/' },
        { id: 2, name: "Mechanical", path: '/Mechanical' },
        { id: 3, name: "Electrical", path: '/Electrical' },
        { id: 4, name: "Plumbing", path: '/plumbing' },
        { id: 5, name: "Trading", path: '/Trading' },
        { id: 6, name: "Contact", path: '/Contact' }
    ];

    const handleButtonClick = (id, path) => {
        setActiveButton(id);
        closeDrawer();
        navigate(path);
    };

    return (
        <>
            {isDrawerOpen && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-70 transition-opacity">
                    <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-100 w-1/2 sm:w-1/4 md:w-2/5 h-screen flex flex-col justify-center items-center rounded-tr-3xl rounded-br-3xl animate-drawerOpen`}>
                        <div className="absolute top-4 right-4">
                            <button onClick={closeDrawer} className="text-yellow-500">
                                <GiCrossMark />
                            </button>
                        </div>
                        <div className='w-48'>
                            {DrawerComponents.map((component, index) => (
                                <button 
                                    key={component.id} 
                                    className={`flex items-start justify-start border-2 rounded-3xl py-2 px-6 my-8 w-full 
                                        ${activeButton === component.id ? 'bg-yellow-500 text-gray-800 font-semibold border-yellow-500' : 'text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800'} 
                                        animate-linkSlideIn`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onClick={() => handleButtonClick(component.id, component.path)}
                                >
                                    <svg className="w-6 h-6 mr-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                    {component.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Drawer;
