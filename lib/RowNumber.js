"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class RowNumber extends _react.Component {
  render() {
    const style = {
      fontWeight: this.props.bold ? 700 : "normal"
    };
    return _react.default.createElement("div", {
      style: style,
      className: "RowNumber"
    }, this.props.rowNumber);
  }

}

RowNumber.propTypes = {
  rowNumber: _propTypes.default.string,
  bold: _propTypes.default.bool
};
var _default = RowNumber;
exports.default = _default;