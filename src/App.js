import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Default imports
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Named imports
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';

function Home() {
  return (
    <main className="main-content">
      <ContentA />
      <ContentB />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
