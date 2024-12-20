import React, { useState } from "react";

import {
  PageHeader,
  Logo,
  PageSection,
  Layout,
  Text,
  breakpoint,
  useTheme,
} from "@dannychambers/milton-web-components";

import Navigation from "../../partials/navigation";

// import { useMediaQuery } from "../../utilities/useMediaQuery.ts";

/* -- Content -- */

// import Video1 from "../../assets/videos/video-1.mp4";
// import JBChaykowski from "../../assets/images/testimonials/J.B.Chaykowski.jpeg";

const Home: React.FC = () => {
  const { color } = useTheme();
  // const isDesktop = useMediaQuery(`(min-width: ${breakpoint.sm.value})`);
  // const isLargeDesktop = useMediaQuery(`(min-width: ${breakpoint.lg.value})`);

  return (
    <Layout wrapper>
      <PageHeader>
        <Logo />
        <Navigation />
      </PageHeader>
      <PageSection>
        <Layout container>
          <Layout bottomGutter="xl">
            <div className="visually-hidden">
              <Text tag="h1">Engineered Arts</Text>
            </div>
          </Layout>
        </Layout>
      </PageSection>

      <PageSection backgroundColor={color.brand10.value}>
        <Layout container>
          <Text tag="h2" appearance="heading-1">
            State-of-the-art wonder
          </Text>
          <Text appearance="body-1">
            Need to draw a crowd? Want more footfall? Our hyper-advanced robots
            inspire awe wherever they are across the globe.
          </Text>
        </Layout>
      </PageSection>
    </Layout>
  );
};

export default Home;
