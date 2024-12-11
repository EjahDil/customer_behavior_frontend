import { Suspense, lazy } from 'react';
// import { Navigate } from 'react-router-dom';
// import { RouteObject } from 'react-router';
import SuspenseLoader from './components/loader';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Login from './pages/login';
import Register from './pages/register';
import Reset from './pages/reset';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import CSVEXCEL from './pages/data_input/csv-excel';
import Layout from './layout/adminLayout';
import TransactionForm from './pages/data_input/transactionform';
import ServerError from './pages/error/servererror';
import NotFound from './pages/error/notfound';
import NavigationWrapper from './components/navigationwrapper';
import ProtectedRoute from './protectedRouter';


const Analytics = lazy(() => import('./pages/analytics'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Clients = lazy(() => import('./pages/clients'));
const Calender = lazy(() => import('./pages/calender'));
const Products = lazy(() => import('./pages/products'));
const Profile = lazy(() => import('./pages/profile'));
const Settings = lazy(() => import('./pages/settings'));
const Delivery = lazy(() => import('./pages/delivery'));
const Messages = lazy(() => import('./pages/messages'));

const router = createBrowserRouter([
    {
        element: <NavigationWrapper />,
        children: [
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/reset-password',
                element: <Reset />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <Contact />
            },
            {
                path: '/data_entry',
                element: <TransactionForm />
            },
            {
                path: '/data_entry/csv_excel',
                element: <CSVEXCEL />
            },
            {
                path: '/server-error',
                element: <ServerError />
            },
        ]
    },
    {
        path: 'admin',
        element: <ProtectedRoute />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: 'dashboard',
                        element: ( 
                            <Suspense fallback={<SuspenseLoader />}>
                                <Dashboard />
                            </Suspense>
                        )
                    },
                    {
                        path: 'analytics',
                        element: (
                            <Suspense fallback={<SuspenseLoader />}>
                                <Analytics />
                            </Suspense>
                        )
                    },
                    {
                        path: 'clients',
                        element: (
                            <Suspense fallback={<SuspenseLoader />}>
                                <Clients />
                            </Suspense>
                        )
                    },
                    {
                        path: 'delivery',
                        element: (
                            <Suspense fallback={<SuspenseLoader />}>
                                <Delivery />
                            </Suspense>
                        )
                    },
                    {
                        path: 'products',
                        element: (
                            <Suspense fallback={<SuspenseLoader />}>
                                <Products />
                            </Suspense>
                        )
                    },
                    {
                        path: 'profile',
                        element: (
                            <Suspense fallback={<SuspenseLoader />}>
                                <Profile />
                            </Suspense>
                        )
                    },
                    {
                        path: 'settings',
                        element: (
                            <Suspense fallback={<SuspenseLoader />}>
                                <Settings />
                            </Suspense>
                        )
                    },
                    {
                        path: 'calendar',
                        element: (
                            <Suspense fallback={<SuspenseLoader />}>
                                <Calender />
                            </Suspense>
                        )
                    },
                    {
                        path: 'messages',
                        element: (
                            <Suspense fallback={<SuspenseLoader />}>
                                <Messages />
                            </Suspense>
                        )
                    },
                ]
            }
        ]
    }
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
