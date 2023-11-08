// layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './providers/ToasterProvider';
import RegisterModal from './components/modals/RegisterModal';
import ReactQueryProvider from './providers/ReactQueryProvider';
import LoginModal from './components/modals/LoginModal';
import { UserProvider } from './providers/UserContext'
const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hotels&Co',
  description: 'Hotels and rooms app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <UserProvider> {/* Wrap with UserProvider */}
          <ReactQueryProvider>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <Navbar />
            <div className="pb-20 pt-28">{children}</div>
          </ReactQueryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
