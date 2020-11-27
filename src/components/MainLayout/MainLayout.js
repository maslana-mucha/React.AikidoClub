import React from 'react';
import Header from '../Header/Header';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default MainLayout;
