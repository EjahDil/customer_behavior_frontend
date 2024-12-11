import React, { useState } from 'react';
import { FiSearch, FiHelpCircle, FiChevronDown, FiSettings, FiUser, FiEdit, FiLogOut } from 'react-icons/fi';
import profile from '../assets/images/profile.png';
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const Appbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await logout();
      navigate('/'); 
    } catch (error) {
      console.error('Logout failed:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Search input */}
        <div className="relative flex-grow max-w-xl">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Recherché" 
            className="w-full border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cbt-primary"
          />
        </div>

        {/* Right-side menu items */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <FiHelpCircle className="text-xl" />
            <span>Centre d'aide</span>
          </div>
          <div className="relative">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
              <span>Bessong A.</span>
              <FiChevronDown className="text-gray-600" />
            </div>
            
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="/admin/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cbt-primary flex items-center rounded-md mx-2">
                  <FiSettings className="mr-3" /> Settings
                </a>
                <a href="/admin/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cbt-primary flex items-center rounded-md mx-2">
                  <FiUser className="mr-3" /> Profile
                </a>
                <a href="/admin/updateprofile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cbt-primary flex items-center rounded-md mx-2">
                  <FiEdit className="mr-3" /> Update Profile
                </a>
                <a onClick={handleLogout}
                   href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 flex items-center rounded-md mx-2">
                  <FiLogOut className="mr-3" /> Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;