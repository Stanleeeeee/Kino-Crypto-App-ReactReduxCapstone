import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Coins from './components/coins/Coins';
import TopCoin from './components/coins/TopCoin';
import CoinsDetail from './components/coins/CoinsDetail';

function App() {
  return (
    <div>
      <>
        <Router>
          <Navigation />
          <TopCoin />
          <Routes>
            <Route path="/" element={<Coins />} />
            <Route path="/TopCoin" element={<TopCoin />} />
            <Route path="/coin-detail" element={<CoinsDetail />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
