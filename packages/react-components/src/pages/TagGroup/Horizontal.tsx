import { useState } from "react";
import { useListData } from "react-aria-components";
import type { Selection } from "react-aria-components";

import { TagProps } from "@/components/Tag";
import TagGroup from "@/components/TagGroup";
import TagList from "@/components/TagList";

import * as data from "./data.json";

export default function HorizontalTagGroup() {
  const [selected, setSelected] = useState<Selection>(new Set([]));
  const list = useListData({
    initialItems: data.colors as TagProps[],
  });

  return (
    <TagGroup
      label="Available Colors"
      onRemove={(keys) => list.remove(...keys)}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      <TagList
        items={list.items}
        renderEmptyState={() => <span>No tags selected</span>}
      />
    </TagGroup>
  );
}
