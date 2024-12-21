import React from "react";

import {
  PageHeader,
  Logo,
  breakpoint,
} from "@dannychambers/bateson-web-components";

import Navigation from "./navigation";

import { useMediaQuery } from "../utilities/useMediaQuery.ts";

import LogoImage from "../assets/images/EA-logo-light.svg";

const Header: React.FC = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.sm.value})`);

  return (
    <PageHeader>
      <Logo
        src={LogoImage}
        alt="Engineered Arts"
        url="/"
        tag="h1"
        size={(isDesktop && "lg") || "md"}
      />
      <Navigation />
    </PageHeader>
  );
};

export default Header;
