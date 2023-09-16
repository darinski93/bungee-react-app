import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from "./layout/Footer/Footer";
import { Header } from "./layout/Header/Header";
import { Gallery } from "./components/Gallery/Gallery";
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Pictures } from './components/Pictures/Pictures';
import { Menu } from './components/Menu/Menu';
import { Home } from './components/Home/Home';
import { NotFound } from './components/404/NotFound';

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/gallery/:category' element={<Pictures />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isHomePage && <Footer />}
    </>
  );
}

export default App;
