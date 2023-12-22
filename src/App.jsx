import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Obra from './components/Obra';
import NotFound from './components/NotFound';
import { ThemeProvider } from 'styled-components';
import Global from './Global';
import Themeswitch from './Themeswitch';
import { Context } from './Context';

const App = () => {
  const { state } = React.useContext(Context);

  return (
    <ThemeProvider theme={Themeswitch[state]}>
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/obra/:id" element={<Obra />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
