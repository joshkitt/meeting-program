import React from "react";
import { storiesOf } from "@storybook/react";
import HymnSelector from ".";
import { data } from "./mocks";

/**
 * Developing and visually testing components in isolation before composing them in your app is useful.
 * Source: https://storybook.js.org
 */

storiesOf("HymnSelector", module).add("Default", () => (
  <HymnSelector label="Opening" name="hymn1" hymns={data} callback={() => alert(0)}/>
));
