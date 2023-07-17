import '../src/assets/scss/reset.scss';
import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createWrapper } from 'next-redux-wrapper';
import { Store } from 'redux';

import { AppState } from '../src/core/store/store';
import configureStore from '../src/core/store/configureStore';
import GoogleTagManager from '../src/core/features/GoogleTagManager/GoogleTagManager';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <GoogleTagManager />
      <Component {...pageProps} />
    </>
  );
};

export const wrapper = createWrapper<Store<AppState>>(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

const WrappedApp = wrapper.withRedux(App);

export default WrappedApp;
