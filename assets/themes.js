import React from 'react';

export const themes = {
  light: {
      backgroundColor: "#fff",
      foregroundColor: "rgba(0,0,0,0.05)",
      color: 'black',
      secondaryColor: "#fbfbfb",
      borderColor: 'black',
  },
  dark:{
      backgroundColor: "#202225",
      foregroundColor: "#2F3136",
      color: "white",
      secondaryColor: "#fbfbfb",
      borderColor: 'white',
  }
};

export const ThemeContext = React.createContext(
  themes.dark,
);
