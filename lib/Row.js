import React, { Component } from "react";
import Seat from "./Seat";
import Blank from "./Blank";
import RowNumber from "./RowNumber";
import cx from "classnames";
import PropTypes from "prop-types";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over: false
    };
  }

  handleMouseMove(over) {
    this.setState({
      over
    });
  }

  render() {
    const {
      over
    } = this.state;
    const {
      rowNumber,
      isSelected
    } = this.props;
    const bold = over || isSelected;
    const className = cx("Row", {
      "Row--enabled": !isSelected
    }, {
      "Row--selected": isSelected
    });
    return React.createElement("div", {
      className: className,
      onMouseOut: this.handleMouseMove.bind(this, false),
      onMouseOver: this.handleMouseMove.bind(this, true)
    }, React.createElement(RowNumber, {
      rowNumber: rowNumber,
      bold: bold
    }), this.props.children);
  }

}

Row.propTypes = {
  rowNumber: PropTypes.string.isRequired
};
export default Row;