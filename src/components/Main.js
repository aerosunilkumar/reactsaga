import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { EditTable } from "./EditTable";

class Main extends Component {
  state = {
    editIndex: -1,
    isAdding: false
  };

  addNewRow = () => {
    const { data, updateMainItemsList, year } = this.props;
    let addedIndex = data.push({
      projectName: "",
      wellCount: 0,
      values: {
        [`total${year}`]: 0,
        [`jan${year}`]: 0,
        [`feb${year}`]: 0,
        [`mar${year}`]: 0,
        [`apr${year}`]: 0,
        [`may${year}`]: 0,
        [`jun${year}`]: 0,
        [`jul${year}`]: 0,
        [`aug${year}`]: 0,
        [`sep${year}`]: 0,
        [`oct${year}`]: 0,
        [`nov${year}`]: 0,
        [`dec${year}`]: 0
      }
    });

    this.setState({ editIndex: addedIndex - 1, isAdding: true });
    updateMainItemsList(data);
  };

  startEditing = i => {
    this.setState({ editIndex: i, isAdding: false });
  };

  saveEditing = newData => {
    this.setState({ editIndex: -1, isAdding: false });
  };

  handleChange = (e, propName, index) => {
    const { value } = e.target;
    const { data, updateMainItemsList } = this.props;
    var newUpdatedData = data.map((row, i) =>
      index === i ? { ...row, [propName]: value } : row
    );
    updateMainItemsList(newUpdatedData);
  };

  getFormattedData = () => {
    const { data } = this.props;
    let formattedData = [];
    data.map(function(item) {
      let newFormattedItem = {
        projectName: item.projectName,
        wellCount: item.wellCount
      };
      Object.keys(item.values).map(function(key) {
        newFormattedItem = {
          ...newFormattedItem,
          [key]: item.values[key]
        };
        return newFormattedItem;
      });
      formattedData.push(newFormattedItem);
      return formattedData;
    });
    return formattedData;
  };

  renderHeaders = () => {
    const { year } = this.props;
    return [
      {
        name: "",
        prop: "projectName"
      },
      {
        name: "Well Count",
        prop: "wellCount"
      },
      {
        name: `${year} Total(MM)`,
        prop: `total${year}`
      },
      {
        name: "Jan",
        prop: `jan${year}`
      },
      {
        name: "Feb",
        prop: `feb${year}`
      },
      {
        name: "Mar",
        prop: `mar${year}`
      },
      {
        name: "Apr",
        prop: `apr${year}`
      },
      {
        name: "May",
        prop: `may${year}`
      },
      {
        name: "Jun",
        prop: `jun${year}`
      },
      {
        name: "Jul",
        prop: `jul${year}`
      },
      {
        name: "Aug",
        prop: `aug${year}`
      },
      {
        name: "Sep",
        prop: `sep${year}`
      },
      {
        name: "Oct",
        prop: `oct${year}`
      },
      {
        name: "Nov",
        prop: `nov${year}`
      },
      {
        name: "Dec",
        prop: `dec${year}`
      }
    ];
  };

  render() {
    return (
      <div className="App">
        <div>
          <Button
            className="black create-project-btn"
            onClick={this.addNewRow}
            disabled={this.state.editIndex !== -1}
            variant="contained"
            color="primary"
          >
            Create Project
            <AddIcon />
          </Button>
        </div>
        <EditTable
          data={this.getFormattedData()}
          editIndex={this.state.editIndex}
          isAdding={this.state.isAdding}
          startEditing={this.startEditing}
          saveEditing={this.saveEditing}
          handleChange={this.handleChange}
          header={this.renderHeaders()}
        />
      </div>
    );
  }
}

export default Main;
