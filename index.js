var React = require("react");

var Clipboard = React.createClass({

  propTypes: {
    value : React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      className : "clipboard"
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
    return this.transferPropsTo(React.DOM.textarea({ readOnly: true }));
  },

  handleKeyDown : function(e) {
    var metaKeyIsDown = (e.ctrlKey || e.metaKey);
    var textIsSelected = window.getSelection().toString();

    if(!metaKeyIsDown || textIsSelected) {
      return;
    }

    var element = this.getDOMNode();
    element.focus();
    element.select();
  },

  handleKeyUp : function(e) {
    var element = this.getDOMNode();
    element.blur();
  }

});

module.exports = Clipboard;