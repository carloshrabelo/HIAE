import React from "react";
import PropTypes from "prop-types";
import Layout from "layout";

import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>WIP</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

App.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };

export default App;
