import React from 'react';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="bg-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Side - Logo */}
                    <div className="flex items-center">
                        {/* <img
                            src="https://via.placeholder.com/50x50"
                            alt="CBT Logo"
                            className="h-8 w-8 mr-2"
                        /> */}
                        <span className="text-cbt-primary text-2xl font-bold">CBT®</span>
                    </div>

                    {/* Right Side - Links */}
                    <div className="flex space-x-8 text-gray-500">
                        <a href="#" className="hover:text-cbt-primary">À propos de</a>
                        <a href="#" className="hover:text-cbt-primary">Joindre</a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
