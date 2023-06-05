import './globals.css';
import { Martel } from 'next/font/google';

const inter = Martel({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
