import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ShekharCrafts | Portfolio',
  description: 'Portfolio showcasing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}