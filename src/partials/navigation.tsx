import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  Flyout,
  Layout,
  PrimaryNavigation,
  PrimaryNavigationItem,
  PrimarySubNavigation,
  PrimarySubNavigationItem,
  useTheme,
} from "@dannychambers/bateson-web-components";

const Navigation: React.FC = () => {
  const { color } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Flyout position="right" flyoutTitle="Menu" loadOpen>
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
      </Flyout>
    </>
  );
};

export default Navigation;
