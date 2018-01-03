'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleBtn = function (_React$Component) {
  _inherits(SimpleBtn, _React$Component);

  function SimpleBtn(props) {
    _classCallCheck(this, SimpleBtn);

    var _this = _possibleConstructorReturn(this, (SimpleBtn.__proto__ || Object.getPrototypeOf(SimpleBtn)).call(this, props));

    _this.state = {
      close: false
    };
    return _this;
  }

  _createClass(SimpleBtn, [{
    key: 'onChange',
    value: function onChange(status) {
      this.setState({
        close: status
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          _props$title = _props.title,
          title = _props$title === undefined ? "title" : _props$title,
          _props$titleColor = _props.titleColor,
          titleColor = _props$titleColor === undefined ? '#606f84' : _props$titleColor,
          _props$more = _props.more,
          more = _props$more === undefined ? '' : _props$more,
          _props$add = _props.add,
          add = _props$add === undefined ? '' : _props$add,
          _props$mode = _props.mode,
          mode = _props$mode === undefined ? 'dark' : _props$mode;

      var style = {
        border: mode == 'dark' ? '1px solid #606f84' : '0px solid #606f84',
        marginBottom: '1em',
        minWidth: 800,
        paddingBottom: '1em'
      };
      var borderStyle = {
        border: '1px solid #606f84',
        borderStyle: 'none none solid none',
        height: '3em',
        fontSize: '1.3em',
        backgroundColor: titleColor,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1em',
        color: '#ffffff',
        justifyContent: 'space-between'
      };
      var infoStyle = {
        padding: ' 0.5em 2em 0.5em 2em',
        marginTop: '1em'
      };

      var pureStyle = {
        borderBottom: '3px solid #6a6f84',
        height: '3em',
        fontSize: '1.4em',
        display: 'flex',
        color: '#6a6f84',
        alignItems: 'center',
        margin: '0 1em 0 1em'
      };

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'div',
          { style: mode == 'dark' ? borderStyle : pureStyle },
          _react2.default.createElement(
            'span',
            null,
            title,
            _react2.default.createElement(
              'span',
              null,
              add ? _react2.default.createElement(
                Button,
                { style: { marginLeft: '1em', fontSize: '0.9em', backgroundColor: '#8392a8', color: '#ffffff', border: 'none', height: '1.5em' }, onClick: add.onTouch },
                add.title
              ) : _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(
            'span',
            { style: { marginRight: '0.4em' } },
            more ?
            // <span></span>
            _react2.default.createElement(
              'a',
              { style: { marginRight: '1em', fontSize: '0.9em', color: '#ffffff' }, onClick: more.onTouch },
              more.title
            ) : _react2.default.createElement('span', null),
            this.state.close ? _react2.default.createElement(Icon, { type: 'down', onClick: function onClick(status) {
                return _this2.onChange(status = false);
              } }) : _react2.default.createElement(Icon, { type: 'up', onClick: function onClick(status) {
                return _this2.onChange(status = true);
              } })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this.state.close ? _react2.default.createElement(
            'div',
            { style: { textAlign: 'center', margin: '1em 0' } },
            _react2.default.createElement(Icon, { type: 'frown-o' }),
            _react2.default.createElement(FormattedMessage, { id: 'closing' })
          ) : _react2.default.createElement(
            'div',
            { style: infoStyle },
            children
          )
        )
      );
    }
  }]);

  return SimpleBtn;
}(_react2.default.Component);

exports.default = SimpleBtn;