import React, { Fragment, useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';

import Header from '../../components/home/Header';
import Menu from '../../components/home/Menu';
import Footer from '../../components/home/Footer';
import SplashScreen from '../../components/home/SplashScreen';
import AddCompanyDataWindow from './menus/AddCompanyDataWindow';

const Home = () => {
  const [splash, setSplash] = useState(true);
  const [showAddCompanyDataWindow, setShowAddCompanyDataWindow] = useState(false);

  const handleClickMenu = (menu) => {
    switch (menu) {
      case 'AddCompanyData':
        setShowAddCompanyDataWindow(true);
        break;
      default:
    }
  };

  const handleCloseWindow = (window) => {
    switch (window) {
      case 'AddCompanyDataWindow':
        setShowAddCompanyDataWindow(false);
        break;
      default:
    }
  };

  // Side-effect similar as componentDidMount
  useEffect(() => {
    setInterval(() => {
      setSplash(false);
    }, 3000);
  });

  // Conditional rendering
  if (splash) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <Animated animationIn="fadeIn" animationInDuration={1500}>
        <Header />
        <Menu handleClick={handleClickMenu} />
        <Footer />
      </Animated>

      <AddCompanyDataWindow
        isOpen={showAddCompanyDataWindow}
        onCloseWindow={handleCloseWindow}
      />
    </Fragment>
  );
};


export default Home;
