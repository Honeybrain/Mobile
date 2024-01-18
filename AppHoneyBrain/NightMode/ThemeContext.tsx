import React, { createContext, useState, ReactNode } from 'react';
import useNightMode from '../hooks/useNightMode';

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {}
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { isNightMode, toggleNightMode } = useNightMode();


  return (
    <ThemeContext.Provider value={{ isDarkMode: isNightMode, toggleTheme: toggleNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};


