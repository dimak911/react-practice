import { Component } from 'react';

export class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  // без Babel
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       value: this.props.initialValue,
  //     };
  //   }

  // c Babel
  state = {
    value: this.props.initialValue,
  };

  // handleIncrement(evt) {
  //   console.log('Increment button was clicked!', evt); // работает
  //   console.log('this.props: ', this.props); // Error: cannot read props of undefined
  // }

  // handleDecrement(evt) {
  //   console.log('Decrement button was clicked!', evt); // работает
  //   console.log('this.props: ', this.props); // Error: cannot read props of undefined
  // }

  //   handleIncrement = evt => {
  //     console.log('Increment button was clicked!', evt); // работает
  //     console.log('this.props: ', this.props); // работает
  //   };

  //   handleDecrement = evt => {
  //     console.log('Decrement button was clicked!', evt); // работает
  //     console.log('this.props: ', this.props); // работает
  //   };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
