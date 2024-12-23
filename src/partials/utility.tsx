import React from "react";

import {
  Button,
  PrimaryUtility,
  breakpoint,
} from "@dannychambers/bateson-web-components";

import { useMediaQuery } from "../utilities/useMediaQuery.ts";

const Utility: React.FC = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.md.value})`);

  return (
    <PrimaryUtility>
      {isDesktop && (
        <Button tier="tertiary" layout={false} capitalize>
          EN
        </Button>
      )}

      <Button
        tier="tertiary"
        layout={false}
        capitalize
        url="call:+441326378129"
        icon="phone"
        iconPosition="before"
        {...(isDesktop ? { iconOnly: true } : {})}
        iconSize="sm"
      >
        Call us
      </Button>
      <Button
        tier="tertiary"
        layout={false}
        capitalize
        url="mailto:info@engineeredarts.com"
        icon="envelope"
        iconPosition="before"
        {...(isDesktop ? { iconOnly: true } : {})}
        iconSize="sm"
      >
        Email us
      </Button>
    </PrimaryUtility>
  );
};

export default Utility;
