import React from "react";
import { storiesOf } from "@storybook/react";
import Program from ".";

var speakers = [
  { name: "speaker0", type: "Youth" },
  { name: "speaker1", type: "First" },
  { name: "speaker2", type: "Second" }
];

var props = {
  unit: "Test Unit",
  presiding: "Test Presider",
  date: "1/1/2019",
  conducting: "Test Conductor",
  hymn0: {name: "Song 1", number: 1},
  hymn1: {name: "Song 2", number: 2},
  hymn2: {name: "Song 3", number: 3},
  prayer0: "Opening Prayer Person",
  prayer1: "Closing Prayer Person",
  speaker0: "Speaker 1",
  speaker1: "Speaker 2",
  speaker2: "Speaker 3"
};

storiesOf("Program", module).add("Default", () => (
  <Program {...props} speakers={speakers} />
));
