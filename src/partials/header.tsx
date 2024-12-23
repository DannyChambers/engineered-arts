import React from "react";

import {
  PageHeader,
  Flyout,
  Logo,
  Button,
  breakpoint,
} from "@dannychambers/bateson-web-components";

import Navigation from "./navigation";
import Utility from "./utility";

import { useMediaQuery } from "../utilities/useMediaQuery.ts";

import LogoImage from "../assets/images/EA-logo-light.svg";

const Header: React.FC = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.md.value})`);

  return (
    <PageHeader>
      <Logo
        src={LogoImage}
        alt="Engineered Arts"
        url="/"
        tag="h1"
        size={(isDesktop && "lg") || "md"}
      />
      {!isDesktop && (
        <Button tier="tertiary" layout={false} capitalize>
          EN
        </Button>
      )}
      <Flyout position="right" flyoutTitle="Menu" loadOpen>
        <Navigation />
        <Utility />
      </Flyout>
    </PageHeader>
  );
};

export default Header;
