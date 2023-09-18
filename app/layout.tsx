import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daily Dose of News: Stay Informed, Stay Updated',
  description:
    'Welcome to your one-stop destination for the latest news from around the world. Our mission is to keep you informed and updated on the day’s top stories. Dive into our news feed and start exploring now!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=''>
        <GoogleAnalytics
          GA_TRACKING_ID={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
