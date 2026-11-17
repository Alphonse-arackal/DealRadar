import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar/TopBar.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
