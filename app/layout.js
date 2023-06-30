import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MOBWiKi',
  description: 'MOBWiKi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div className="lds-ripple">
          <div></div>
          <div></div>
        </div>}>
          <div className="flex flex-col items-center justify-between py-24 max-w-[2000px] mx-auto">
            <Header />
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  )
}
