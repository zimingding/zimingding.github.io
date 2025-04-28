// app/layout.tsx
import '@/styles/global.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Blog',
  description: 'Personal thoughts on programming',
};

export default function RootLayout({ children } : {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}