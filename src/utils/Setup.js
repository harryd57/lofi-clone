import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

// Pages
import Homepage from '../pages/Homepage';


const Setup = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default Setup