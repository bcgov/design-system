import React from "react";
import {
  Button,
  Collection,
  FieldError,
  Header,
  Key,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps as ReactAriaListBoxItemProps,
  Popover,
  Section,
  Select as ReactAriaSelect,
  SelectProps as ReactAriaSelectProps,
  SelectValue,
  Text,
  ValidationResult,
} from "react-aria-components";

import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgChevronUpIcon from "../Icons/SvgChevronUpIcon";
import SvgChevronDownIcon from "../Icons/SvgChevronDownIcon";

import "./Select.css";

export interface ListBoxItemProps extends ReactAriaListBoxItemProps {
  /** Text label for the option. Provide an `id` if this is not unique. */
  label: string;
  /** Descriptive text that appears below the option's label */
  description?: string;
  /** Marks an option visually with red text to indicate a destructive/dangerous option */
  isDestructive?: boolean;
  /** Left icon slot */
  iconLeft?: React.ReactElement;
  /** Right icon slot */
  iconRight?: React.ReactElement;
}

export interface SelectionSectionProps {
  id: Key;
  /** Label for the section */
  header?: string;
  /** Flat list of options within the section */
  items: ListBoxItemProps[];
}

export interface SelectProps<T extends object> extends ReactAriaSelectProps<T> {
  /** Use `items` for a flat list of options */
  items?: ListBoxItemProps[];
  /** Use `sections` for a sectioned list with `items` options in each section */
  sections?: SelectionSectionProps[];
  /** Text label for the Select component */
  label?: string;
  /** Temporary text that occupies the select input when no option has been selected. */
  placeholder?: string;
  /** Defaults to `medium` */
  size?: "small" | "medium";
  /** Description or helper text that renders below the select input */
  description?: string;
  /** Used for data validation and error handling */
  errorMessage?: string | ((validation: ValidationResult) => string);
}

/** Select displays a collapsible list of options and allows a user to select one of them. */
export default function Select<T extends object>({
  items,
  sections,
  label,
  description,
  placeholder,
  size = "medium",
  errorMessage,
  ...props
}: SelectProps<T>) {
  return (
    <ReactAriaSelect {...props} className="bcds-react-aria-Select">
      {({ isOpen, isRequired, isInvalid }) => (
        <>
          {label && (
            <Label className="bcds-react-aria-Select--Label">
              {isRequired ? `${label} (required)` : label}
            </Label>
          )}
          <Button
            className={`bcds-react-aria-Select--Button ${
              size === "medium" ? "medium" : "small"
            } ${isInvalid && "invalid"}`}
          >
            <SelectValue
              className="bcds-react-aria-SelectValue"
              children={(value) => {
                if (value.selectedText) return value.selectedText;
                if (placeholder) return placeholder;
                return "Select an item";
              }}
            />
            {isInvalid && <SvgExclamationIcon />}
            {isOpen ? <SvgChevronUpIcon /> : <SvgChevronDownIcon />}
          </Button>
          {description && (
            <Text
              slot="description"
              className={`bcds-react-aria-Select--Description`}
            >
              {description}
            </Text>
          )}
          <FieldError className="bcds-react-aria-Select--Error">
            {errorMessage}
          </FieldError>
          <Popover className="bcds-react-aria-Select--Popover" offset={4}>
            <ListBox
              className="bcds-react-aria-Select--ListBox"
              // This ternary statement is used to mock the data for `sections`
              // if a flat list of `items` was passed instead. This allows us to
              // use one component to support both flat and sectioned lists of
              // items. If this causes problems, maybe in the future we break
              // this into separate components or add additional logic to
              // support different markup within the same component.
              items={
                sections
                  ? sections
                  : [{ id: "section", header: "", items: items ? items : [] }]
              }
            >
              {(section: SelectionSectionProps) => (
                <Section id={section.id} className="bcds-react-aria-Section">
                  {section?.header && (
                    <Header className="bcds-react-aria-Select--Header">
                      {section.header}
                    </Header>
                  )}
                  <Collection items={section.items}>
                    {(item) => (
                      <ListBoxItem
                        id={item?.id ? item.id : item.label}
                        className={`bcds-react-aria-Select--ListBoxItem ${
                          item?.isDestructive ? "destructive" : ""
                        }`}
                        textValue={item.label}
                      >
                        {item?.iconLeft && (
                          <div className="bcds-react-aria-Select--ListBoxItem-icon">
                            {item.iconLeft}
                          </div>
                        )}
                        <div className="bcds-react-aria-Select--ListBoxItem-Text-container">
                          <Text
                            slot="label"
                            className="bcds-react-aria-Select--ListBoxItem-Text-label"
                          >
                            {item.label}
                          </Text>
                          {item.description && (
                            <Text
                              slot="description"
                              className="bcds-react-aria-Select--ListBoxItem-Text-description"
                            >
                              {item.description}
                            </Text>
                          )}
                        </div>
                        {item?.iconRight && (
                          <div className="bcds-react-aria-Select--ListBoxItem-icon">
                            {item.iconRight}
                          </div>
                        )}
                      </ListBoxItem>
                    )}
                  </Collection>
                </Section>
              )}
            </ListBox>
          </Popover>
        </>
      )}
    </ReactAriaSelect>
  );
}
