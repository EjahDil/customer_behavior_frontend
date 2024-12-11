import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        confirmEmail: '',
        phone: '',
        language: 'English',
    });

    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDeleteConfirmation = () => {
        setConfirmDelete(!confirmDelete);
    };

    return (
        <div className="min-h-screen p-6 bg-white">
            <h1 className="text-2xl font-bold mb-6">Paramètres du compte</h1>

            {/* Basic Info */}
            <div className="bg-white p-6 rounded-lg border mb-6 border">
                <h2 className="text-lg font-semibold mb-4">Informations de base</h2>
                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Prénom</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleInputChange} 
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                                placeholder="Entrez votre prénom"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nom</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleInputChange} 
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                                placeholder="Entrez votre nom"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Genre</label>
                            <select 
                                name="gender" 
                                value={formData.gender} 
                                onChange={handleInputChange} 
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option value="">Sélectionnez le genre</option>
                                <option value="male">Homme</option>
                                <option value="female">Femme</option>
                                <option value="other">Autre</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                            <input 
                                type="text" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleInputChange} 
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                                placeholder="Entrez votre numéro de téléphone"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Langue</label>
                            <select 
                                name="language" 
                                value={formData.language} 
                                onChange={handleInputChange} 
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option value="English">Anglais</option>
                                <option value="French">Français</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                                placeholder="Entrez votre email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirmer l'email</label>
                            <input 
                                type="email" 
                                name="confirmEmail" 
                                value={formData.confirmEmail} 
                                onChange={handleInputChange} 
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                                placeholder="Confirmez votre email"
                            />
                        </div>
                    </div>
                </form>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-white p-6 rounded-lg border mb-6 border">
                <h2 className="text-lg font-semibold mb-4">Authentification à deux facteurs</h2>
                <label className="inline-flex items-center">
                    <input 
                        type="checkbox" 
                        checked={twoFactorAuth} 
                        onChange={() => setTwoFactorAuth(!twoFactorAuth)} 
                        className="form-checkbox h-5 w-5 text-indigo-600" 
                    />
                    <span className="ml-2 text-sm text-gray-700">Activer l'authentification à deux facteurs</span>
                </label>
            </div>

            {/* Notifications */}
            <div className="bg-white p-6 rounded-lg border mb-6 border">
                <h2 className="text-lg font-semibold mb-4">Notifications</h2>
                <label className="inline-flex items-center">
                    <input 
                        type="checkbox" 
                        checked={notifications} 
                        onChange={() => setNotifications(!notifications)} 
                        className="form-checkbox h-5 w-5 text-indigo-600" 
                    />
                    <span className="ml-2 text-sm text-gray-700">Recevoir des notifications</span>
                </label>
            </div>

            {/* Delete Account */}
            <div className="bg-white p-6 rounded-lg border mb-6 border">
                <h2 className="text-lg font-semibold mb-4">Supprimer le compte</h2>
                <div className="flex items-center mb-4">
                    <input 
                        type="radio" 
                        checked={confirmDelete} 
                        onChange={handleDeleteConfirmation} 
                        className="form-radio h-5 w-5 text-red-600" 
                    />
                    <span className="ml-2 text-sm text-gray-700">Je comprends que cette action est irréversible</span>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                        Désactiver le compte
                    </button>
                    <button 
                        disabled={!confirmDelete} 
                        className={`px-4 py-2 rounded ${confirmDelete ? 'bg-red-500 hover:bg-red-600' : 'bg-red-300'}`}>
                        Supprimer le compte
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
