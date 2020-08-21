import React from "react";
import styled from "styled-components";
import { Text1, Text2, Text3 } from "@lds/eden-text";
import { H1, H2, H3, H4 } from "@lds/eden-headings";
import { grey20, blue30, blue20, spacing16 } from "@lds/eden-style-constants";

const Dots = styled.div`
  width: 100%;
  border-bottom: 4px dotted ${grey20};
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 12px;
  vertical-align: baseline;
`;
const Flex = styled.div`
  display: flex;
`;

const ProgramRow = props => (
  <Flex>
    <Text2>{props.label}</Text2>
    <Dots />
    <Text2>&nbsp;
      {props.type === "hymn"
        ? props.data
          ? `"${props.data.name}" — 
            #${props.data.number}`
          : " "
        : props.data}
    </Text2>
  </Flex>
);

export default ProgramRow;
