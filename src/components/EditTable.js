import React from "react";
import { Table, TableBody } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { RowComponent } from "./RowComponent";

export const EditTable = ({
  data,
  header,
  editIndex,
  startEditing,
  saveEditing,
  handleChange,
  isAdding
}) => (
  <Table className="black">
    <TableHead>
      <TableRow>
        <TableCell className="black" />
        {header.map((x, i) => (
          <TableCell className="black" key={`thc-${i}`}>
            {x.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((x, i) => (
        <RowComponent
          key={`row-${i}`}
          x={x}
          i={i}
          header={header}
          editIndex={editIndex}
          startEditing={startEditing}
          saveEditing={saveEditing}
          handleChange={handleChange}
          isAdding={isAdding}
        />
      ))}
    </TableBody>
  </Table>
);
