import React, { Component } from "react";

import { Switch } from "@blueprintjs/core";
import { Example, handleBooleanChange } from "@blueprintjs/docs-theme";
import { Cell, Column, Table, Utils } from "@blueprintjs/table";


const REORDERABLE_TABLE_DATA = [
  ["A", "Apple", "Ape", "Albania", "Anchorage"],
  ["B", "Banana", "Boa", "Brazil", "Boston"],
  ["C", "Cranberry", "Cougar", "Croatia", "Chicago"],
  ["D", "Dragonfruit", "Deer", "Denmark", "Denver"],
  ["E", "Eggplant", "Elk", "Eritrea", "El Paso"],
].map(([letter, fruit, animal, country, city]) => ({ letter, fruit, animal, country, city }));

class TableB extends Component {
  state = {
    columns: [
      <Column key="1" name="Letter" cellRenderer={this.getCellRenderer("letter")} />,
      <Column key="2" name="Fruit" cellRenderer={this.getCellRenderer("fruit")} />,
      <Column key="3" name="Animal" cellRenderer={this.getCellRenderer("animal")} />,
      <Column key="4" name="Country" cellRenderer={this.getCellRenderer("country")} />,
      <Column key="5" name="City" cellRenderer={this.getCellRenderer("city")} />,
    ],
    data: REORDERABLE_TABLE_DATA,
    enableColumnInteractionBar: false
  };

  toggleUseInteractionBar = handleBooleanChange(enableColumnInteractionBar =>
    this.setState({ enableColumnInteractionBar })
  );

  componentDidUpdate(_nextProps, nextState) {
    const { enableColumnInteractionBar } = this.state;
    if (nextState.enableColumnInteractionBar !== enableColumnInteractionBar) {
      const nextColumns = React.Children.map(this.state.columns, (column: JSX.Element) => {
        return React.cloneElement(column, { enableColumnInteractionBar });
      });
      this.setState({ columns: nextColumns });
    }
  }

  render() {
    const { enableColumnInteractionBar } = this.state;
    const options = (
      <Switch
        checked={enableColumnInteractionBar}
        label="Interaction bar"
        onChange={this.toggleUseInteractionBar}
      />
    );
    return (
      <Example options={options} showOptionsBelowExample={true} {...this.props}>
        <Table
          enableColumnReordering={true}
          enableColumnResizing={false}
          enableRowReordering={true}
          enableRowResizing={false}
          numRows={this.state.data.length}
          onColumnsReordered={this.handleColumnsReordered}
          onRowsReordered={this.handleRowsReordered}
          enableColumnInteractionBar={enableColumnInteractionBar}
        >
          {this.state.columns}
        </Table>
      </Example>
    );
  }

  getCellRenderer(key: string) {
    return (row: number) => <Cell>{this.state.data[row][key]}</Cell>;
  }

  handleColumnsReordered = (oldIndex, newIndex, length) => {
    if (oldIndex === newIndex) {
      return;
    }
    const nextChildren = Utils.reorderArray(this.state.columns, oldIndex, newIndex, length);
    this.setState({ columns: nextChildren });
  };

  handleRowsReordered = (oldIndex, newIndex, length) => {
    if (oldIndex === newIndex) {
      return;
    }
    this.setState({ data: Utils.reorderArray(this.state.data, oldIndex, newIndex, length) });
  };
}

export default TableB