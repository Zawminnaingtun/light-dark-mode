import React from "react";
import ThemeProvider from "../features/theme/components/ThemeProvider";
import "../index.css";

const ThemeLayout = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme-preference">
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
