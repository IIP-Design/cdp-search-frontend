import React from 'react';

import Nav from '../Nav';
import Header from '../Header';
import Search from '../Search';

const LandingPage = () => (
  <div>
    <header>
      <Nav />
      <Header />
      <Search />
    </header>
    <main>
      <section>LANDING PAGE</section>
    </main>
  </div>
);

export default LandingPage;