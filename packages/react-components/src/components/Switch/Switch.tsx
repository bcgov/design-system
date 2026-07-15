import {
  SwitchButton as ReactAriaSwitchButton,
  SwitchField as ReactAriaSwitchField,
  SwitchFieldProps as ReactAriaSwitchFieldProps,
  FieldError,
  ValidationResult,
  Text,
} from "react-aria-components";

import "./Switch.css";
import SvgExclamationIcon from "../Icons/SvgExclamationIcon";

export interface SwitchProps extends ReactAriaSwitchFieldProps {
  /* Label positioning relative to switch */
  labelPosition?: "left" | "right";
  /* Sets optional description text below switch label */
  description?: string;
  /* Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function Switch({
  labelPosition = "right",
  description,
  errorMessage,
  children,
  ...props
}: SwitchProps) {
  return (
    <ReactAriaSwitchField className="bcds-react-aria-Switch" {...props}>
      <ReactAriaSwitchButton className="bcds-react-aria-Switch--Button">
        {({ isSelected, isDisabled }) => (
          <>
            {labelPosition === "left" && <>{children}</>}
            <div className="track indicator">
              <div
                data-disabled={isDisabled || undefined}
                className={isSelected ? "handle" : "handle indicator"}
              />
            </div>
            {labelPosition === "right" && <>{children}</>}
            {description && (
              <Text
                className="bcds-react-aria-Switch--Description"
                slot="description"
              >
                {description}
              </Text>
            )}
          </>
        )}
      </ReactAriaSwitchButton>
      <FieldError className="bcds-react-aria-Switch--Error">
        <>
          <SvgExclamationIcon />
          {errorMessage}
        </>
      </FieldError>
    </ReactAriaSwitchField>
  );
}
