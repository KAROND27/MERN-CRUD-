import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material';

const App = styled('p')`
  margin-right: 30px;
`;
const Nav = () => {
  return (
    <AppBar position='static' color='success'>
      <Toolbar>
        <App>Home</App>
        <App>Add User</App>
        <App>All User</App>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
