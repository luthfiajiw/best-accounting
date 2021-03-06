import React, { Fragment, useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';

import Header from '../../components/home/Header';
import Menu from '../../components/home/Menu';
import Footer from '../../components/home/Footer';
import SplashScreen from '../../components/home/SplashScreen';
import AddCompanyDataWindow from './menus/AddCompanyDataWindow';
import LoginWindow from './login/LoginWindow';

const Home = () => {
  const [splash, setSplash] = useState(true);
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [showAddCompanyDataWindow, setShowAddCompanyDataWindow] = useState(false);

  // function handling
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
      case 'LoginWindow':
        setShowLoginWindow(false);
        break;
      default:
    }
  };
  const onOpenLoginWindow = () => {
    setShowLoginWindow(true);
    setShowAddCompanyDataWindow(false);
  };

  // Side-effect similar to componentDidMount
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
        onNextLogin={onOpenLoginWindow}
      />

      <LoginWindow
        isOpen={showLoginWindow}
        onCloseWindow={handleCloseWindow}
      />
    </Fragment>
  );
};


export default Home;
