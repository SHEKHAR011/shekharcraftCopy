'use client';

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {children}
    </main>
  );
};

export default Layout;