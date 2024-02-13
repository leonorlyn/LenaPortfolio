import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WelcomeScreen from './components/WelcomeScreen';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#99CCCC',
    },
    secondary: {
      main: '#FFCC99',
    },
  },
});

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {showWelcomeScreen ? (
          <WelcomeScreen setShowWelcomeScreen={setShowWelcomeScreen} />
        ) : (
          <>
            <Navbar />
            <LandingPage />
            <Portfolio />
            <Contact />
          </>
        )}
      </div>
    // </ThemeProvider>
  );
}

export default App;
