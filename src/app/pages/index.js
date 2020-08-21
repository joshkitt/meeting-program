import React from "react";
import Link from "next/link";
import Stack from "@lds/eden-stack";
import Grid from "@lds/eden-grid";
import Image from "@lds/eden-image";
import PrimaryButton from "@lds/eden-buttons/Primary";
import Layout from "../components/Layout";
import { Text1, Text2, Text3 } from "@lds/eden-text";
import Split from "@lds/eden-split";
import fetch from "isomorphic-unfetch";
import {
  Label,
  Hint,
  Input,
  Validator,
  FormField,
  InputGroup,
  Select
} from "@lds/eden-form-parts";
import styled from "styled-components";
import { Regular, Narrow } from "@lds/eden-light-rays";
import { blue30, blue20, spacing16 } from "@lds/eden-style-constants";
import HymnSelector from "../components/HymnSelector";
import ProgramRow from "../components/ProgramRow";
import { H1, H2, H3 } from "@lds/eden-headings";
import Card from "@lds/eden-card";
import Program from "../components/Program";

class Home extends React.Component {

  static getInitialProps() {
    return fetch("https://meeting-program-api.app.lds.org/hymns")
    .then(res => (res.ok ? res.json() : Promise.reject(res)))
    .catch(() => ({
      hymns: []
    }))

    // return {
    //   hymns: [
    //     { name: "name1", number: 1 },
    //     { name: "name2", number: 2 },
    //     { name: "name3", number: 3 }
    //   ]
    // };
  }

  speakers = [
    { name: "speaker0", type: "Youth" },
    { name: "speaker1", type: "First" },
    { name: "speaker2", type: "Second" }
  ];

  state = {
  };

  changeHandler = event => {
    const input = event.target;
    this.setState({
      [input.name]: input.type === "checkbox" ? input.checked : input.value
    });
  };

  hymnChangeHandler = event => {
    this.setState({
      [event.target.name]: this.props.hymns[event.target.value - 1]
    });
  };

  render() {
    return (
      <Layout title="Home">
        <H1>Sacrament Meeting Program</H1>
        <Split ratio="1/3">
          <div>
            <Stack>
              <FormField>
                <Label>
                  Unit
                  <Input
                    name="unit"
                    type="text"
                    onChange={this.changeHandler}
                  />
                </Label>
              </FormField>
              <FormField>
                <Label>
                  Date
                  <Input
                    name="date"
                    type="date"
                    onChange={this.changeHandler}
                  />
                </Label>
              </FormField>
              <FormField>
                <Label>
                  Presiding
                  <Input
                    name="presiding"
                    type="text"
                    onChange={this.changeHandler}
                  />
                </Label>
              </FormField>
              <FormField>
                <Label>
                  Conducting
                  <Input
                    name="conducting"
                    type="text"
                    onChange={this.changeHandler}
                  />
                </Label>
              </FormField>
              <H3>Hymns</H3>
              <HymnSelector
                label="Opening"
                name="hymn0"
                hymns={this.props.hymns}
                callback={this.hymnChangeHandler}
              />
              <HymnSelector
                label="Sacrament"
                name="hymn1"
                hymns={this.props.hymns}
                callback={this.hymnChangeHandler}
              />
              <HymnSelector
                label="Closing"
                name="hymn2"
                hymns={this.props.hymns}
                callback={this.hymnChangeHandler}
              />
              <H3>Speakers</H3>
              {this.speakers.map((x, index) => {
                return (
                  <FormField key={index}>
                    <Label>
                      {x.type}
                      <Input
                        name={x.name}
                        type="text"
                        onChange={this.changeHandler}
                      />
                    </Label>
                  </FormField>
                );
              })}
              <H3>Prayers</H3>
              <FormField>
                <Label>
                  Opening Prayer
                  <Input
                    name="prayer0"
                    type="text"
                    onChange={this.changeHandler}
                  />
                </Label>
              </FormField>
              <FormField>
                <Label>
                  Closing Prayer
                  <Input
                    name="prayer1"
                    type="text"
                    onChange={this.changeHandler}
                  />
                </Label>
              </FormField>
            </Stack>
          </div>

          <div>
            <Program {...this.state} speakers={this.speakers} />
          </div>
        </Split>
      </Layout>
    );
  }
}

export default Home;
