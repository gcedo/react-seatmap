'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Blank = (function (_React$Component) {
    function Blank() {
        _classCallCheck(this, Blank);

        _React$Component.apply(this, arguments);
    }

    _inherits(Blank, _React$Component);

    Blank.prototype.render = function render() {
        return _react2['default'].createElement('div', { style: { width: 35 } });
    };

    return Blank;
})(_react2['default'].Component);

exports['default'] = Blank;
module.exports = exports['default'];