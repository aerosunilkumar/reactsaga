import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";

export class RowComponent extends Component {
  render() {
    const {
      x,
      i,
      header,
      editIndex,
      startEditing,
      saveEditing,
      handleChange,
      isAdding
    } = this.props;
    const currentlyEditing = editIndex === i;
    return (
      <TableRow key={`tr-${i}`}>
        <TableCell className={`black ${currentlyEditing ? "selected" : ""}`}>
          {currentlyEditing ? (
            <CheckIcon
              className={`black ${currentlyEditing ? "selected" : ""}`}
              onClick={() => {
                saveEditing(x);
              }}
            />
          ) : (
            <EditIcon
              className={`black ${currentlyEditing ? "selected" : ""}`}
              onClick={() => {
                startEditing(i);
              }}
            />
          )}
        </TableCell>
        {header.map((y, k) => (
          <TableCell
            className={`black ${currentlyEditing ? "selected" : ""}`}
            key={`trc-${k}`}
          >
            {currentlyEditing && (y.prop !== "projectName" || isAdding) ? (
              <TextField
                fullWidth={true}
                className={`black ${currentlyEditing ? "selected" : ""}`}
                name={y.prop}
                onChange={e => {
                  handleChange(e, y.prop, i);
                }}
                value={x[y.prop]}
              />
            ) : (
              x[y.prop]
            )}
          </TableCell>
        ))}
      </TableRow>
    );
  }
}
