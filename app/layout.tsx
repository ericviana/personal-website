import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
