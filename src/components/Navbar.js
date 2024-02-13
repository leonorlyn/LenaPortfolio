import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <ScrollLink to="landing-page" spy={true} smooth={true} offset={-70} duration={500}>
          <Button color="inherit">Home</Button>
        </ScrollLink>
        <ScrollLink to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
          <Button color="inherit">Portfolio</Button>
        </ScrollLink>
        <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <Button color="inherit">Contact</Button>
        </ScrollLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
