import {
  NumberField as ReactAriaNumberField,
  NumberFieldProps as ReactAriaNumberFieldProps,
  Button,
  FieldError,
  Group,
  Input,
  Label,
  Text,
} from "react-aria-components";

import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgMinusIcon from "../Icons/SvgMinusIcon";
import SvgPlusIcon from "../Icons/SvgPlusIcon";

import "./NumberField.css";
import { useEffect, useState } from "react";

interface NumberFieldProps extends ReactAriaNumberFieldProps {
  label?: string;
  description?: string;
}

export default function NumberField({
  label,
  description,
  value,
  onChange,
  isReadOnly,
  ...props
}: NumberFieldProps) {
  const [currValue, setCurrValue] = useState(0);
  const [errorMode, setErrorMode] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (value && !Number.isInteger(value)) {
      setErrorMode(true);
      setErrorMsg("value is not a number");
    } else if (!onChange) {
      setErrorMode(true);
      setErrorMsg("function has not been set up properly");
    } else {
      setErrorMode(false);
      setCurrValue(value || 0);
      setErrorMsg("");
    }
  }, [value, onChange]);

  function changeButtonClicked(num: number) {
    if (onChange) {
      onChange(num);
      setCurrValue(num);
    }
  }

  return (
    <ReactAriaNumberField
      {...props}
      className={`bcds-react-aria-NumberField`}
      value={currValue}
      isReadOnly={isReadOnly ? true : false}
      onChange={(num) => changeButtonClicked(num)}
    >
      <Label>{label}</Label>
      <Group
        className={`bcds-react-aria-NumberField--Group ${
          errorMode ? " isError" : ""
        } ${isReadOnly ? " isReadOnly" : ""}`}
      >
        <Button
          slot="decrement"
          className={`bcds-react-aria-NumberField--Button ${
            isReadOnly ? " isReadOnly" : ""
          } ${errorMode ? " isError" : ""}`}
        >
          <SvgMinusIcon />
        </Button>
        <div
          className={`bcds-react-aria-NumberField--InputWrapper ${
            isReadOnly ? " isReadOnly" : ""
          }`}
        >
          <div className={"bcds-react-aria-NumberField--InputContainer"}>
            <Input
              className={`bcds-react-aria-NumberField--Input ${
                isReadOnly ? " isReadOnly" : ""
              } ${errorMode ? " isError" : ""}`}
            />
            {errorMode && <SvgExclamationIcon />}
          </div>
        </div>
        <Button
          slot="increment"
          className={`bcds-react-aria-NumberField--Button ${
            isReadOnly ? " isReadOnly" : ""
          } ${errorMode ? " isError" : ""}`}
        >
          <SvgPlusIcon />
        </Button>
      </Group>
      {description && (
        <Text
          className="bcds-react-aria-NumberField--Description"
          slot="description"
        >
          {description}
        </Text>
      )}
      <FieldError className="bcds-react-aria-NumberField--Error">
        {errorMsg}
      </FieldError>
    </ReactAriaNumberField>
  );
}
