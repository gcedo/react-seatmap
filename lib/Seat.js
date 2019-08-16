import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

class Seat extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    !this.props.isReserved && this.props.selectSeat();
  }

  render() {
    const {
      isSelected,
      isEnabled,
      isReserved
    } = this.props;
    const className = cx("Seat", {
      "Seat--selected": isSelected
    }, {
      "Seat--enabled": !isSelected && isEnabled && !isReserved
    }, {
      "Seat--reserved": isReserved
    });
    return React.createElement("div", {
      className: className,
      onClick: this.handleClick
    }, React.createElement("span", {
      className: "SeatNumber"
    }, this.props.seatNumber));
  }

}

Seat.propTypes = {
  isSelected: PropTypes.bool,
  isReserved: PropTypes.bool,
  seatNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selectSeat: PropTypes.func.isRequired
};
Seat.defaultProps = {
  isSelected: false
};
export default Seat;
