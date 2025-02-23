

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; 
import Mechanical from './pages/mechanical'; 
import Electrical from './pages/electrical'; 
import Plumbing from './pages/plumbing'; 
import Trading from './pages/trading';
import Contact  from './pages/contact'; 
import Navbar from './components/navbar';
import Footer from './components/footer';
function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        {/* Define routes for each page */}
        <Route exact path="/" element={<Home/>} />
        <Route path="/mechanical" element={<Mechanical/>} />
        <Route path="/electrical" element={<Electrical/>} />
        <Route path="/plumbing" element={<Plumbing/>} />
        <Route path="/trading" element={<Trading/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
