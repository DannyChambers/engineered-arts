import React from "react";

import {
  PageSection,
  Layout,
  Text,
  Image,
  ButtonGroup,
  Button,
  useTheme,
  breakpoint,
} from "@dannychambers/bateson-web-components";

import Header from "../../partials/header";
import Footer from "../../partials/footer";

import HeroVideo from "../../assets/videos/Website-Loop.mp4";
import Ameca from "../../assets/images/Ameca.png";
import Thoth from "../../assets/images/Thoth.png";
import AmecaDesktop from "../../assets/images/AmecaDesktop.png";
import AziDesktop from "../../assets/images/AziDesktop.png";
import Robothespian from "../../assets/images/Robothespian.jpg";

import AmecaProductLogo from "../../assets/images/Ameca-product-logo.svg";
import MesmerProductLogo from "../../assets/images/Mesmer-product-logo.svg";
import AmecaDesktopProductLogo from "../../assets/images/Ameca-desktop-product-logo.svg";
import AziDesktopProductLogo from "../../assets/images/Azi-desktop-product-logo.svg";
import RobothespianProductLogo from "../../assets/images/Robothespian-product-logo.svg";

import { useMediaQuery } from "../../utilities/useMediaQuery.ts";

const Home: React.FC = () => {
  const { color } = useTheme();
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.sm.value})`);

  return (
    <Layout wrapper>
      {/* -- Header -- */}
      <Header />
      {/* -- End Header -- */}

      {/* -- Hero -- */}
      <PageSection backgroundVideo={HeroVideo} screen="half">
        <Layout container>
          <Layout grid="60_40" stack="md">
            <Layout.Column>
              <Text
                tag="h2"
                appearance={(isDesktop && "heading-1") || "heading-3"}
                color={color.brand4.value}
              >
                State-of-the-art wonder
              </Text>
              <Text appearance="body-1" color={color.brand4.value}>
                Need to draw a crowd? Want more footfall? Our hyper-advanced
                robots inspire awe wherever they are across the globe.
              </Text>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      {/* -- End Hero -- */}

      {/* -- Ameca -- */}
      <PageSection
        backgroundColor={color.brand7.value}
        {...(isDesktop ? { backgroundImage: Ameca } : {})}
        backgroundImagePosition="bottomRight"
        screen="half"
      >
        <Layout container>
          <Layout
            grid="40_60"
            {...(isDesktop ? { gap: "xl" } : { gap: "sm" })}
            stack="md"
            {...(isDesktop ? { contentReverse: true } : {})}
          >
            <Layout.Column>
              {!isDesktop && (
                <div style={{ width: "200px", margin: "0 auto" }}>
                  <Image src={Ameca} alt="Ameca" fluid />
                </div>
              )}
              {isDesktop && <>&nbsp;</>}
            </Layout.Column>
            <Layout.Column>
              <Layout bottomGutter="xl">
                <Layout bottomGutter="lg">
                  <div
                    style={{
                      width: isDesktop ? "300px" : "260px",
                      margin: "0 auto",
                    }}
                  >
                    <Image
                      src={AmecaProductLogo}
                      alt="Ameca product logo"
                      {...(isDesktop ? { width: "260px" } : { width: "200px" })}
                    />
                  </div>
                </Layout>
                <div className="visually-hidden">
                  <Text tag="h2" appearance="heading-2">
                    Ameca
                  </Text>
                </div>
                <Text appearance="body-1">
                  Multiply the power of artificial Intelligence with an
                  artificial body. Ameca is the physical presence that brings
                  your code to life. The most advanced lifelike humanoid you can
                  use to develop and show off your greatest machine learning
                  interactions. This robot is the digital interface to the real
                  world.
                </Text>
                <Text appearance="body-1">
                  Ameca is not just a development tool, it’s a cutting-edge
                  integration of the latest technology that’s built to last.
                  Grab attention and fuel the imagination with Ameca.
                </Text>
              </Layout>
              <ButtonGroup>
                <Button url="/" appearance="body-1">
                  Find out more
                  <span className="visually-hidden">about Ameca</span>
                </Button>
              </ButtonGroup>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      {/* -- End Ameca -- */}

      {/* -- Mesmer -- */}
      <PageSection
        backgroundColor={color.brand1.value}
        {...(isDesktop ? { backgroundImage: Thoth } : {})}
        backgroundImagePosition="bottomLeft"
        screen="half"
      >
        <Layout container>
          <Layout
            grid="50_50"
            {...(isDesktop ? { gap: "xl" } : { gap: "sm" })}
            stack="md"
          >
            <Layout.Column>
              {!isDesktop && (
                <div style={{ width: "200px", margin: "0 auto" }}>
                  <Image src={Thoth} alt="Thoth" fluid />
                </div>
              )}
              {isDesktop && <>&nbsp;</>}
            </Layout.Column>
            <Layout.Column>
              <Layout bottomGutter="xl">
                <Layout bottomGutter="lg">
                  <div
                    style={{
                      width: isDesktop ? "280px" : "220px",
                      margin: "0 auto",
                    }}
                  >
                    <Image
                      src={MesmerProductLogo}
                      alt="Mesmer product logo"
                      {...(isDesktop ? { width: "280px" } : { width: "220px" })}
                    />
                  </div>
                </Layout>
                <div className="visually-hidden">
                  <Text
                    tag="h2"
                    appearance="heading-2"
                    color={color.brand4.value}
                  >
                    Mesmer
                  </Text>
                </div>
                <Text appearance="body-1" color={color.brand4.value}>
                  Humans, check this out, Mesmer has found a way to mirror you.
                  They’re mesmerising by design and can imitate the appearance
                  of just about anybody. Able to maintain eye contact and
                  respond in real time to those around them, Mesmer makes for
                  robot-human interactions that will never be forgotten.
                </Text>
                <Text appearance="body-1" color={color.brand4.value}>
                  Every Mesmer component is designed and made by our team to
                  work in perfect alignment, keeping their movement convincing
                  and their controls simple to use.
                </Text>
              </Layout>
              <ButtonGroup>
                <Button url="/" tier="secondary" appearance="body-1">
                  Find out more
                  <span className="visually-hidden">about Mesmer</span>
                </Button>
              </ButtonGroup>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      {/* -- End Mesmer -- */}

      {/* -- Ameca Desktop -- */}
      <PageSection
        backgroundColor={color.brand7.value}
        {...(isDesktop ? { backgroundImage: AmecaDesktop } : {})}
        backgroundImagePosition="bottomRight"
        screen="half"
      >
        <Layout container>
          <Layout
            grid="40_60"
            {...(isDesktop ? { gap: "xl" } : { gap: "sm" })}
            stack="md"
            {...(isDesktop ? { contentReverse: true } : {})}
          >
            <Layout.Column>
              {!isDesktop && (
                <div style={{ width: "200px", margin: "0 auto" }}>
                  <Image src={AmecaDesktop} alt="Ameca Desktop" fluid />
                </div>
              )}
              {isDesktop && <>&nbsp;</>}
            </Layout.Column>
            <Layout.Column>
              <Layout bottomGutter="xl">
                <Layout bottomGutter="lg">
                  <div
                    style={{
                      width: isDesktop ? "380px" : "320px",
                      margin: "0 auto",
                    }}
                  >
                    <Image
                      src={AmecaDesktopProductLogo}
                      alt="Ameca Desktop product logo"
                      {...(isDesktop ? { width: "380px" } : { width: "320px" })}
                    />
                  </div>
                </Layout>
                <div className="visually-hidden">
                  <Text tag="h2" appearance="heading-2">
                    Ameca Desktop
                  </Text>
                </div>
                <Text appearance="body-1">
                  Not all humanoid robots need legs. Meet Ameca Desktop, our
                  smart, personable robot is a true professional, innovatively
                  designed to handle human-like conversations.
                </Text>
                <Text appearance="body-1">
                  With no special set up needed, Ameca Desktop’s tech does the
                  hard work for you. Add them to your front desk or information
                  point to delight all who arrive there.
                </Text>
              </Layout>
              <ButtonGroup>
                <Button url="/" appearance="body-1">
                  Find out more
                  <span className="visually-hidden">about Ameca Desktop</span>
                </Button>
              </ButtonGroup>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      {/* -- End Ameca Desktop -- */}

      {/* -- Azi Desktop -- */}
      <PageSection
        backgroundColor={color.brand1.value}
        {...(isDesktop ? { backgroundImage: AziDesktop } : {})}
        backgroundImagePosition="bottomLeft"
        screen="half"
      >
        <Layout container>
          <Layout
            grid="60_40"
            {...(isDesktop ? { gap: "xl" } : { gap: "sm" })}
            stack="md"
          >
            <Layout.Column>
              {!isDesktop && (
                <div style={{ width: "200px", margin: "0 auto" }}>
                  <Image src={AziDesktop} alt="Azi Desktop" fluid />
                </div>
              )}
              {isDesktop && <>&nbsp;</>}
            </Layout.Column>
            <Layout.Column>
              <Layout bottomGutter="xl">
                <Layout bottomGutter="lg">
                  <div
                    style={{
                      width: isDesktop ? "300px" : "260px",
                      margin: "0 auto",
                    }}
                  >
                    <Image
                      src={AziDesktopProductLogo}
                      alt="Azi Desktop product logo"
                      {...(isDesktop ? { width: "300px" } : { width: "260px" })}
                    />
                  </div>
                </Layout>
                <div className="visually-hidden">
                  <Text
                    tag="h2"
                    appearance="heading-2"
                    color={color.brand4.value}
                  >
                    Azi Desktop
                  </Text>
                </div>
                <Text appearance="body-1" color={color.brand4.value}>
                  Meet Azi and Ami Desktop, our smart, personable robot is a
                  true professional, innovatively designed to handle human-like
                  conversations.
                </Text>
                <Text appearance="body-1" color={color.brand4.value}>
                  With no special set up needed, Azi and Ami Desktop’s tech does
                  the hard work for you. Add them to your front desk or
                  information point to delight all who arrive there.
                </Text>
              </Layout>
              <ButtonGroup>
                <Button url="/" tier="secondary" appearance="body-1">
                  Find out more
                  <span className="visually-hidden">about Azi Desktop</span>
                </Button>
              </ButtonGroup>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      {/* -- End Azi Desktop -- */}

      {/* -- Robothespian-- */}
      <PageSection
        backgroundColor={color.brand7.value}
        {...(isDesktop ? { backgroundImage: Robothespian } : {})}
        backgroundImagePosition="bottomRight"
        screen="half"
      >
        <Layout container>
          <Layout
            grid="50_50"
            {...(isDesktop ? { gap: "xl" } : { gap: "sm" })}
            stack="md"
            {...(isDesktop ? { contentReverse: true } : {})}
          >
            <Layout.Column>
              {!isDesktop && (
                <div style={{ width: "200px", margin: "0 auto" }}>
                  <Image src={Robothespian} alt="Robothespian" fluid />
                </div>
              )}
              {isDesktop && <>&nbsp;</>}
            </Layout.Column>
            <Layout.Column>
              <Layout bottomGutter="xl">
                <Layout bottomGutter="lg">
                  <div
                    style={{
                      width: isDesktop ? "300px" : "260px",
                      margin: "0 auto",
                    }}
                  >
                    <Image
                      src={RobothespianProductLogo}
                      alt="Robothespian product logo"
                      {...(isDesktop ? { width: "300px" } : { width: "260px" })}
                    />
                  </div>
                </Layout>
                <div className="visually-hidden">
                  <Text tag="h2" appearance="heading-2">
                    Robothespian
                  </Text>
                </div>
                <Text appearance="body-1">
                  The finest actor around and the most charming of robots,
                  RoboThespian’s innovative engineering makes them capable of
                  assuming any personality and enchanting people in almost any
                  setting: exhibitions, science centres, theatres, stadiums,
                  corporate presentations and live TV.
                </Text>
                <Text appearance="body-1">
                  Fully interactive, multi-lingual and simple to set up,
                  RoboThespian has made a lasting impression at events and
                  institutions around the world.
                </Text>
              </Layout>
              <ButtonGroup>
                <Button url="/" appearance="body-1">
                  Find out more
                  <span className="visually-hidden">about Robothespian</span>
                </Button>
              </ButtonGroup>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      {/* -- End Robothespian -- */}

      {/* -- Our Clients -- */}
      {/* <PageSection backgroundColor={color.brand7.value} screen="half">
        <Layout container>
          <Text tag="h2" appearance="heading-2">
            Our clients
          </Text>
          <Text appearance="body-2">Lorem ipsum</Text>
        </Layout>
      </PageSection> */}
      {/* -- Our Clients -- */}

      {/* -- PageFooter -- */}
      <Footer />
      {/* -- End PageFooter -- */}
    </Layout>
  );
};

export default Home;
