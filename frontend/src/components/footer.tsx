import React from 'react';
import LogoSteal from '../assets/images/logo-steal.png'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-cbt-gray py-8">
        <div className="container mx-auto flex justify-between items-start">
          <a href="#" className="flex items-center">
            <img src={LogoSteal} alt="CBT Logo" className="h-8 mr-2" />
            {/* <span className="text-cbt-primary text-2xl font-bold">CBT®</span> */}
          </a>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-grey">
              Connectez-vous pour à votre tableau de bord et gérez vos
            </p>
            <p className="text-grey">
              transactions en toute simplicité
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="E-mail"
                className="bg-white text-cbt-secondary px-3 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-cbt-primary text-cbt-gray px-4 py-2 rounded-r-md hover:bg-cbt-secondary transition-colors duration-300">
                Se connecter
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <hr className="border-cbt-secondary opacity-50" />
          <div className="flex justify-between items-center mt-4 text-cbt-secondary">
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-900">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray hover:text-cbt-primary transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray hover:text-cbt-primary transition-colors duration-300">
                politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;



// const Footer = () => {
//           return (
//             <footer className="bg-gray-50 py-8">
//               <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//                 {/* Logo Section */}
//                 <div className="flex items-center mb-4 md:mb-0">
//                   {/* <img
//                     src="https://via.placeholder.com/50x50"
//                     alt="CBT Logo"
//                     className="h-10 w-10 mr-2"
//                   /> */}
//                   <span className="text-xl text-blue-500 font-semibold">CBT®</span>
//                 </div>
        
//                 {/* Email Subscription Section */}
//                 <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
//                   <p className="text-gray-600 text-sm mb-2 md:mb-0 md:mr-4 text-center">
//                     Connectez-vous pour à votre tableau de bord et gérez vos transactions
//                     en toute simplicité
//                   </p>
//                   <div className="flex items-center">
//                     <input
//                       type="email"
//                       placeholder="E-mail"
//                       className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
//                     />
//                     <button className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500">
//                       Se connecter
//                     </button>
//                   </div>
//                 </div>
//               </div>
        
//               {/* Horizontal Divider */}
//               <div className="container mx-auto px-4 my-4">
//                 <hr className="border-gray-300" />
//               </div>
        
//               {/* Icons and Policy Links on the Same Line */}
//               <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
//                 {/* Social Icons */}
//                 <div className="flex space-x-4">
//                   <a href="#" className="hover:text-gray-900">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#" className="hover:text-gray-900">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#" className="hover:text-gray-900">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a href="#" className="hover:text-gray-900">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
        
//                 {/* Policy Links */}
//                 <div className="flex space-x-8 mt-4 md:mt-0">
//                   <a href="#" className="hover:text-gray-900">Conditions d'utilisation</a>
//                   <a href="#" className="hover:text-gray-900">Politique de confidentialité</a>
//                 </div>
//               </div>
//             </footer>
//           );
//         };
        
//         export default Footer;
        