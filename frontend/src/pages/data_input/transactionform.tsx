import React, { useState } from 'react';
import Footer from '../../components/footer';
import LogoSteal from '../../assets/images/logo-steal.png'

const TransactionForm: React.FC = () => {
  const [clientId, setClientId] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [store, setStore] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4">
        <img src={LogoSteal} alt="CBT Logo" className="h-8 mx-auto" />
      </header>

      {/* Horizontal line */}
      <hr className="border-t border-gray-200 p-4 mx-8" />

      {/* Title and Return button */}
      <div className="container mx-auto px-4 py-6 flex items-center">
        <button className="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-center flex-grow">Saisie de Transaction</h1>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-8">Enregistrement des données de vente</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="container mx-auto px-4 max-w-md">
        <div className="space-y-4">
          <div>
            <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">ID client</label>
            <input
              type="text"
              id="clientId"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Espace réservé"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="transactionDate" className="block text-sm font-medium text-gray-700">Date de Transaction</label>
            <input
              type="date"
              id="transactionDate"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Catégorie de Produit</label>
            <select
              id="productCategory"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">Sélectionneur</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">Produit</label>
            <input
              type="text"
              id="product"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Savon"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Montant Dépensé</label>
            <input
              type="text"
              id="amount"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="5 000 000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +237
              </span>
              <input
                type="tel"
                id="phone"
                className="flex-1 block w-full rounded-none rounded-r-md border border-gray-300 p-2"
                placeholder="(671) 555-0110"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="store" className="block text-sm font-medium text-gray-700">Nom du Magasin</label>
            <select
              id="store"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={store}
              onChange={(e) => setStore(e.target.value)}
            >
              <option value="">Carrefour Marché</option>
              {/* Add more options here */}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition duration-200"
          >
            Envoyer
          </button>
        </div>
      </form>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default TransactionForm;