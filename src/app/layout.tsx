import './(pages)/_globals/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haylie Tan',
  description: 'Personal Website',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
