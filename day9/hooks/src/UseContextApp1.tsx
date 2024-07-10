import React, { useState, useEffect  } from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";


function UseContextApp1() {
  const [isDark, setIsDark] = useState(false);
  const [userIP, setUserIP] = useState("Loading IP...");

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        console.error('Error fetching IP:', error);
        setUserIP('Failed to load IP');
      }
    };

    fetchIP();
  }, []);

  return (
    <UserContext.Provider value={userIP}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
export default UseContextApp1;
