'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Seat = (function (_React$Component) {
    function Seat() {
        var _this = this;

        _classCallCheck(this, Seat);

        _React$Component.apply(this, arguments);

        this.handleClick = function () {
            !_this.props.isReserved && _this.props.selectSeat();
        };
    }

    _inherits(Seat, _React$Component);

    Seat.prototype.render = function render() {
        var _props = this.props;
        var isSelected = _props.isSelected;
        var isEnabled = _props.isEnabled;
        var isReserved = _props.isReserved;

        var className = _classnames2['default']('Seat', { 'Seat--selected': isSelected }, { 'Seat--enabled': !isSelected && isEnabled && !isReserved }, { 'Seat--reserved': isReserved });
        return _react2['default'].createElement(
            'div',
            { className: className, onClick: this.handleClick },
            _react2['default'].createElement(
                'span',
                { className: 'SeatNumber' },
                this.props.seatNumber
            )
        );
    };

    _createClass(Seat, null, [{
        key: 'propTypes',
        value: {
            isSelected: _react.PropTypes.bool,
            isReserved: _react.PropTypes.bool,
            seatNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
            selectSeat: _react.PropTypes.func.isRequired
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            isSelected: false
        },
        enumerable: true
    }]);

    return Seat;
})(_react2['default'].Component);

exports['default'] = Seat;
module.exports = exports['default'];