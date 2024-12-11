import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MdDashboard, 
  MdPeople, 
  MdLocalShipping, 
  MdMessage, 
  MdCalendarToday, 
  MdAnalytics, 
  MdInventory, 
  MdSettings, 
  MdPerson,
  MdLogout 
} from 'react-icons/md';
import LogoWhite from './../assets/images/logo-white.png'
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
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

  const menuItems = [
    { icon: MdDashboard, label: 'Tableau de bord', path: '/admin/dashboard' },
    { icon: MdPeople, label: 'Comportement clients', path: '/admin/clients' },
    { icon: MdLocalShipping, label: 'Demande de livraison', path: '/admin/delivery' },
    { icon: MdMessage, label: 'Messages', path: '/admin/messages' },
    { icon: MdCalendarToday, label: 'Calendriers', path: '/admin/calendar' },
  ];

  const databaseItems = [
    { icon: MdAnalytics, label: 'Analytique', path: '/admin/analytics' },
    { icon: MdInventory, label: 'Produits', path: '/admin/products' },
  ];

  const userItems = [
    { icon: MdPerson, label: 'Profile', path: '/admin/profile' },
    { icon: MdSettings, label: 'Paramètres', path: '/admin/settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const getLinkClasses = (path: string) => {
    const baseClasses = "flex items-center space-x-2 p-3 my-1 mx-2 rounded-md transition-colors duration-200";
    return isActive(path)
      ? `${baseClasses} bg-white text-black`
      : `${baseClasses} text-white hover:bg-cbt-secondary`;
  };

  return (
    <aside className="bg-cbt-primary w-64 min-h-screen flex flex-col">
      <div className="p-4">
        <img src={LogoWhite} alt="CBT" className="h-8 mt-1" />
        <hr className='mt-5' />
      </div>
      <nav className="flex-grow overflow-y-auto">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className={getLinkClasses(item.path)}>
            <item.icon className="text-xl" />
            <span>{item.label}</span>
          </Link>
        ))}
        <div className="p-4 text-sm font-bold text-white">BASE DE DONNÉES</div>
        {databaseItems.map((item) => (
          <Link key={item.path} to={item.path} className={getLinkClasses(item.path)}>
            <item.icon className="text-xl" />
            <span>{item.label}</span>
          </Link>
        ))}
        <div className="p-4 text-sm font-bold text-white">UTILISATEUR</div>
        {userItems.map((item) => (
          <Link key={item.path} to={item.path} className={getLinkClasses(item.path)}>
            <item.icon className="text-xl" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-2">
        {/* <Link to="/logout" className="flex items-center space-x-2 p-3 text-white hover:bg-red-500 rounded-md">
          <MdLogout className="text-xl" />
          <span>Déconnexion</span>
        </Link> */}
        <a
          href="#" 
          onClick={handleLogout}
          className="flex items-center space-x-2 p-3 text-white hover:bg-red-500 rounded-md"
        >
          <MdLogout className="text-xl" />
          <span>Déconnexion</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
