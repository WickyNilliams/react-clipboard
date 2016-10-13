var React = require("react");
var ReactDOM = require("react-dom");
var assign = require("react/lib/Object.assign");

function noop() {}

var Clipboard = React.createClass({

  propTypes: {
    value : React.PropTypes.string.isRequired,
    className : React.PropTypes.string,
    style : React.PropTypes.object,
    onCopy : React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      className : "clipboard",
      style : {
        position : "fixed",
        overflow : "hidden",
        clip     : "rect(0 0 0 0)",
        height   : 1,
        width    : 1,
        margin   : -1,
        padding  : 0,
        border   : 0
      },
      onCopy : noop
    };
  },

  componentDidMount: function() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    document.addEventListener("keyup", this.handleKeyUp, false);
  },

  componentWillUnmount: function() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
    document.removeEventListener("keyup", this.handleKeyUp, false);
  },

  render: function() {
    return React.createElement("textarea", assign({}, this.props, { readOnly: true, onCopy : this.handleCopy }));
  },

  handleCopy : function(e) {
    this.props.onCopy(e);
  },

  handleKeyDown : function(e) {
    var metaKeyIsDown = (e.ctrlKey || e.metaKey);
    var textIsSelected = window.getSelection().toString();

    if(!metaKeyIsDown || textIsSelected) {
      return;
    }

    var element = ReactDOM.findDOMNode(this);
    element.focus();
    element.select();
  },

  handleKeyUp : function(e) {
    var element = ReactDOM.findDOMNode(this);
    element.blur();
  }

});

module.exports = Clipboard;
