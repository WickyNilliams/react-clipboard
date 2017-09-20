import React from "react";
import ReactDOM from "react-dom";
import Clipboard from "react-clipboard";

class Mouse extends React.Component {
  handleMove = ({ clientX, clientY }) => {
    this.props.onMove({ x: clientX, y: clientY });
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMove);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMove);
  }

  render() {
    return null;
  }
}

class App extends React.Component {
  state = {
    pos: {
      x: 0,
      y: 0
    },
    copied: false
  };

  handleCopy = () => {
    clearTimeout(this.timer);
    this.setState({ copied: true });
    this.timer = setTimeout(() => this.setState({ copied: false }), 1000);
  };

  handleMove = pos => {
    this.setState({ pos });
  };

  render() {
    const { pos, copied } = this.state;
    const value = JSON.stringify(pos, null, "  ");

    return (
      <div>
        <Mouse onMove={this.handleMove} />
        <p>Press Cmd + C to copy mouse position</p>
        <pre>
          ({pos.x},{pos.y})
        </pre>
        <Clipboard value={value} onCopy={this.handleCopy} />
        {copied && <p>copied</p>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
