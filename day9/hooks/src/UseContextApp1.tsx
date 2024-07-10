import React, { useState, useEffect } from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function UseContextApp1() {
  const [isDark, setIsDark] = useState(false);
  const [userIP, setUserIP] = useState("Loading IP...");
  const [userCountry, setCountry] = useState(" Country...");
  const [userCity, setCity] = useState(" City...");

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("https://ipwhois.app/json/");
        const data = await response.json();
        setUserIP(data.ip);
        setCountry(data.country_code);
        setCity(data.city);
      } catch (error) {
        console.error("Error fetching IP:", error);
        setUserIP("Failed to load IP");
        setCountry("Failed to load Country");
        setCity("Failed to load City");
      }
    };

    fetchIP();
  }, []);

  return (
    <UserContext.Provider value={[userIP, userCity, userCountry ]}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
export default UseContextApp1;
