import React from "react";
// import './Header.css';

const headerStyle = {
  minHeight: "60px",
  backgroundColor: "#000",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const titleStyle = {
  color: "#fff",
  textTransform: "uppercase",
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h2 style={titleStyle}>Shop Header</h2>
    </header>
  );
};

export default Header;
