import React from 'react';

const themes = {
  dark: {
    background: '#333333',
    color: '#ffffff'
  },
  light: {
    background: '#fafafa',
    color: '#111111'
  }
};

const ThemeContext = React.createContext(themes.dark);

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
