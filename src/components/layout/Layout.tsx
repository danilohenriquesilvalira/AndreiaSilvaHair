// components/layout/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollIndicator from '../ui/ScrollIndicator';
import SideNavigation from '../ui/SideNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollIndicator />
      <SideNavigation />
      <main className="pt-[72px]"> {/* Adiciona espaço para o header fixo */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;