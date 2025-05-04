import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'Secure Chat Application',
  description: 'A secure chat application with NextAuth.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
} 