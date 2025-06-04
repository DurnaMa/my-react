import React from "react";

export class App extends React.Component {
  state = {
    counterValue: 3,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counterValue: Math.max(0, this.state.counterValue -1),
      })
    }, 1000);
  }

  render() {
    return <strong>Contdown = {this.state.counterValue}</strong>;
  }

  // render() {
  //   const { title, nameObj } = this.props;
  //   return (
  //     <div title={title}>
  //       Halllo Component {nameObj.prename} {nameObj.lastname} !
  //     </div>
  //   );
  // }
}
