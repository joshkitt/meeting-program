import React from "react";
import { storiesOf } from "@storybook/react";
import ProgramRow from ".";

storiesOf("ProgramRow", module).add("Default", () => (
  <React.Fragment>
    <ProgramRow label="Presiding" data="Test Person" />
    <ProgramRow
      label="Opening Song"
      data={{ name: "Test Song", number: 1 }}
      type="hymn"
    />
    <ProgramRow
      label="Opening Song"
      type="hymn"
    />
  </React.Fragment>
));
