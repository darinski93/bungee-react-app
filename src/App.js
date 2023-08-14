import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;