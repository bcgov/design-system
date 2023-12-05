import { useListData } from "@react-stately/data";

import { TagProps } from "@/components/Tag";
import TagGroup from "@/components/TagGroup";
import TagList from "@/components/TagList";

import * as data from "./data.json";

export default function DisabledTagGroup() {
  const list = useListData({
    initialItems: data.fileTypes as TagProps[],
  });

  return (
    <TagGroup
      label="File types"
      selectionMode="none"
      disabledKeys={["ppt", "pdf"]}
      description={"PowerPoint and PDF are not currently available."}
      errorMessage={"This is what an error looks like."}
    >
      <TagList
        items={list.items}
        renderEmptyState={() => <span>No file types selected</span>}
      />
    </TagGroup>
  );
}
