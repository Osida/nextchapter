import React from 'react';
import { Navbar, Footer } from '../components';
import { SellBookForm } from '../components/forms/SellBookForm';

export const Sell = () => {
  return (
    <div className="sell" style={{ background: '#44318D' }}>
      <Navbar />
      <SellBookForm />
      <Footer />
    </div>
  );
};
