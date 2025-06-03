import React from "react";

export class App extends React.Component {
  render() {
    const { title, name } = this.props
    return <div title={title}>Halllo Component {name} !</div>;
  }
}
