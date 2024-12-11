
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Layout = () => {
  return (
    <div className="f">
      <Navbar />
        <main className="p-6">
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
