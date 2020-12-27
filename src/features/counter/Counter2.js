import React from "react";
import { connect } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync
} from "./counterSlice";
import styles from "./Counter.module.css";

const mapStateToProps = (state) => {
  return { count: state.counter.value };
};

const mapDispatchToProps = () => {
  return {
    decrement: decrement,
    increment: increment,
    incrementByAmount: incrementByAmount,
    incrementAsync: incrementAsync
  };
};

class Counter2C extends React.Component {
  componentDidMount() {
    this.setState({ incrementCount: "3" });
  }

  setIncrementAmount = (value) => {
    this.setState({ incrementCount: value });
  };

  render() {
    return (
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => this.props.increment()}
          >
            +
          </button>
          <span className={styles.value}>{this.props.count}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => this.props.decrement()}
          >
            -
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={this.state.incrementAmount}
            onChange={(e) => this.setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() =>
              this.props.incrementByAmount(
                Number(this.state.incrementAmount) || 0
              )
            }
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() =>
              this.props.incrementAsync(Number(this.state.incrementAmount) || 0)
            }
          >
            Add Async
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2C);
