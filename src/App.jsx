import { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  )
}

export default App;
