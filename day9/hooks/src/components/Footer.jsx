import React,{useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);
  return (
    <footer
      className="footer"
      style={{ backgroundColor: isDark ? "black" : "lightgrey" }}
    >
      <button className="button" onClick={() => setIsDark(!isDark)}>
        Toggle {isDark ? "Light" : "Dark"} Mode
      </button>
    </footer>
  );
};

export default Footer;