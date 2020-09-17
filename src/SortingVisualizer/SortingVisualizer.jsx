import React from 'react';
import './SortingVisualizer.css';

export class SortingVisualizer extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  //generates new array between values of 5 and 1000 inclusive
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomNum(5, 1000));
    }
    this.setState({array});
  }

  render() {
    const {array} = this.state;

    return (
      <>
        {array.map((value, idx) => (
          <div className="array-bar" key={idx}>
            {value}
          </div>
        ))}
      </>
    );
  }
}

// sets a random integer for the array value
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;