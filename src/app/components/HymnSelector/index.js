import React from "react";
import { Label, FormField, Select } from "@lds/eden-form-parts";

const HymnSelector = props => (
  <FormField>
    <Label>
      {props.label}
      <Select name={props.name} onChange={props.callback}>
        <option value="" defaultValue>
          --choose an option--
        </option>
        {props.hymns.map(x => {
          return (
            <option key={x.number} value={x.number}>
              {x.name}
            </option>
          );
        })}
      </Select>
    </Label>
  </FormField>
);

export default HymnSelector;
