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

Some CSS is required to "hide" the textarea from the user's view. This should do it:

```css
.clipboard {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  z-index: 100;
  opacity: 0;
}
```

There's probably a nicer way, but this is functional.