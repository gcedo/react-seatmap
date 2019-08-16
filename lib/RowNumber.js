import React, { Component } from "react";
import PropTypes from "prop-types";

class RowNumber extends Component {
  render() {
    const style = {
      fontWeight: this.props.bold ? 700 : "normal"
    };
    return React.createElement("div", {
      style: style,
      className: "RowNumber"
    }, this.props.rowNumber);
  }

}

RowNumber.propTypes = {
  rowNumber: PropTypes.string,
  bold: PropTypes.bool
};
export default RowNumber;