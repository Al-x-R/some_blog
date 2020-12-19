import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@material-ui/core';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#648dae' }}>
      <Container>
        <Toolbar className={classes.toolBar}>
          <IconButton edge='start' aria-label='menu' color='inherit' className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Box>
            <Button color="inherit" className={classes.menuButton}>Sign In</Button>
            <Button color="inherit" className={classes.menuButton}>Sign Up</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
