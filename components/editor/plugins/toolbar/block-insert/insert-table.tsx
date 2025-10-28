"use client";

import { TableIcon } from "lucide-react";

import { useToolbarContext } from "@/components/editor/context/toolbar-context";
import { InsertTableDialog } from "@/components/editor/plugins/table-plugin";
import { SelectItem } from "@/components/ui/select";

export function InsertTable() {
  const { activeEditor, showModal } = useToolbarContext();

  return (
    <SelectItem
      className=""
      value="table"
      onPointerUp={() =>
        showModal("Insert Table", (onClose) => (
          <InsertTableDialog activeEditor={activeEditor} onClose={onClose} />
        ))
      }
    >
      <div className="flex items-center gap-1">
        <TableIcon className="size-4" />
        <span>Table</span>
      </div>
    </SelectItem>
  );
}
