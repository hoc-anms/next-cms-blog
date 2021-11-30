import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google */}
        <title>VHP Blog</title>

      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
