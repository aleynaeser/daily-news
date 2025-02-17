import type { Metadata } from 'next';
import { BackgroundGrid } from '@components/BackgroundGrid';
import { anonymousProFont } from '@fonts/anonymous-pro-font';
import { atariClassicFont } from '@fonts/attari-classic-font';
import Header from '@components/Header';
import * as motion from 'motion/react-client';

import '@styles/globals.scss';

export const metadata: Metadata = {
  title: 'Daily News',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const customFont = `${anonymousProFont.variable} ${atariClassicFont.variable}`;

  return (
    <html lang='en' className={customFont}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/assets/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/assets/favicons/safari-pinned-tab.svg' color='#f9f9f9' />
        <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#f9f9f9' />
        <meta name='msapplication-config' content='/assets/favicons/browserconfig.xml' />
        <meta name='theme-color' content='#f9f9f9' />
      </head>

      <motion.body
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`font-anonymousPro relative h-full bg-base text-sm text-primary`}
        transition={{ duration: 0.5, scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 } }}
      >
        <main
          className={`relative z-10 mx-auto my-10 h-full min-h-[calc(100vh-80px)] max-w-3xl border border-dark bg-base text-sm text-primary`}
        >
          <Header />
          {children}
        </main>

        <BackgroundGrid />
      </motion.body>
    </html>
  );
}
