import { ColDef } from "ag-grid-community";
import { useEffect, useState } from "react";
import ForwardedIconComponent from "../../../../components/genericIconComponent";
import TableComponent from "../../../../components/tableComponent";
import { Button } from "../../../../components/ui/button";
import { defaultShortcuts } from "../../../../constants/constants";
import { useShortcutsStore } from "../../../../stores/shortcuts";
import CellRenderShortcuts from "./CellRenderWrapper";
import EditShortcutButton from "./EditShortcutButton";
import { useTranslation } from "react-i18next";

export default function ShortcutsPage() {
  const { t } = useTranslation();
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const shortcuts = useShortcutsStore((state) => state.shortcuts);
  const setShortcuts = useShortcutsStore((state) => state.setShortcuts);

  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef[] = [
    {
      headerName: t("Functionality"),
      field: "name",
      flex: 1,
      editable: false,
      resizable: false,
    }, //This column will be twice as wide as the others
    {
      headerName: t("Keyboard Shortcut"),
      field: "shortcut",
      flex: 2,
      editable: false,
      resizable: false,
      cellRenderer: CellRenderShortcuts,
    },
  ];

  const [nodesRowData, setNodesRowData] = useState<
    Array<{ name: string; shortcut: string }>
  >([]);

  useEffect(() => {
    setNodesRowData(shortcuts);
  }, [shortcuts]);

  const combinationToEdit = shortcuts.filter((s) => s.name === selectedRows[0]);
  const [open, setOpen] = useState(false);
  const updateUniqueShortcut = useShortcutsStore(
    (state) => state.updateUniqueShortcut,
  );

  function handleRestore() {
    setShortcuts(defaultShortcuts);
    defaultShortcuts.forEach(({ name, shortcut }) => {
      const fixedName = name.split(" ")[0].toLowerCase();
      updateUniqueShortcut(fixedName, shortcut);
    });
    localStorage.removeItem("langflow-shortcuts");
  }

  return (
    <div className="flex h-full w-full flex-col gap-6">
      <div className="flex w-full items-start justify-between gap-6">
        <div className="flex w-full flex-col">
          <h2 className="flex items-center text-lg font-semibold tracking-tight">
            {t("Shortcuts")}
            <ForwardedIconComponent
              name="Keyboard"
              className="ml-2 h-5 w-5 text-primary"
            />
          </h2>
          <p className="text-sm text-muted-foreground">
            {t("Manage Shortcuts for quick access to frequently used actions.")}
          </p>
        </div>
        <div>
          <div className="align-end flex w-full justify-end">
            <div className="justify center flex items-center">
              {open && (
                <EditShortcutButton
                  disable={selectedRows.length === 0}
                  shortcut={selectedRows}
                  defaultShortcuts={shortcuts}
                  open={open}
                  setOpen={setOpen}
                  setSelected={setSelectedRows}
                >
                  <div style={{ display: "none" }} />
                </EditShortcutButton>
              )}
              <Button
                variant="primary"
                className="ml-3"
                onClick={handleRestore}
              >
                <ForwardedIconComponent name="RotateCcw" className="mr-2 w-4" />
                  {t("Restore")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 pb-8">
        <div>
          {colDefs && nodesRowData.length > 0 && (
            <TableComponent
              suppressRowClickSelection={true}
              domLayout="autoHeight"
              pagination={false}
              columnDefs={colDefs}
              rowData={nodesRowData}
              onCellDoubleClicked={(e) => {
                setSelectedRows([e.data.name]);
                setOpen(true);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
