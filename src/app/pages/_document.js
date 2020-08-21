import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { script } from "@lds/universal-env";

/**
 * Each page will be wrapped with this custom content.
 * Source: https://nextjs.org/docs/#custom-document
 */
class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="icon"
            href="https://edge.ldscdn.org/cdn2/common/images/logos/favicon-lds-1.ico"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styleTags}
          <script dangerouslySetInnerHTML={{ __html: script() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
