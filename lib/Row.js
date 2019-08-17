"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Seat = _interopRequireDefault(require("./Seat"));

var _Blank = _interopRequireDefault(require("./Blank"));

var _RowNumber = _interopRequireDefault(require("./RowNumber"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Row extends _react.Component {
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
    const className = (0, _classnames.default)("Row", {
      "Row--enabled": !isSelected
    }, {
      "Row--selected": isSelected
    });
    return _react.default.createElement("div", {
      className: className,
      onMouseOut: this.handleMouseMove.bind(this, false),
      onMouseOver: this.handleMouseMove.bind(this, true)
    }, _react.default.createElement(_RowNumber.default, {
      rowNumber: rowNumber,
      bold: bold
    }), this.props.children);
  }

}

Row.propTypes = {
  rowNumber: _propTypes.default.string.isRequired
};
var _default = Row;
exports.default = _default;