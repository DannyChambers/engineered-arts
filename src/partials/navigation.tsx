import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Parse from "parse";
import {
  // Logo,
  Flyout,
  Layout,
  // Avatar,
  PrimaryNavigation,
  PrimaryNavigationItem,
  PrimarySubNavigation,
  PrimarySubNavigationItem,
  ButtonGroup,
  Button,
  useTheme,
} from "@dannychambers/milton-web-components";

const Navigation: React.FC = () => {
  const { color } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Flyout
        position="right"
        flyoutTitle="Menu"
        backgroundColor={color.brand1.value}
        loadOpen
      >
        <Layout bottomGutter="xl">
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
        </Layout>
      </Flyout>
    </>
  );
};

export default Navigation;
