import Footer from './Footer';
import Hero from './Hero';
import Host from './Host';
import Layout from '../components/common/Layout';
import Location from './Location';
import Navbar from '../components/common/Navbar';
import React from 'react';
import styled from 'styled-components';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Hero />
    <Location />
    <Host />
    <Footer />
  </Layout >
);

export default IndexPage;
