import {
  RadioField,
  RadioButton,
  RadioFieldProps as ReactAriaRadioFieldProps,
  Text,
} from "react-aria-components";

import "./Radio.css";

export interface RadioProps extends ReactAriaRadioFieldProps {
  /* Sets text label for radio button */
  children?: React.ReactNode;
  /* Sets optional description text below label */
  description?: string;
}

export default function Radio({
  value,
  children,
  description,
  ...props
}: RadioProps) {
  return (
    <RadioField className="bcds-react-aria-Radio" value={value} {...props}>
      <RadioButton className="bcds-react-aria-Radio--Button">
        <div className="bcds-react-aria-Radio--Indicator" />
        <span className="bcds-react-aria-Radio--Label">{children}</span>
      </RadioButton>
      {description && (
        <Text slot="description" className="bcds-react-aria-Radio--Description">
          {description}
        </Text>
      )}
    </RadioField>
  );
}
