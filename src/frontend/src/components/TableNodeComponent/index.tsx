import TableModal from "@/modals/tableModal";
import { FormatColumns, generateBackendColumnsFromValue } from "@/utils/utils";
import { DataTypeDefinition, SelectionChangedEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { cloneDeep } from "lodash";
import { useMemo, useRef, useState } from "react";
import { ForwardedIconComponent } from "../../components/genericIconComponent";
import { TableComponentType } from "../../types/components";
import { Button } from "../ui/button";

export default function TableNodeComponent({
  tableTitle,
  description,
  value,
  onChange,
  editNode = false,
  id = "",
  columns,
}: TableComponentType): JSX.Element {
  const dataTypeDefinitions: {
    [cellDataType: string]: DataTypeDefinition<any>;
  } = useMemo(() => {
    return {
      // override `date` to handle custom date format `dd/mm/yyyy`
      date: {
        baseDataType: "date",
        extendsDataType: "date",
        valueParser: (params) => {
          if (params.newValue == null) {
            return null;
          }
          // convert from `dd/mm/yyyy`
          const dateParts = params.newValue.split("/");
          return dateParts.length === 3
            ? new Date(
                parseInt(dateParts[2]),
                parseInt(dateParts[1]) - 1,
                parseInt(dateParts[0]),
              )
            : null;
        },
        valueFormatter: (params) => {
          let date = params.value;
          if (typeof params.value === "string") {
            date = new Date(params.value);
          }
          // convert to `dd/mm/yyyy`
          return date == null
            ? "‎"
            : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        },
      },
      number: {
        baseDataType: "number",
        extendsDataType: "number",
        valueFormatter: (params) =>
          params.value == null ? "‎" : `${params.value}`,
      },
    };
  }, []);
  const [selectedNodes, setSelectedNodes] = useState<Array<any>>([]);
  const agGrid = useRef<AgGridReact>(null);
  const componentColumns = columns
    ? columns
    : generateBackendColumnsFromValue(value ?? []);
  const AgColumns = FormatColumns(componentColumns);
  function setAllRows() {
    if (agGrid.current && !agGrid.current.api.isDestroyed()) {
      const rows: any = [];
      agGrid.current.api.forEachNode((node) => rows.push(node.data));
      onChange(rows);
    }
  }
  function deleteRow() {
    if (agGrid.current && selectedNodes.length > 0) {
      agGrid.current.api.applyTransaction({
        remove: selectedNodes.map((node) => node.data),
      });
      setSelectedNodes([]);
      setAllRows();
    }
  }
  function duplicateRow() {
    if (agGrid.current && selectedNodes.length > 0) {
      const toDuplicate = selectedNodes.map((node) => cloneDeep(node.data));
      setSelectedNodes([]);
      const rows: any = [];
      onChange([...value, ...toDuplicate]);
    }
  }
  function addRow() {
    const newRow = {};
    componentColumns.forEach((column) => {
      newRow[column.name] = null;
    });
    onChange([...value, newRow]);
  }

  function updateComponent() {
    setAllRows();
  }
  const editable = componentColumns.map((column) => {
    const isCustomEdit =
      column.formatter &&
      (column.formatter === "text" || column.formatter === "json");
    return {
      field: column.name,
      onUpdate: updateComponent,
      editableCell: isCustomEdit ? false : true,
    };
  });

  return (
    <div className={"flex w-full items-center"}>
      <div className="flex w-full items-center gap-3" data-testid={"div-" + id}>
        <TableModal
          dataTypeDefinitions={dataTypeDefinitions}
          autoSizeStrategy={{ type: "fitGridWidth", defaultMinWidth: 100 }}
          tableTitle={tableTitle}
          description={description}
          ref={agGrid}
          onSelectionChanged={(event: SelectionChangedEvent) => {
            setSelectedNodes(event.api.getSelectedNodes());
          }}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          editable={editable}
          pagination={true}
          addRow={addRow}
          onDelete={deleteRow}
          onDuplicate={duplicateRow}
          displayEmptyAlert={false}
          className="h-full w-full"
          columnDefs={AgColumns}
          rowData={value}
        >
          <Button
            variant="primary"
            size={editNode ? "xs" : "default"}
            className="w-full"
          >
            <ForwardedIconComponent name="Table" className="mt-px h-4 w-4" />
            <span className="font-normal">Open Table</span>
          </Button>
        </TableModal>
      </div>
    </div>
  );
}
