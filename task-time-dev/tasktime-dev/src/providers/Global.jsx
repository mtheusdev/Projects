import { useState, createContext, useContext, useEffect } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem('THEME_APPLICATION');
    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return dark;
  });

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };

  useEffect(() => {
    localStorage.setItem('THEME_APPLICATION', JSON.stringify(theme));
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const GlobalCtx = () => useContext(GlobalContext);
export default GlobalProvider;
