// app/layout.tsx
import './globals.css'; // Import global CSS if you have any
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

// Optional: Use a Google Font (e.g., Inter) via Next.js font optimization
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Kalyans Portfolio',
  description: 'A modern web application built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* You can include other <head> elements like favicons, custom fonts, etc. */}
      </head>
      <body className={`${inter.variable} font-sans bg-gray-100`}>
        {/* Global layout wrapper */}
        <header className="p-4 bg-blue-500 text-white">
          <h1 className="text-3xl"></h1>
        </header>
        <main className="min-h-screen">
          {children} {/* This will render page-specific content */}
        </main>
    
      </body>
    </html>
  );
}
