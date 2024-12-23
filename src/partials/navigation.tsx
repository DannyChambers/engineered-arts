import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  PrimaryNavigation,
  PrimaryNavigationItem,
} from "@dannychambers/bateson-web-components";

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <PrimaryNavigation>
      <PrimaryNavigationItem active={isActive("/robots")}>
        <Link to="/">Robots</Link>
      </PrimaryNavigationItem>
      <PrimaryNavigationItem active={isActive("/software")}>
        <Link to="/">Software</Link>
      </PrimaryNavigationItem>
      <PrimaryNavigationItem active={isActive("/rentals")}>
        <Link to="/">Rentals</Link>
      </PrimaryNavigationItem>
      <PrimaryNavigationItem active={isActive("/more")}>
        <Link to="/">More</Link>
      </PrimaryNavigationItem>
      <PrimaryNavigationItem active={isActive("/gallery")}>
        <Link to="/">Gallery</Link>
      </PrimaryNavigationItem>
      <PrimaryNavigationItem active={isActive("/support")}>
        <Link to="/">Support</Link>
      </PrimaryNavigationItem>
    </PrimaryNavigation>
  );
};

export default Navigation;
