import React from 'react';
import './SortingVisualizer.css';
import {getMergeAnimations} from '../Algos/mergesort';
import {getQuickSortAnimations} from '../Algos/quicksort';
import {getBubbleSortAnimations} from '../Algos/bubblesort';
import {getSelectionSortAnimations} from '../Algos/selectionsort';

// some global constants
const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_BARS = 180;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'purple';

export class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  //generates new array between values set inclusive
  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randomNum(5, 730));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort() {
    const [animations,sortArray] = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
      const arrayBars = document.getElementsByClassName('array-bar');
      if(isColorChange === true) {
          const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
          const [temp, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          },i * ANIMATION_SPEED_MS);
      }
      else {
          const [temp, barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          },i * ANIMATION_SPEED_MS);  
      }
    }
  }

  quickSort() {
    const [animations,sortArray] = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if(isColorChange === true) {
          const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
          const [comparision, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          },i * ANIMATION_SPEED_MS);
      }
      else {
          const [swap, barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
              continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          },i * ANIMATION_SPEED_MS);  
      }        
    }
  }

  bubbleSort() {
    const [animations,sortArray] = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if(isColorChange === true) {
          const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
          const [comparision, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          },i * ANIMATION_SPEED_MS);
      }
      else {
          const [swap, barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
              continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          },i * ANIMATION_SPEED_MS);  
      }
    }
  }
        
  render() {
    const {array} = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              }}>
          </div>
        ))}
        <button onClick={() => this.resetArray()}> New Array </button>
        <button onClick={() => this.selectionSort()}> Selection Sort </button>
        <button onClick={() => this.quickSort()}> Quick Sort </button>
        <button onClick={() => this.mergeSort()}> Merge Sort </button>
        <button onClick={() => this.bubbleSort()}> Bubble Sort </button>
      </div>
    );
  }
}

// sets a random integer for the array value
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// for debugging
// function to check if original and copied arrays are the same
// function equalArrays(first_array, second_array) {
//   if (first_array.length !== second_array.length) return false;
//   for (let i = 0; i < first_array.length; i++) {
//     if (first_array[i] !== second_array[i]) {
//       return false;
//     }
//   }

//   return true;
// }

export default SortingVisualizer;