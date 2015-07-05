var Clipboard = require("./index.js");
var React = require("react");

var App = React.createClass({
	
	handlePaste: function(event) {
		console.log('paste!');
		if (event.clipboardData.items[0]) {
			event.clipboardData.items[0].getAsString(function(string) {
				console.log('Pasted: ', string)
			});
		}
	},

	handleCopy: function(event) {
		console.log('copy!');
		//perform necessary copy logic
	},

	render: function() {
		var text = JSON.stringify(this.props.data, null, "  ");
	    return (
	      <div>
	        <p>Press Cmd + C to copy:</p>
	        <pre>{text}</pre>
	        <Clipboard 
	        	value={text}
	        	onPaste={this.handlePaste}
	        	onCopy={this.handleCopy}
	        />
	      </div>
	    );
  	}
});

var data = { foo : 1, bar : 2 };
React.render(<App data={data} />, document.body);

// event.clipboardData.getData(function (item) {
// 	console.log('item: ' + item);
// })