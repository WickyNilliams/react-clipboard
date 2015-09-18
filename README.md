# react-clipboard

Component to allow the user to easily copy text. Based on the idea from Trello, described in this StackOverflow question: [How does Trello access the user's clipboard?](http://stackoverflow.com/questions/17527870/how-does-trello-access-the-users-clipboard)

## Install

```bash
npm install react-clipboard --save
```

## Usage

```js
var Clipboard = require("react-clipboard");

var App = React.createClass({

  render: function() {
    var text = JSON.stringify(this.props.data, null, "  ");

    return (
      <div>
        <p>Press Cmd + C to copy:</p>
        <pre>{text}</pre>
        <Clipboard value={text} />
      </div>
    );
  }
});
 
var data = { foo : 1, bar : 2 };
React.render(<App data={data} />, document.body);
```

Working example: http://jsfiddle.net/WickyNilliams/qm5e1rch/

## Further info

This component renders a textarea, whose value is the value prop. On keydown, if the user hasn't currently selected any text on the page *and* the <kbd>cmd</kbd> or <kbd>ctrl</kbd> key is pressed, then the textarea is focussed and the text inside it is selected. When the user hits the <kbd>c</kbd> key, the text inside the textarea is copied.

Inline styling is used to visibly hide the textarea. This can be overriden via the style prop.