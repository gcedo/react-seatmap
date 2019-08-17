"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Seat extends _react.Component {
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
    const className = (0, _classnames.default)("Seat", {
      "Seat--selected": isSelected
    }, {
      "Seat--enabled": !isSelected && isEnabled && !isReserved
    }, {
      "Seat--reserved": isReserved
    });
    return _react.default.createElement("div", {
      className: className,
      onClick: this.handleClick
    }, _react.default.createElement("span", {
      className: "SeatNumber"
    }, this.props.seatNumber));
  }

}

Seat.propTypes = {
  isSelected: _propTypes.default.bool,
  isReserved: _propTypes.default.bool,
  seatNumber: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  selectSeat: _propTypes.default.func.isRequired
};
Seat.defaultProps = {
  isSelected: false
};
var _default = Seat;
exports.default = _default;