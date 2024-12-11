
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Appbar from '../components/appbar';

const Layout = () => {
  const localStorageUser = JSON.parse(localStorage.getItem('user') || 'null');

  if (!localStorageUser)  {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Appbar />
        <main className="p-6">
          <Outlet />
          {/* <h1>layout</h1> */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
