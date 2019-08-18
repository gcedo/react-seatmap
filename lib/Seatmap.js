"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Row = _interopRequireDefault(require("./Row"));

var _immutableMin = _interopRequireWildcard(require("immutable/dist/immutable.min.js"));

var _Seat = _interopRequireDefault(require("./Seat"));

var _Blank = _interopRequireDefault(require("./Blank"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Seatmap extends _react.Component {
  constructor(props) {
    super(props);
    const {
      rows,
      seatWidth
    } = props;
    this.state = {
      selectedSeats: (0, _immutableMin.Map)(),
      size: 0,
      width: seatWidth * (1 + Math.max.apply(null, rows.map(row => row.length)))
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.selectedSeats !== this.state.selectedSeats;
  }

  selectSeat(row, number) {
    const {
      selectedSeats,
      size
    } = this.state;
    const {
      maxReservableSeats,
      addSeatCallback,
      removeSeatCallback
    } = this.props;
    const seatAlreadySelected = selectedSeats.get(row, (0, _immutableMin.Set)()).includes(number);

    if (size < maxReservableSeats && !seatAlreadySelected) {
      this.setState({
        selectedSeats: selectedSeats.mergeDeep({
          [row]: (0, _immutableMin.Set)([number])
        }),
        size: size + 1
      }, () => addSeatCallback(row, number));
    } else if (selectedSeats.has(row) && seatAlreadySelected) {
      this.setState({
        selectedSeats: selectedSeats.update(row, seats => seats.delete(number)),
        size: size - 1
      }, () => removeSeatCallback(row, number));
    }
  }

  render() {
    const {
      width
    } = this.state;
    return _react.default.createElement("div", {
      style: {
        width: width
      },
      className: "seatmap_container"
    }, this.renderRows());
  }

  renderRows() {
    const {
      selectedSeats: seats
    } = this.state;
    const {
      alpha
    } = this.props;
    return this.props.rows.map((row, index) => {
      const rowNumber = alpha ? String.fromCharCode('A'.charCodeAt(0) + index) : (index + 1).toString();
      const isSelected = !seats.get(rowNumber, (0, _immutableMin.Set)()).isEmpty();
      const props = {
        rowNumber,
        isSelected,
        selectedSeat: null,
        seats: row,
        key: `Row${rowNumber}`,
        selectSeat: this.selectSeat
      };
      return _react.default.createElement(_Row.default, props, this.renderSeats(row, rowNumber, isSelected));
    });
  }

  renderSeats(seats, rowNumber, isRowSelected) {
    const {
      selectedSeats,
      size
    } = this.state;
    const {
      maxReservableSeats
    } = this.props;
    return seats.map((seat, index) => {
      if (seat === null) return _react.default.createElement(_Blank.default, {
        key: index
      });
      const isSelected = isRowSelected && selectedSeats.get(rowNumber).includes(seat.number);
      const props = {
        isSelected,
        isReserved: seat.isReserved,
        isEnabled: size < maxReservableSeats,
        selectSeat: this.selectSeat.bind(this, rowNumber, seat.number),
        seatNumber: seat.number,
        key: index
      };
      return _react.default.createElement(_Seat.default, props);
    });
  }

}

Seatmap.defaultProps = {
  addSeatCallback: (row, number) => {
    console.log(`Added seat ${number}, row ${row}`);
  },
  removeSeatCallback: (row, number) => {
    console.log(`Removed seat ${number}, row ${row}`);
  },
  seatWidth: 35
};
Seatmap.propTypes = {
  addSeatCallback: _propTypes.default.func,
  alpha: _propTypes.default.bool,
  removeSeatCallback: _propTypes.default.func,
  maxReservableSeats: _propTypes.default.number,
  rows: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.shape({
    number: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    isReserved: _propTypes.default.bool
  }))).isRequired,
  seatWidth: _propTypes.default.number
};
var _default = Seatmap;
exports.default = _default;