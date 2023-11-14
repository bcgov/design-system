import {
  TagList as ReactAriaTagList,
  TagListProps as ReactAriaTagListProps,
} from "react-aria-components";

import Tag, { TagProps } from "../Tag";

import "./TagList.css";

export interface TagListProps<T>
  extends Pick<ReactAriaTagListProps<T>, "children" | "renderEmptyState"> {
  items: TagProps[];
  orientation?: "horizontal" | "vertical";
}

export default function TagList<T extends object>({
  items,
  orientation = "horizontal",
  renderEmptyState,
  ...props
}: TagListProps<T>) {
  return (
    <ReactAriaTagList
      className={`react-aria-TagList ${orientation}`}
      {...props}
      renderEmptyState={renderEmptyState}
    >
      {items &&
        Array.from(items).map((item: TagProps) => {
          return <Tag {...item} key={item.id} />;
        })}
    </ReactAriaTagList>
  );
}
