import React from "react";
import { NavbarBrand, Navbar } from "reactstrap";

const Navigation = () => (
  <Navbar expand="md" className="stick-nav">
    <NavbarBrand href="/">Home</NavbarBrand>
    <NavbarBrand href="/player">Player</NavbarBrand>

    <NavbarBrand href="/new">New Team</NavbarBrand>
    <NavbarBrand href="/detail/:id">Teams</NavbarBrand>
    <NavbarBrand href="/register">Register</NavbarBrand>

  </Navbar>
);

export default Navigation;
