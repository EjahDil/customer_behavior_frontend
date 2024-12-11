// // import React from 'react';
import Footer from '../../components/footer';

// const TransactionEntryPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-50">
//       {/* Header */}
//       <header className="flex justify-center py-6 bg-white">
//         <img
//           src="https://via.placeholder.com/100x50"
//           alt="CBT Logo"
//           className="h-12"
//         />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex flex-col items-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-black">Saisie de Transaction</h1>
//           <p className="text-gray-600 mt-2">Enregistrement des données de vente</p>
//         </div>

        // <form className="bg-white p-8 shadow-md rounded-lg mt-8 w-full max-w-md">
        //   {/* Client ID */}
        //   <div className="mb-4">
        //     <label className="block text-gray-700 mb-1">ID client</label>
        //     <input
        //       type="text"
        //       placeholder="Espace réservé"
        //       className="w-full border border-gray-300 rounded px-3 py-2"
        //     />
        //   </div>

        //   {/* Transaction Date */}
        //   <div className="mb-4">
        //     <label className="block text-gray-700 mb-1">Date de Transaction</label>
        //     <input
        //       type="date"
        //       className="w-full border border-gray-300 rounded px-3 py-2"
        //     />
        //   </div>

        //   {/* Product Category */}
        //   <div className="mb-4">
        //     <label className="block text-gray-700 mb-1">Catégorie de Produit</label>
        //     <select className="w-full border border-gray-300 rounded px-3 py-2">
        //       <option>Sélectionneur</option>
        //     </select>
        //   </div>

        //   {/* Product Name */}
        //   <div className="mb-4">
        //     <label className="block text-gray-700 mb-1">Produit</label>
        //     <input
        //       type="text"
        //       placeholder="Savon"
        //       className="w-full border border-gray-300 rounded px-3 py-2"
        //     />
        //   </div>

        //   {/* Amount Spent */}
        //   <div className="mb-4">
        //     <label className="block text-gray-700 mb-1">Montant Dépensé</label>
        //     <input
        //       type="number"
        //       placeholder="5 000 000"
        //       className="w-full border border-gray-300 rounded px-3 py-2"
        //     />
        //   </div>

        //   {/* Phone Number */}
        //   <div className="mb-4">
        //     <label className="block text-gray-700 mb-1">Téléphone</label>
        //     <div className="flex">
        //       <select className="border border-gray-300 rounded-l px-3 py-2">
        //         <option value="+237">+237</option>
        //       </select>
        //       <input
        //         type="tel"
        //         placeholder="(671) 555-0110"
        //         className="flex-grow border border-l-0 border-gray-300 rounded-r px-3 py-2"
        //       />
        //     </div>
        //   </div>

        //   {/* Store Name */}
        //   <div className="mb-4">
        //     <label className="block text-gray-700 mb-1">Nom du Magasin</label>
        //     <select className="w-full border border-gray-300 rounded px-3 py-2">
        //       <option>Carrefour Marché</option>
        //     </select>
        //   </div>

        //   {/* Submit Button */}
        //   <button
        //     type="submit"
        //     className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        //   >
        //     Envoyer
        //   </button>
        // </form>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default TransactionEntryPage;


import { FaArrowLeft } from 'react-icons/fa'; // Importing the back arrow icon

const TransactionEntryPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white-50">
      {/* Header */}
      <header className="flex justify-center py-6 bg-white">
        <img
          src="https://via.placeholder.com/100x50"
          alt="CBT Logo"
          className="h-12"
        />
      </header>
      <hr className="vontainer border-cbt-secondary opacity-50" />

      {/* below */}
      <div className='container'>
        <div className="flex items-center w-full max-w-md mb-4">
            {/* Return Button */}
            <button
                onClick={() => window.history.back()} // Go back on click
                className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-2 mr-4"
            >
                <FaArrowLeft className="w-5 h-5" />
            </button>

            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-black">Saisie de Transaction</h1>
                <p className="text-gray-600 mt-2">Enregistrement des données de vente</p>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center mb-5">
        {/* up! */}

        <form className="bg-white p-8 rounded-lg w-full max-w-md">
          {/* Client ID */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">ID client</label>
            <input
              type="text"
              placeholder="Espace réservé"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Transaction Date */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Date de Transaction</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Product Category */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Catégorie de Produit</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option>Sélectionneur</option>
            </select>
          </div>

          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Produit</label>
            <input
              type="text"
              placeholder="Savon"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Amount Spent */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Montant Dépensé</label>
            <input
              type="number"
              placeholder="5 000 000"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Téléphone</label>
            <div className="flex">
              <select className="border border-gray-300 rounded-l px-3 py-2">
                <option value="+237">+237</option>
              </select>
              <input
                type="tel"
                placeholder="(671) 555-0110"
                className="flex-grow border border-l-0 border-gray-300 rounded-r px-3 py-2"
              />
            </div>
          </div>

          {/* Store Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Nom du Magasin</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option>Carrefour Marché</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cbt-primary text-white rounded px-4 py-2  hover:bg-cbt-secondary transition-colors duration-300"
          >
            Envoyer
          </button>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TransactionEntryPage;
