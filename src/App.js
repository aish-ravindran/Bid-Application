import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import AuctionGrid from './components/AuctionGrid/AuctionGrid';
import SignupForm from './pages/SignUp/SignupForm';
import LoginForm from './pages/Login/LoginForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auctions" element={<Landing />} />
        <Route path="/bidding" element={<AuctionGrid />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
