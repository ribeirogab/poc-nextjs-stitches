import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { darkTheme, GlobalStyles } from '../stitches.config';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
