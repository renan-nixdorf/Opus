import React from 'react';

export const Context = React.createContext();

export const GlobalContext = ({ children }) => {
  const [state, setState] = React.useState(() => {
    const value = localStorage.getItem('theme');
    return value !== null ? value : 'light';
  });

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem('theme', state);
  });

  React.useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        'https://my-json-server.typicode.com/renan-nixdorf/fakeAPI/monuments',
      );
      const json = await response.json();
      setData(json);
    }
    fetchAPI();
  }, []);

  return (
    <Context.Provider value={{ state, setState, data }}>
      {children}
    </Context.Provider>
  );
};
