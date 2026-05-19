import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { getMeta } from '@/data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const meta = getMeta();

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.siteTitle,
    description: meta.description,
    images: [{ url: meta.ogImage }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-[#030303] text-[#f0f0f0] antialiased">
        {children}
      </body>
    </html>
  );
}
