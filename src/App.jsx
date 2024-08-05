import React, { createContext, useState } from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import "./App.css";

export const ThemeContext = createContext();
export const LanguageContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState('en');

  return (
    <div className="app container">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language,setLanguage}}>
          <Header />
          <Hero />
          <Footer />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
