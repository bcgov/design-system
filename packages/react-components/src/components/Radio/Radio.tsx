import {
  RadioField,
  RadioButton,
  RadioFieldProps as ReactAriaRadioFieldProps,
  RadioButtonProps as ReactAriaRadioButtonProps,
  Text,
} from "react-aria-components";

import { composeRenderProps } from "react-aria-components/composeRenderProps";

import "./Radio.css";

export interface RadioProps extends ReactAriaRadioFieldProps {
  /* Sets optional description text below label */
  description?: string;
  /* Backwards compatibility for deprecated RadioProps events */
  onHoverStart?: ReactAriaRadioButtonProps["onHoverStart"];
  onHoverChange?: ReactAriaRadioButtonProps["onHoverChange"];
  onHoverEnd?: ReactAriaRadioButtonProps["onHoverEnd"];
}

export default function Radio({
  value,
  children,
  description,
  ...props
}: RadioProps) {
  return (
    <RadioField className="bcds-react-aria-Radio" value={value} {...props}>
      <RadioButton
        className="bcds-react-aria-Radio--Button"
        onHoverStart={props.onHoverStart}
        onHoverChange={props.onHoverChange}
        onHoverEnd={props.onHoverEnd}
      >
        {composeRenderProps(children, (children) => (
          <>
            <div className="bcds-react-aria-Radio--Indicator" />
            <span className="bcds-react-aria-Radio--Label">{children}</span>
          </>
        ))}
      </RadioButton>
      {description && (
        <Text slot="description" className="bcds-react-aria-Radio--Description">
          {description}
        </Text>
      )}
    </RadioField>
  );
}
