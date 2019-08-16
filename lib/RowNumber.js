'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var RowNumber = (function (_React$Component) {
    function RowNumber() {
        _classCallCheck(this, RowNumber);

        _React$Component.apply(this, arguments);
    }

    _inherits(RowNumber, _React$Component);

    RowNumber.prototype.render = function render() {
        var style = { fontWeight: this.props.bold ? 700 : 'normal' };
        return _react2['default'].createElement(
            'div',
            { style: style, className: 'RowNumber' },
            this.props.rowNumber
        );
    };

    _createClass(RowNumber, null, [{
        key: 'propTypes',
        value: {
            rowNumber: _react.PropTypes.string,
            bold: _react.PropTypes.bool
        },
        enumerable: true
    }]);

    return RowNumber;
})(_react2['default'].Component);

exports['default'] = RowNumber;
module.exports = exports['default'];