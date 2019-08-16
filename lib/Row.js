'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Seat = require('./Seat');

var _Seat2 = _interopRequireDefault(_Seat);

var _Blank = require('./Blank');

var _Blank2 = _interopRequireDefault(_Blank);

var _RowNumber = require('./RowNumber');

var _RowNumber2 = _interopRequireDefault(_RowNumber);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Row = (function (_React$Component) {
    function Row(props) {
        var _this = this;

        _classCallCheck(this, Row);

        _React$Component.call(this, props);

        this.handleMouseMove = function (over) {
            _this.setState({ over: over });
        };

        this.state = {
            over: false
        };
    }

    _inherits(Row, _React$Component);

    Row.prototype.render = function render() {
        var over = this.state.over;
        var _props = this.props;
        var rowNumber = _props.rowNumber;
        var isSelected = _props.isSelected;

        var bold = over || isSelected;
        var className = _classnames2['default']('Row', { 'Row--enabled': !isSelected }, { 'Row--selected': isSelected });
        return _react2['default'].createElement(
            'div',
            {
                className: className,
                onMouseOut: this.handleMouseMove.bind(this, false),
                onMouseOver: this.handleMouseMove.bind(this, true)
            },
            _react2['default'].createElement(_RowNumber2['default'], { rowNumber: rowNumber, bold: bold }),
            this.props.children
        );
    };

    _createClass(Row, null, [{
        key: 'propTypes',
        value: {
            rowNumber: _react.PropTypes.string.isRequired
        },
        enumerable: true
    }]);

    return Row;
})(_react2['default'].Component);

exports['default'] = Row;
module.exports = exports['default'];