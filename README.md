# react-clipboard

Component to allow the user to easily copy text. Based on the idea from Trello, described in this StackOverflow question: [How does Trello access the user's clipboard?](http://stackoverflow.com/questions/17527870/how-does-trello-access-the-users-clipboard)

## Install

```bash
npm install react-clipboard --save

#or...

yarn add react-clipboard
```

## Usage

See the [example](example).

### Props

```js
propTypes : {
  value : React.PropTypes.string.isRequired, // the value to be copied
  className : React.PropTypes.string, // class to apply to the <textarea />
  style : React.PropTypes.object, // styles if you'd like to override the defaults
  onCopy : React.PropTypes.func // callback for when value is copied
}
```

## Further info

This component renders a textarea, whose value is the value prop. On keydown, if the user hasn't currently selected any text on the page *and* the <kbd>cmd</kbd> or <kbd>ctrl</kbd> key is pressed, then the textarea is focussed and the text inside it is selected. When the user hits the <kbd>c</kbd> key, the text inside the textarea is copied.

Inline styling is used to visibly hide the textarea (this can be overriden via the `style` prop mentioned above)