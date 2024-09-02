import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import QuoteBox from './Components/QuoteBox/QuoteBox'
import Books from './pages/Books/Books';
import BestQuotes from './Components/BestQuotes/BestQuotes';
import AboutRobert from './pages/AboutRobert/AboutRobert';
import AboutMe from './pages/AboutMe/AboutMe';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<QuoteBox />} />
          <Route path="/books" element={<Books />} />
          <Route path="/quotes" element={<BestQuotes />} />
          <Route path="/about" element={<AboutRobert />} />
          <Route path="/me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App