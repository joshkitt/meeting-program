import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from ".";

/**
 * Developing and visually testing components in isolation before composing them in your app is useful.
 * This file shows an example of that for the Layout component.
 * Source: https://storybook.js.org
 */

storiesOf("Layout", module).add("Default", () => (
  <Layout>Some children</Layout>
));
