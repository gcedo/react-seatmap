import React, { Component } from "react";
import PropTypes from "prop-types";

class RowNumber extends Component {
  render() {
    const style = { fontWeight: this.props.bold ? 700 : "normal" };
    return (
      <div style={style} className="RowNumber">
        {this.props.rowNumber}
      </div>
    );
  }
}

RowNumber.propTypes = {
  rowNumber: PropTypes.string,
  bold: PropTypes.bool
};

export default RowNumber;

