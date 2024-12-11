import React, {useState} from 'react';
import axios from 'axios';

interface DataInputFormData {
  client: string;
  article: string;
  quantity: number;
  price: number;
  total: number;
  paymentMethod: string;
  paymentDate: string;
}

const DataInputPage: React.FC = () => {

    const [formData, setFormData] = useState<DataInputFormData>({
        client: '',
        article: '',
        quantity: 0,
        price: 0,
        total: 0,
        paymentMethod: '',
        paymentDate: '',
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
          // Reset the form data after successful submission
          setFormData({
            client: '',
            article: '',
            quantity: 0,
            price: 0,
            total: 0,
            paymentMethod: '',
            paymentDate: '',
          });
        } catch (error) {
          console.error('Error submitting form data:', error);
        }
      };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cbt-gray">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <a href="#" className="text-cbt-primary text-2xl font-bold">
            CBT
          </a>
          <button className="text-cbt-secondary hover:text-cbt-primary transition-colors duration-300">
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>
        <h2 className="text-cbt-secondary text-2xl font-bold mb-4">
          Saisie de Transaction
        </h2>
        <p className="text-cbt-secondary mb-6">Enregistrement des données de vente</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="client" className="block text-cbt-secondary font-medium mb-1">
              ID client
            </label>
            <input
              type="text"
              id="client"
              className="w-full px-4 py-2 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
              placeholder="Espace réservé"
            />
          </div>
          <div>
            <label htmlFor="paymentDate" className="block text-cbt-secondary font-medium mb-1">
              Date de paiement
            </label>
            <input
              type="date"
              id="paymentDate"
              value={formData.paymentDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
            />
          </div>
          <div>
            <label htmlFor="article" className="block text-cbt-secondary font-medium mb-1">
              Article
            </label>
            <input
              type="text"
              id="article"
              value={formData.article}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
              placeholder="Espace réservé"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-cbt-secondary font-medium mb-1">
              Quantité
            </label>
            <input
              type="number"
              id="quantity"
              value={formData.quantity.toString()}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
              placeholder="Espace réservé"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-cbt-secondary font-medium mb-1">
              Prix
            </label>
            <input
              type="number"
              id="price"
              value={formData.price.toString()}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
              placeholder="Espace réservé"
            />
          </div>
          <div>
            <label htmlFor="total" className="block text-cbt-secondary font-medium mb-1">
              Total
            </label>
            <input
              type="number"
              id="total"
              value={formData.total.toString()}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
              placeholder="Espace réservé"
            />
          </div>
          <div>
            <label htmlFor="paymentMethod" className="block text-cbt-secondary font-medium mb-1">
              Mode de paiement
            </label>
            <select
              id="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-cbt-gray rounded-md focus:outline-none focus:ring-2 focus:ring-cbt-primary"
            >
              <option value="">Sélectionner un mode de paiement</option>
              <option value="cash">Cash</option>
              <option value="card">Carte</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-cbt-primary text-cbt-gray py-2 px-4 rounded-md hover:bg-cbt-secondary transition-colors duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataInputPage;