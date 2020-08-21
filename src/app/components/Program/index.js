import React from "react";
import styled from "styled-components";
import Split from "@lds/eden-split";
import Card from "@lds/eden-card";
import Stack from "@lds/eden-stack";
import { Regular } from "@lds/eden-light-rays";
import ProgramRow from "../ProgramRow";
import { blue20 } from "@lds/eden-style-constants";
import { H2, H4, Title3} from "@lds/eden-headings";
import { Text1, Text2, Text3  } from "@lds/eden-text";

const RegularBox = styled.div`
  height: 40px;
  display: flex;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  flex: 1;
  justify-content: space-between;
`;

const PaddedProgram = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const Program = props => (
  <Card>
    <Stack>
      <center>
        <img
          alt=""
          src="https://www.lds.org/services/platform/v3/resources/static/logo/eng.svg"
          height="80px"
        />
      </center>
      <RegularBox>
        <Regular color={blue20} origin="start" />
        <Text1>{props.unit}</Text1>
        <Text1 htmlstyle="float: right;">{props.date}</Text1>
      </RegularBox>

      <PaddedProgram>
        <H2>Sacrament Meeting</H2>
        <Stack gapSize="16">
          <ProgramRow label="Presiding" data={props.presiding} />
          <ProgramRow label="Conducting" data={props.conducting} />
          <ProgramRow label="Opening Hymn" data={props.hymn0} type="hymn" />
          <ProgramRow label="Invocation" data={props.prayer0} />

          <center>
            <Title3>Business</Title3>
          </center>
          <ProgramRow label="Sacrament Hymn" data={props.hymn1} type="hymn" />

          <center>
            <Title3>Administration of the Sacrament</Title3>
          </center>
          {props.speakers.map((x, index) => {
            return (
              <ProgramRow
                key={index}
                label={`${x.type} Speaker`}
                data={props[x.name]}
              />
            );
          })}
          <ProgramRow label="Closing Hymn" data={props.hymn2} type="hymn" />
          <ProgramRow label="Benediction" data={props.prayer1} />
        </Stack>
      </PaddedProgram>
    </Stack>
  </Card>
);

export default Program;
