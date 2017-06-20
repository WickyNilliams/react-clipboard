var React = require("react");
var ReactDOM = require("react-dom");
var Clipboard = require("react-clipboard");

var App = React.createClass({

  render: function() {
    var value = JSON.stringify(this.props.data, null, "  ");

    return (
      <div>
        <p>Press Cmd + C to copy:</p>
        <pre>{value}</pre>
        <Clipboard value={value} onCopy={this.handleCopy} />
      </div>
    );
  },

  handleCopy : function(e) {
    console.log("copied", e);
  }

});

var data = { foo : 1, bar : 2 };
ReactDOM.render(
  <App data={data} />,
  document.querySelector("#app")
);