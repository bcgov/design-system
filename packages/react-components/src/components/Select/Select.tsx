import React from "react";
import {
  Button,
  Collection,
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
} from "react-aria-components";

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
}

function ChevronDown() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7882 9.15569L10.4858 14.236C10.3192 14.3748 10.1527 14.4303 10.0139 14.4303C9.84731 14.4303 9.68074 14.3748 9.54194 14.2637L4.21182 9.15569C3.9342 8.90584 3.9342 8.46167 4.18405 8.21182C4.4339 7.9342 4.87808 7.9342 5.12793 8.18405L10.0139 12.8479L14.872 8.18405C15.1219 7.9342 15.5661 7.9342 15.8159 8.21182C16.0658 8.46167 16.0658 8.90584 15.7882 9.15569Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.21231 13.3146L9.52695 8.2226C9.6939 8.08348 9.86086 8 10.0278 8C10.1948 8 10.3339 8.05565 10.473 8.16695L15.7876 13.259C16.066 13.5372 16.066 13.9546 15.8155 14.2051C15.5651 14.4833 15.1477 14.4833 14.8694 14.2329L10.0278 9.61387L5.13054 14.2885C4.88011 14.539 4.43491 14.539 4.18448 14.2607C3.93405 13.9825 3.93405 13.5651 4.21231 13.3146Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Select displays a collapsible list of options and allows a user to select one of them. */
export default function Select<T extends object>({
  items,
  sections,
  label,
  placeholder,
  size = "medium",
  ...props
}: SelectProps<T>) {
  return (
    <ReactAriaSelect {...props}>
      {({ isOpen, isRequired, isInvalid }) => (
        <>
          {label && (
            <Label className="react-aria-Select--Label">
              {label}
              {!isRequired && (
                <>
                  {" "}
                  <span className="optional">(optional)</span>
                </>
              )}
            </Label>
          )}
          <Button
            className={`react-aria-Select--Button ${
              size === "medium" ? "medium" : "small"
            } ${isInvalid && "invalid"}`}
          >
            <SelectValue
              children={(value) => {
                if (value.selectedText) return value.selectedText;
                if (placeholder) return placeholder;
                return "Select an item";
              }}
            />
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </Button>
          <Popover className="react-aria-Select--Popover" offset={4}>
            <ListBox
              className="react-aria-Select--ListBox"
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
                <Section id={section.id}>
                  {section?.header && (
                    <Header className="react-aria-Select--Header">
                      {section.header}
                    </Header>
                  )}
                  <Collection items={section.items}>
                    {(item) => (
                      <ListBoxItem
                        id={item?.id ? item.id : item.label}
                        className={`react-aria-Select--ListBoxItem ${
                          item?.isDestructive ? "destructive" : ""
                        }`}
                        textValue={item.label}
                      >
                        {item?.iconLeft && (
                          <div className="react-aria-Select--ListBoxItem-icon">
                            {item.iconLeft}
                          </div>
                        )}
                        <div className="react-aria-Select--ListBoxItem-Text-container">
                          <Text
                            slot="label"
                            className="react-aria-Select--ListBoxItem-Text-label"
                          >
                            {item.label}
                          </Text>
                          {item.description && (
                            <Text
                              slot="description"
                              className="react-aria-Select--ListBoxItem-Text-description"
                            >
                              {item.description}
                            </Text>
                          )}
                        </div>
                        {item?.iconRight && (
                          <div className="react-aria-Select--ListBoxItem-icon">
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
