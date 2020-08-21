import React from "react";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import Root from "@lds/eden-root";
import PageWrapper from "@lds/eden-page-wrapper";
import { Provider as StringsProvider } from "@lds/eden-translate";

const FullHeight = styled.div`
  min-height: 100vh;
  padding: 1.5rem;
`;

const Layout = ({
  strings = {},
  theme = {},
  title = "The Church of Jesus Christ of Latter-day Saints",
  children
}) => (
  <StringsProvider strings={strings}>
    <ThemeProvider theme={theme}>
      <Root>
        <PageWrapper>
          <Head>
            <title>{title}</title>
          </Head>
          <FullHeight>{children}</FullHeight>
        </PageWrapper>
      </Root>
    </ThemeProvider>
  </StringsProvider>
);

export default Layout;
