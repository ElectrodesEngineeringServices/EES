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
                    <div className={`fixed inset-0 z-50 bg-secondary bg-opacity-100 w-1/2 sm:w-1/4 md:w-2/5 h-screen flex flex-col justify-center items-center rounded-tr-3xl rounded-br-3xl animate-drawerOpen`}>
                        <div className="absolute top-4 right-4">
                            <button onClick={closeDrawer} className="text-primary">
                                <GiCrossMark />
                            </button>
                        </div>
                        <div className='w-48'>
                            {DrawerComponents.map((component, index) => (
                                <button 
                                    key={component.id} 
                                    className={`w-full flex items-center gap-3 px-6 py-4 my-4 rounded-xl border transition-all duration-300
${
  activeButton === component.id
    ? "bg-primary text-secondary border-primary"
    : "text-white border-gray-600 hover:bg-primary hover:text-secondary hover:border-primary"
}`}
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
