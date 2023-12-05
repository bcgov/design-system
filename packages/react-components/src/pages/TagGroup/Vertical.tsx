import { useState } from "react";
import type { Selection } from "react-aria-components";
import { useListData } from "@react-stately/data";

import { TagProps } from "@/components/Tag";
import TagGroup from "@/components/TagGroup";
import TagList from "@/components/TagList";

import * as data from "./data.json";

export default function VerticalTagGroup() {
  const [selected, setSelected] = useState<Selection>(new Set([]));
  const list = useListData({
    initialItems: data.pets,
  });

  return (
    <TagGroup
      label="Selected Pets"
      onRemove={(keys) => list.remove(...keys)}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      <TagList
        items={list.items as TagProps[]}
        orientation="vertical"
        renderEmptyState={() => <span>No pets selected</span>}
      />
    </TagGroup>
  );
}
