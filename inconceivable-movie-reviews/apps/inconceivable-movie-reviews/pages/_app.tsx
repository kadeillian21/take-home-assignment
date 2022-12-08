import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import "../styles/styles.css"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to inconceivable-movie-reviews!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
