'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _closing = require('../img/closing.png');

var _closing2 = _interopRequireDefault(_closing);

var _up = require('../img/up.png');

var _up2 = _interopRequireDefault(_up);

var _down = require('../img/down.png');

var _down2 = _interopRequireDefault(_down);

var _less = require('../img/less.png');

var _less2 = _interopRequireDefault(_less);

var _more_unfold = require('../img/more_unfold.png');

var _more_unfold2 = _interopRequireDefault(_more_unfold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardLayout = function (_React$Component) {
  _inherits(CardLayout, _React$Component);

  function CardLayout(props) {
    _classCallCheck(this, CardLayout);

    var _this = _possibleConstructorReturn(this, (CardLayout.__proto__ || Object.getPrototypeOf(CardLayout)).call(this, props));

    _this.state = {
      close: false
    };
    return _this;
  }

  _createClass(CardLayout, [{
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
          _props$more = _props.more,
          more = _props$more === undefined ? false : _props$more,
          _props$mode = _props.mode,
          mode = _props$mode === undefined ? 'dark' : _props$mode,
          closingInfo = _props.closingInfo,
          moreInfo = _props.moreInfo,
          onTouch = _props.onTouch;


      var border = {
        border: mode == 'pure' ? '1px solid #f0f2f5' : mode == 'light' ? '1px solid #ececec' : '1px solid #282a36',
        marginBottom: '1em',
        paddingBottom: '1em'
      };

      var style = {
        borderBottom: mode == 'pure' ? '1px solid #f0f2f5' : mode == 'light' ? '1px solid #ececec' : '1px solid #282a36',
        height: '3em',
        fontSize: '1.3em',
        backgroundColor: mode == 'pure' ? '' : mode == 'light' ? '#ececec' : '#282a36',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1em',
        color: mode == 'pure' ? '#000f20' : mode == 'light' ? '#000f20' : 'white',
        justifyContent: 'space-between'
      };
      var infoStyle = {
        padding: '0.5em 2em 0.5em 2em'
      };

      var closeInfoStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0.5em'
      };

      var titleStyle = {
        marginRight: '0.4em'
      };

      return _react2.default.createElement(
        'div',
        { style: border },
        _react2.default.createElement(
          'div',
          { style: style },
          _react2.default.createElement(
            'span',
            null,
            title
          ),
          _react2.default.createElement(
            'span',
            { style: titleStyle },
            more ? _react2.default.createElement(
              'a',
              { onClick: onTouch },
              moreInfo ? moreInfo : "more"
            ) : this.state.close ? _react2.default.createElement(
              'span',
              { onClick: function onClick(status) {
                  return _this2.onChange(status = false);
                } },
              _react2.default.createElement('img', { src: mode == 'dark' ? _more_unfold2.default : _down2.default })
            ) : _react2.default.createElement(
              'span',
              { onClick: function onClick(status) {
                  return _this2.onChange(status = true);
                } },
              _react2.default.createElement('img', { src: mode == 'dark' ? _less2.default : _up2.default })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this.state.close ? _react2.default.createElement(
            'div',
            { style: closeInfoStyle },
            _react2.default.createElement('img', { src: _closing2.default }),
            ' ',
            closingInfo ? closingInfo : "收起中"
          ) : _react2.default.createElement(
            'div',
            { style: infoStyle },
            children
          )
        )
      );
    }
  }]);

  return CardLayout;
}(_react2.default.Component);

exports.default = CardLayout;