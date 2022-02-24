import React from "react";
import {
  Cell,
  Column,
  ColumnHeaderCell,
  CopyCellsMenuItem,
  IMenuContext,
  SelectionModes,
  Table2,
  Utils,
} from "@blueprintjs/table";

const dollarCellRenderer = (rowIndex) => (
  <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
);
const euroCellRenderer = (rowIndex) => (
  <Cell>{`€${(rowIndex * 10 * 0.85).toFixed(2)}`}</Cell>
);

export default class Table extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div style={{"opacity": "0.8"}}>
        <Table2 numRows={5}>
          <Column name="Dollars" cellRenderer={dollarCellRenderer}/>
          <Column name="Euros" cellRenderer={euroCellRenderer} />
        </Table2>
        </div>
      </React.Fragment>
    );
  }
}
