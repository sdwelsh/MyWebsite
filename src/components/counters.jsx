import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onDecrement, onIncrement } = this.props;

    // state = {
    //   counters: [
    //     { id: 1, value: 4 },
    //     { id: 2, value: 0 },
    //     { id: 3, value: 0 },
    //     { id: 4, value: 0 },
    //     { id: 5, value: 0 },
    //   ],
    // };

    // handleDelete = (counterId) => {
    //   const counters = this.state.counters.filter((c) => c.id !== counterId);
    //   this.setState({ counters });
    // };

    // handleIncrement = (counter) => {
    //   const counters = [...this.state.counters];
    //   const index = counters.indexOf(counter);
    //   counters[index] = { ...counter };
    //   counters[index].value++;
    //   this.setState({ counters });
    // };

    // handleDecrement = (counter) => {
    //   console.log(counter);
    //   const counters = [...this.state.counters];
    //   const index = counters.indexOf(counter);
    //   counters[index] = { ...counter };
    //   counters[index].value === 0
    //     ? (counters[index].value = 0)
    //     : counters[index].value--;
    //   this.setState({ counters });
    // };

    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
