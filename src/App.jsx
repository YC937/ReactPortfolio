import { Outlet } from 'react-router-dom';
import Nav from './components/navbar';
import Footer from './components/footer';

  export default function App() {
    return (
      <>
      <Nav />
      <Outlet />
      <Footer />
      </>
    );
  }
