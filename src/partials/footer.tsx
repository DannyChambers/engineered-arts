import React from "react";

import {
  PageFooter,
  SiteFooter,
  Layout,
  Logo,
  Text,
  List,
  useTheme,
  breakpoint,
} from "@dannychambers/bateson-web-components";

import { default as Link } from "./link";

import LogoImage from "../assets/images/EA-logo-light.svg";

import { useMediaQuery } from "../utilities/useMediaQuery.ts";

const Footer: React.FC = () => {
  const { color } = useTheme();
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.sm.value})`);

  return (
    <>
      <PageFooter>
        <Layout bottomGutter="xl">
          <Layout grid="50_50" stack="sm">
            <Layout.Column>
              <Layout grid="50_50">
                <Layout.Column>
                  <Text
                    tag="h2"
                    appearance="heading-7"
                    color={color.brand4.value}
                  >
                    Robots
                  </Text>

                  <List color={color.brand4.value} marker={false}>
                    <li>
                      <Link to="/">Ameca</Link>
                    </li>
                    <li>
                      <Link to="/">Ameca Desktop</Link>
                    </li>
                    <li>
                      <Link to="/">Ami and Azi Desktop</Link>
                    </li>
                    <li>
                      <Link to="/">Mesmer</Link>
                    </li>
                    <li>
                      <Link to="/">Quinn</Link>
                    </li>
                    <li>
                      <Link to="/">RoboThespian</Link>
                    </li>
                  </List>
                </Layout.Column>
                <Layout.Column>
                  <Text
                    tag="h2"
                    appearance="heading-7"
                    color={color.brand4.value}
                  >
                    Software
                  </Text>
                  <List color={color.brand4.value} marker={false}>
                    <li>
                      <Link to="/">Tritium</Link>
                    </li>
                    <li>
                      <Link to="/">Virtual Robot</Link>
                    </li>
                    <li>
                      <Link to="/">AI vs. HI</Link>
                    </li>
                    <li>
                      <Link to="/">Open Source</Link>
                    </li>
                  </List>
                </Layout.Column>
              </Layout>
            </Layout.Column>
            <Layout.Column>
              <Text tag="h2" appearance="heading-7" color={color.brand4.value}>
                About Us
              </Text>
              <List color={color.brand4.value} marker={false} columns={2}>
                <li>
                  <Link to="/">Our Story</Link>
                </li>
                <li>
                  <Link to="/">Our Timeline</Link>
                </li>
                <li>
                  <Link to="/">Downloads</Link>
                </li>
                <li>
                  <Link to="/">Media Centre</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Meet the Team</Link>
                </li>
                <li>
                  <Link to="/">Custom Commissions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
              </List>
            </Layout.Column>
          </Layout>
        </Layout>

        <Layout grid="25_25_25_25" pair="sm">
          <Layout.Column>
            <Logo
              src={LogoImage}
              alt="Engineered Arts"
              {...(isDesktop ? { size: "lg" } : { size: "md" })}
            />
          </Layout.Column>
          <Layout.Column>
            <Text appearance="heading-7" color={color.brand4.value}>
              Find us
            </Text>
            <Text appearance="body-2" color={color.brand4.value}>
              Engineered Arts Limited
              <br />
              E1-E3 Church View Business Park
              <br />
              Bickland Water Road
              <br />
              Falmouth
              <br />
              Cornwall
              <br />
              TR11 4FZ
            </Text>
          </Layout.Column>
          <Layout.Column>
            <Layout bottomGutter="lg">
              <Text appearance="heading-7" color={color.brand4.value}>
                Call us today
              </Text>
              <Text appearance="body-2" color={color.brand4.value}>
                <Link to="call:+441326378129">+44 (0) 1326 378 129 </Link>
              </Text>
            </Layout>
            <Layout bottomGutter="lg">
              <Text appearance="heading-7" color={color.brand4.value}>
                Need help?
              </Text>
              <List
                appearance="body-2"
                color={color.brand4.value}
                marker={false}
              >
                <li>
                  <Link to="/">Visit our Helpdesk</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </List>
            </Layout>
          </Layout.Column>
          <Layout.Column>
            <Text appearance="heading-7" color={color.brand4.value}>
              Connect with us
            </Text>
            <List color={color.brand4.value} marker={false}>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">X</Link>
              </li>
              <li>
                <Link to="/">Youtube</Link>
              </li>
              <li>
                <Link to="/">Vimeo</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
            </List>
          </Layout.Column>
        </Layout>
      </PageFooter>
      <SiteFooter backgroundColor={color.brand1.value}>
        <Layout container>
          <List
            color={color.brand4.value}
            appearance="body-3"
            marker={false}
            {...(isDesktop ? { inline: "center" } : {})}
          >
            <li>&copy;2025 Engineered Arts</li>
            <li>Company no.: 05265468</li>
            <li>VAT no.: GB677990757</li>
          </List>
        </Layout>
      </SiteFooter>
    </>
  );
};

export default Footer;
