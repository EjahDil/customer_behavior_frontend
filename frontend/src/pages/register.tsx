import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import arrowauth from './../assets/images/arrow-auth.png'
import logowhite from '../assets/images/logo-white.png'
import { useSignup } from '../hooks/useRegister';
import { useNavigate } from 'react-router-dom';

interface RegisterProps { }

const Register: React.FC<RegisterProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const { signup, isLoading, error: signupError } = useSignup();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            await signup({email, password});
            navigate('/login');
        } catch (err) {
            setError(signupError || 'Une erreur est survenue lors de l\'inscription.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <React.Fragment>
            <div className="min-h-screen flex items-center justify-center bg-cbt-auth-bg">
                {/* Left Section */}
                <div className="flex w-full md:w-1/2 bg-[url('./src/assets/images/bg-auth.png')] bg-cover bg-center h-screen relative">
                    <div className="absolute top-8 left-8">
                        <img
                            src={logowhite}
                            alt="CBT Logo"
                            className="h-12 mb-2"
                        />
                    </div>

                    <div className="absolute bottom-28 left-8 text-white">
                        <h1 className="text-3xl font-bold ">Accédez à votre espace personnel</h1>
                        <p className="mt-4 me-2">
                            Connectez-vous pour gérer vos informations et profiter de nos services
                            personnalisés. Votre tableau de bord vous attend avec toutes les
                            données importantes à portée de main.
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex justify-center items-center relative">                   
                    <div className="">
                    <img
                        src={arrowauth}
                        alt="Arrow"
                        className="hidden md:block"
                    />
                        <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
                            <h2 className="text-2xl font-semibold mb-6 text-center">
                                Créez d'abord votre compte
                            </h2>

                            <form onSubmit={handleSubmit}>
                                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                                
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="votrenom@gmail.com"
                                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4 relative">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Mot de passe
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="********"
                                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    {showPassword ? 
                                        <FaEyeSlash className="absolute right-4 top-10 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} /> :
                                        <FaEye className="absolute right-4 top-10 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                                    }
                                </div>

                                <div className="mb-4 relative">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                        Confirmez le mot de passe
                                    </label>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        placeholder="********"
                                        className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    {showConfirmPassword ? 
                                        <FaEyeSlash className="absolute right-4 top-10 text-gray-500 cursor-pointer" onClick={toggleConfirmPasswordVisibility} /> :
                                        <FaEye className="absolute right-4 top-10 text-gray-500 cursor-pointer" onClick={toggleConfirmPasswordVisibility} />
                                    }
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-cbt-primary text-white py-3 rounded-md shadow-sm hover:bg-cbt-secondary focus:outline-none focus:ring-offset-2 focus:ring-cbt-primarys"
                                    disabled={!!isLoading}
                                >
                                    {isLoading ? 'Chargement...' : 'Créer un compte'}
                                </button>

                                <p className="text-sm text-center mt-4">
                                    Vous avez déjà un compte ?{' '}
                                    <a href="/login" className="text-cbt-primary hover:underline">
                                        Connectez-vous ici
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;
