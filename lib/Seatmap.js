'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _immutableDistImmutableMinJs = require('immutable/dist/immutable.min.js');

var _immutableDistImmutableMinJs2 = _interopRequireDefault(_immutableDistImmutableMinJs);

var _Seat = require('./Seat');

var _Seat2 = _interopRequireDefault(_Seat);

var _Blank = require('./Blank');

var _Blank2 = _interopRequireDefault(_Blank);

var Seatmap = (function (_React$Component) {
    function Seatmap(props) {
        var _this = this;

        _classCallCheck(this, Seatmap);

        _React$Component.call(this, props);

        this.selectSeat = function (row, number) {
            var _state = _this.state;
            var selectedSeats = _state.selectedSeats;
            var size = _state.size;
            var _props = _this.props;
            var maxReservableSeats = _props.maxReservableSeats;
            var addSeatCallback = _props.addSeatCallback;
            var removeSeatCallback = _props.removeSeatCallback;

            var seatAlreadySelected = selectedSeats.get(row, _immutableDistImmutableMinJs.Set()).includes(number);

            if (size < maxReservableSeats && !seatAlreadySelected) {
                var _selectedSeats$mergeDeep;

                _this.setState({
                    selectedSeats: selectedSeats.mergeDeep((_selectedSeats$mergeDeep = {}, _selectedSeats$mergeDeep[row] = _immutableDistImmutableMinJs.Set([number]), _selectedSeats$mergeDeep)),
                    size: size + 1
                }, function () {
                    return addSeatCallback(row, number);
                });
            } else if (selectedSeats.has(row) && seatAlreadySelected) {
                _this.setState({
                    selectedSeats: selectedSeats.update(row, function (seats) {
                        return seats['delete'](number);
                    }),
                    size: size - 1
                }, function () {
                    return removeSeatCallback(row, number);
                });
            }
        };

        var rows = props.rows;
        var seatWidth = props.seatWidth;

        this.state = {
            selectedSeats: _immutableDistImmutableMinJs.Map(),
            size: 0,
            width: seatWidth * (1 + Math.max.apply(null, rows.map(function (row) {
                return row.length;
            })))
        };
    }

    _inherits(Seatmap, _React$Component);

    Seatmap.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return nextState.selectedSeats !== this.state.selectedSeats;
    };

    Seatmap.prototype.render = function render() {
        var width = this.state.width;

        return _react2['default'].createElement(
            'div',
            { style: { width: width } },
            this.renderRows()
        );
    };

    Seatmap.prototype.renderRows = function renderRows() {
        var _this2 = this;

        var seats = this.state.selectedSeats;
        var alpha = this.props.alpha;

        return this.props.rows.map(function (row, index) {
            var rowNumber = alpha ? String.fromCharCode('A'.charCodeAt(0) + index) : (index + 1).toString();
            var isSelected = !seats.get(rowNumber, _immutableDistImmutableMinJs.Set()).isEmpty();
            var props = {
                rowNumber: rowNumber,
                isSelected: isSelected,
                selectedSeat: null,
                seats: row,
                key: 'Row' + rowNumber,
                selectSeat: _this2.selectSeat
            };

            return _react2['default'].createElement(
                _Row2['default'],
                props,
                _this2.renderSeats(row, rowNumber, isSelected)
            );
        });
    };

    Seatmap.prototype.renderSeats = function renderSeats(seats, rowNumber, isRowSelected) {
        var _this3 = this;

        var _state2 = this.state;
        var selectedSeats = _state2.selectedSeats;
        var size = _state2.size;
        var maxReservableSeats = this.props.maxReservableSeats;

        return seats.map(function (seat, index) {
            if (seat === null) return _react2['default'].createElement(_Blank2['default'], { key: index });
            var isSelected = isRowSelected && selectedSeats.get(rowNumber).includes(seat.number);
            var props = {
                isSelected: isSelected,
                isReserved: seat.isReserved,
                isEnabled: size < maxReservableSeats,
                selectSeat: _this3.selectSeat.bind(_this3, rowNumber, seat.number),
                seatNumber: seat.number,
                key: index
            };
            return _react2['default'].createElement(_Seat2['default'], props);
        });
    };

    _createClass(Seatmap, null, [{
        key: 'propTypes',
        value: {
            addSeatCallback: _react.PropTypes.func,
            alpha: _react.PropTypes.bool,
            removeSeatCallback: _react.PropTypes.func,
            maxReservableSeats: _react.PropTypes.number,
            rows: _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.shape({
                number: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
                isReserved: _react.PropTypes.bool
            }))).isRequired,
            seatWidth: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            addSeatCallback: function addSeatCallback(row, number) {
                console.log('Added seat ' + number + ', row ' + row);
            },
            removeSeatCallback: function removeSeatCallback(row, number) {
                console.log('Removed seat ' + number + ', row ' + row);
            },
            seatWidth: 35
        },
        enumerable: true
    }]);

    return Seatmap;
})(_react2['default'].Component);

exports['default'] = Seatmap;
module.exports = exports['default'];