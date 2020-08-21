import React from "react";
import { configure, addDecorator } from "@storybook/react";
import Root from "@lds/eden-root";

function loadStories() {
  const req = require.context("../src/app", true, /.story.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <Root>{story()}</Root>);

configure(loadStories, module);
