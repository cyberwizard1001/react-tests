import { AppBar, Toolbar } from "@mui/material";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>yellowClub</Toolbar>;
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}