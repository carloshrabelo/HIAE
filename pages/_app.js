import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Head from "next/head";

import Layout from "layout";
import withReduxStore from "lib/with-redux-store";

const App = ({ Component, pageProps, reduxStore }) => (
  <>
    <Head>
      <title>WIP</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={reduxStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>
);

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  reduxStore: PropTypes.any,
};

export default withReduxStore(App);
