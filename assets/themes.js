import React from 'react';

export const themes = {
  light: {
      backgroundColor: "#fff",
      foregroundColor: "rgba(0,0,0,0.05)",
      color: 'black',
      secondaryColor: "black",
      secondaryFadedColor: "rgba(0,0,0,0.3)",
      borderColor: 'black',
      red: "#f34541",
      placeholderTextColor: "rgba(0,0,0,0.3)"
  },
  dark:{
      backgroundColor: "#202225",
      foregroundColor: "#2F3136",
      color: "white",
      secondaryColor: "#fbfbfb",
      secondaryFadedColor: "rgba(255,255,255,0.2)",
      borderColor: 'white',
      red: "#f34541",
      placeholderTextColor: "rgba(255,255,255,0.3)"
  }
};

export const ThemeContext = React.createContext(
  themes.dark,
);
