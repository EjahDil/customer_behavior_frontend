import React, { useState, useEffect } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import arrowauth from './../assets/images/arrow-auth.png'
import logowhite from '../assets/images/logo-white.png'
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';


// TypeScript for the props or states if necessary
interface LoginProps { }

const Login: React.FC<LoginProps> = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState(false);
    const {login, error, isLoading, success} = useLogin()
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (success) {
            navigate('/admin/dashboard');
        }
    }, [success, navigate]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await login({email, password})

    if (success) {
        console.log('success');
        navigate('/admin/dashboard');
    }
    };

    return (
        <React.Fragment>
            <div className="min-h-screen flex items-center justify-center bg-cbt-auth-bg">
                {/* Left Section */}
                <div className="flex w-full md:w-1/2 bg-[url('./src/assets/images/bg-auth.png')] bg-cover bg-center h-screen relative">
                    <div className="absolute top-8 left-8">
                        {/* Logo at the top */}
                        <img
                            src={logowhite} // Placeholder for the logo
                            alt="CBT Logo"
                            className="h-12 mb-2"
                        />
                    </div>

                    <div className="absolute bottom-28 left-8 text-white">
                        {/* Access text */}
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
                    {/* Login Form Card */}
                    <div className="">
                    <img
                        src={arrowauth} // Replace with the actual arrow image
                        alt="Arrow"
                        className="hidden md:block"
                    />
                        <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
                            <h2 className="text-2xl font-semibold mb-6 text-center">
                                Connectez-vous d'abord à votre compte
                            </h2>

                            <form onSubmit={handleSubmit}>
                                {/* Email input */}
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
                                    />
                                </div>

                                {/* Password input with visibility toggle */}
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
                                    />
                                    {/* <FaEyeSlash className="absolute right-4 top-10 text-gray-500 cursor-pointer" /> */}
                                    {showPassword ? 
                                        <FaEyeSlash className="absolute right-4 top-10 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} /> :
                                        <FaEye className="absolute right-4 top-10 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                                    }
                                </div>

                                {/* Remember me */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="h-4 w-4 text-cbt-primary focus:ring-cbt-primary  border-gray-300 rounded"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                        <label htmlFor="remember" className="ml-2 text-sm text-gray-900">
                                            Souviens-toi de moi
                                        </label>
                                    </div>

                                    <a href="/reset-password" className="text-sm text-cbt-primary hover:underline">
                                        Mot de passe oublié
                                    </a>
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className={`w-full text-white py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2
                                        ${isLoading ? 'bg-cbt-secondary cursor-not-allowed' : 'bg-cbt-primary hover:bg-cbt-secondary'}`}
                                    disabled={!!isLoading}
                                    // className="w-full bg-cbt-primary text-white py-3 rounded-md shadow-sm hover:bg-cbt-secondary focus:outline-none focus:ring-2 focus:ring-offset-2"
                                >
                                    {/* Se connecter */}
                                    {/* {isLoading ? 'Loading...' : 'Se connecter'} */}
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mx-auto"></div>
                                    ) : (
                                        'Se connecter'
                                    )}
                                </button>
                                {error && <div className="my-2 text-sm text-red-600 border border-red-500 rounded p-2 bg-red-100">{error}</div>}
                                {/* Signup link */}
                                <p className="text-sm text-center mt-4">
                                    Vous n'avez pas de compte ?{' '}
                                    <a href="/register" className="text-cbt-primary hover:underline">
                                        Inscrivez-vous ici
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

export default Login;
