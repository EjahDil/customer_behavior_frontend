import React, { useState } from 'react';
import axios from 'axios';

interface TransactionFormData {
  client: string;
  transactionDate: string;
  productCategory: string;
  product: string;
  amount: number;
  phone: string;
  store: string;
}

const TransactionForm: React.FC = () => {
  const [formData, setFormData] = useState<TransactionFormData>({
    client: '',
    transactionDate: '',
    productCategory: '',
    product: '',
    amount: 0,
    phone: '',
    store: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/v1/form_input', formData);
      console.log('Form data submitted successfully!');
      setFormData({
        client: '',
        transactionDate: '',
        productCategory: '',
        product: '',
        amount: 0,
        phone: '',
        store: '',
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cbt-gray">
        <div className="mb-5 mt-5">
            <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-2">
                <a href="#" className="text-cbt-primary text-xl font-bold">
                    CBT
                </a>
                {/* <button className="text-cbt-secondary hover:text-cbt-primary transition-colors duration-300">
                    <i className="fas fa-arrow-left"></i>
                </button> */}
                </div>
                <h2 className="text-cbt-secondary text-xl font-bold mb-2">
                Saisie de Transaction
                </h2>
                <p className="text-cbt-secondary mb-2">Enregistrement des données de vente</p>
                <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                    <label htmlFor="client" className="block text-cbt-secondary font-medium mb-1">
                    ID Client
                    </label>
                    <input
                    type="text"
                    id="client"
                    value={formData.client}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
                    placeholder="Espace réservé"
                    />
                </div>
                <div>
                    <label htmlFor="transactionDate" className="block text-cbt-secondary font-medium mb-1">
                    Date de Transaction
                    </label>
                    <input
                    type="date"
                    id="transactionDate"
                    value={formData.transactionDate}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
                    />
                </div>
                <div>
                    <label htmlFor="productCategory" className="block text-cbt-secondary font-medium mb-1">
                    Category du Produit
                    </label>
                    <input
                    type="text"
                    id="productCategory"
                    value={formData.productCategory}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
                    placeholder="Espace réservé"
                    />
                </div>
                <div>
                    <label htmlFor="product" className="block text-cbt-secondary font-medium mb-1">
                    Produit
                    </label>
                    <input
                    type="text"
                    id="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
                    placeholder="Espace réservé"
                    />
                </div>
                <div>
                    <label htmlFor="amount" className="block text-cbt-secondary font-medium mb-1">
                    Montant Dépensé
                    </label>
                    <input
                    type="number"
                    id="amount"
                    value={formData.amount.toString()}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
                    placeholder="Espace réservé"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-cbt-secondary font-medium mb-1">
                    Téléphone
                    </label>
                    <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
                    placeholder="Espace réservé"
                    />
                </div>
                <div>
                    <label htmlFor="store" className="block text-cbt-secondary font-medium mb-1">
                    Magasin
                    </label>
                    <input
                    type="text"
                    id="store"
                    value={formData.store}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
                    placeholder="Espace réservé"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-cbt-primary text-cbt-gray py-1 px-2 rounded-md hover:bg-cbt-secondary transition-colors duration-300"
                >
                    Envoyer
                </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default TransactionForm;
