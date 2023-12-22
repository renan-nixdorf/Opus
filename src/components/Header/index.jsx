import React, { useContext } from 'react';
import { Conatiner } from './style';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';

const Header = () => {
  const { state, setState } = React.useContext(Context);
  function switchTheme() {
    setState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }
  return (
    <Conatiner>
      <Link to="/">
        <span>Opus</span>
      </Link>
      <button onClick={switchTheme}>{state === 'dark' ? '☀️' : '🌑'}</button>
    </Conatiner>
  );
};

export default Header;
