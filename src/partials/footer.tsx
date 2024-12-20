import React from "react";

import {
  PageFooter,
  Text,
  useTheme,
} from "@dannychambers/milton-web-components";

const Footer: React.FC = () => {
  const { color } = useTheme();

  return (
    <div style={{ background: color.brand4.value, padding: "15px 0" }}>
      <PageFooter>
        <Text appearance="body-3" color={color.brand31.value}>
          {new Date().getFullYear()} Design Technologist LTD.
        </Text>
      </PageFooter>
    </div>
  );
};

export default Footer;
