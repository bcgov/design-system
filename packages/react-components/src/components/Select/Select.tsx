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
  ListBoxSection,
  Popover,
  Select as ReactAriaSelect,
  SelectProps as ReactAriaSelectProps,
  SelectValue,
  Text,
  ValidationResult,
} from "react-aria-components";

import SvgExclamationIcon from "../Icons/SvgExclamationIcon";
import SvgCheckIcon from "../Icons/SvgCheckIcon";
import SvgChevronUpIcon from "../Icons/SvgChevronUpIcon";
import SvgChevronDownIcon from "../Icons/SvgChevronDownIcon";
import TagGroup from "../TagGroup/TagGroup";
import TagList from "../TagList/TagList";
import { TagProps } from "../Tag";

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
  /** Optional color token forwarded to selected tags */
  color?: TagProps["color"];
  /** Optional style token forwarded to selected tags */
  tagStyle?: TagProps["tagStyle"];
}

export interface SelectionSectionProps {
  id: Key;
  /** Label for the section */
  header?: string;
  /** Flat list of options within the section */
  items: ListBoxItemProps[];
}

export interface SelectProps<
  T extends object,
  M extends "single" | "multiple" = "single",
> extends ReactAriaSelectProps<T, M> {
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
export default function Select<
  T extends object,
  M extends "single" | "multiple" = "single",
>({
  items,
  sections,
  label,
  description,
  placeholder,
  size = "medium",
  errorMessage,
  ...props
}: SelectProps<T, M>) {
  return (
    <ReactAriaSelect {...props} className={`bcds-react-aria-Select ${size}`}>
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
            <SelectValue className="bcds-react-aria-SelectValue">
              {({ selectedItems, state }) => (
                <TagGroup
                  aria-label={
                    label ? `${label} selections` : "Selected options"
                  }
                  /* Handle deselection of items via tag button */
                  onRemove={(keys) => {
                    const selectedKeys = state.selectionManager.selectedKeys;

                    const updatedSelectedKeys = new Set(selectedKeys);

                    for (const key of keys) {
                      updatedSelectedKeys.delete(key);
                    }

                    state.selectionManager.setSelectedKeys(updatedSelectedKeys);
                  }}
                >
                  <TagList
                    items={(selectedItems as Array<ListBoxItemProps | null>)
                      .filter((item): item is ListBoxItemProps => item !== null)
                      /* Map ListBoxItem props to Tag props */
                      .map((item) => ({
                        id: item?.id ? item.id : item.label,
                        textValue: item.label,
                        size: size === "small" ? "xsmall" : "small",
                        color: item.color,
                        tagStyle: item.tagStyle,
                        ...(item.iconLeft && { icon: item.iconLeft }),
                      }))}
                    renderEmptyState={() => (
                      <span className="bcds-react-aria-SelectValue--Placeholder">
                        {placeholder ? placeholder : "Select an item"}
                      </span>
                    )}
                  />
                </TagGroup>
              )}
            </SelectValue>
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
              className={`bcds-react-aria-Select--ListBox ${size}`}
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
                <ListBoxSection
                  id={section.id}
                  className="bcds-react-aria-Section"
                >
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
                        {({ isSelected }) => (
                          <>
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
                            {isSelected ? (
                              <div className="bcds-react-aria-Select--ListBoxItem-icon">
                                <SvgCheckIcon />
                              </div>
                            ) : (
                              item?.iconRight && (
                                <div className="bcds-react-aria-Select--ListBoxItem-icon">
                                  {item.iconRight}
                                </div>
                              )
                            )}
                          </>
                        )}
                      </ListBoxItem>
                    )}
                  </Collection>
                </ListBoxSection>
              )}
            </ListBox>
          </Popover>
        </>
      )}
    </ReactAriaSelect>
  );
}
