import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import SplashScreen from './SplashScreen';

const Home = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setSplash(false);
    }, 3000);
  });

  if (splash) {
    return <SplashScreen />;
  }

  return (
    <Animated animationIn="fadeIn" animationInDuration={1500}>
      <Header />
      <Menu />
      <Footer />
    </Animated>
  );
};


export default Home;
