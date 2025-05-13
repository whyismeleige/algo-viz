import Header from "./Components/Header";
import Menu from "./Components/Menu";
import MainMarkdown from "./Components/Markdown";
import Buttons from "./Components/Buttons";
import { useState } from "react";
import { BinarySearch, LinearSearch } from "./Algorithms/SearchAlgos";
import clsx from "clsx";
import { nanoid } from "nanoid";
import {
  BogoSort,
  BubbleSort,
  InsertionSort,
  MergeSort,
  QuickSort,
  SelectionSort,
} from "./Algorithms/SortingAlgos";
import { createBeep } from "./Misc/SoundEffects";

const minVal = 10;
const maxVal = 600;

export default function App() {
  // Button States
  const [arrSize, setArrSize] = useState(50);
  const [barArr, setBarArr] = useState([]);
  const [searchAlgo, setSearchAlgo] = useState(false);
  const [generateProg, setGenerateProg] = useState(false);
  const [currAlgo, setCurrAlgo] = useState("Program");
  const [searchNum, setSearchNum] = useState(50);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [startAlgo, setStartAlgo] = useState(false);
  const [logs, setLogs] = useState([]);

  // Functions
  const changeArrSize = (event) => setArrSize(event.target.value);

  const changeAnimationSpeed = (event) => setAnimationSpeed(event.target.value);

  const generateArr = (algorithm) => {
    resetStyles();
    let randArr = [];
    for (let i = 0; i < arrSize; i++) {
      randArr.push(Math.ceil(Math.random() * (maxVal - minVal) + minVal));
    }
    if (algorithm === "Binary Search" && currAlgo === "Binary Search")
      randArr.sort((a, b) => a - b);
    setBarArr(randArr);
  };

  const algoChoose = (algorithm) => {
    resetStyles();
    setGenerateProg(true);
    algorithm.includes("Search") ? setSearchAlgo(true) : setSearchAlgo(false);
    if (algorithm == "Binary Search") {
      let randArr = [];
      for (let i = 0; i < arrSize; i++) {
        randArr.push(Math.ceil(Math.random() * (maxVal - minVal) + minVal));
      }
      randArr.sort((a, b) => a - b);
      setBarArr(randArr);
    }
    setCurrAlgo(algorithm);
  };

  const runAlgo = () => {
    document
      .querySelector(".markdown-container")
      .scrollIntoView({ behavior: "smooth" });
    resetStyles();
    setLogs([]);
    setStartAlgo((prev) => !prev);
    let logArr = [];
    logArr.push(`Original Array = [${barArr}]`);
    logArr.push(`Sorting Array with ${currAlgo}`);

    if (currAlgo === "Linear Search") animateLinearSearch();
    if (currAlgo === "Binary Search") animateBinarySearch();
    if (currAlgo === "Merge Sort") animateMergeSort(logArr);
    if (currAlgo === "Quick Sort") animateQuickSort(logArr);
    if (currAlgo === "Bubble Sort") animateBubbleSort(logArr);
    if (currAlgo === "Selection Sort") animateSelectionSort(logArr);
    if (currAlgo === "Insertion Sort") animateInsertionSort(logArr);
  };

  const changeSearchValue = (event) => {
    setSearchNum(event.target.value);
  };

  const resetStyles = () => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const arrayBlocks = document.getElementsByClassName("array-block");
    const cls = ["active-bar", "active-block", "target-bar", "target-block"];
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].classList.remove(...cls);
      arrayBlocks[i].classList.remove(...cls);
    }
  };

  //Map
  let barMap = barArr.map((item, idx) => {
    return (
      <div
        key={idx}
        className="array-bar"
        style={{ height: `${item / 10}vh` }}
      ></div>
    );
  });

  const blockMap = barArr.map((item, idx) => {
    return (
      <div key={idx} className="array-block">
        {item}
      </div>
    );
  });

  let logMap = logs.map((log) => <p key={nanoid()}>{log}</p>);

  // Search Functions
  const animateLinearSearch = () => {
    const logArr = [];
    let len = LinearSearch(barArr, logArr, searchNum);
    const arrayBars = document.getElementsByClassName("array-bar");
    const arrayBlocks = document.getElementsByClassName("array-block");
    let flag = false;
    pushLog(logArr[0]);
    pushLog(logArr[1]);
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        if (i == len - 1) flag = true;
        arrayBars[i].classList.add("active-bar");
        arrayBlocks[i].classList.add("active-block");
        createBeep(barArr[i]);
        pushLog(logArr[i + 2]);
        if (flag) setStartAlgo(false);
      }, i * animationSpeed);
    }
    if (len !== barArr.length) {
      setTimeout(() => {
        pushLog(logArr[len]);
        arrayBars[len].classList.add("target-bar");
        arrayBlocks[len].classList.add("target-block");
        createBeep(barArr[len]);
      }, len * animationSpeed);
    }
  };

  const animateBinarySearch = () => {
    let logArr = [];
    const animateArr = BinarySearch(barArr, logArr, searchNum);
    const arrayBars = document.getElementsByClassName("array-bar");
    const arrayBlocks = document.getElementsByClassName("array-block");
    let flag = false;
    pushLog(logArr[0]);
    pushLog(logArr[1]);
    for (let i = 0; i < animateArr.length; i++) {
      let val = animateArr[i];
      setTimeout(() => {
        if (i == animateArr.length - 1) flag = true;
        pushLog(logArr[i + 2]);
        arrayBars[val].classList.add(
          barArr[val] == searchNum ? "target-bar" : "active-bar"
        );
        arrayBlocks[val].classList.add(
          barArr[val] == searchNum ? "target-block" : "active-block"
        );
        createBeep(barArr[val]);
        if (flag) setStartAlgo(false);
      }, i * animationSpeed);
    }
  };

  // Sorting Functions
  const animate = (animateArr, logArr) => {
    const arrayBars = document.getElementsByClassName("array-bar");
    const arrayBlocks = document.getElementsByClassName("array-block");
    let flag = false;
    for (let i = 0; i < logArr.length; i++) {
      setTimeout(() => {
        pushLog(logArr[i]);
      }, i * animationSpeed);
    }
    for (let i = 0; i + 1 < animateArr.length; i += 2) {
      const [first, second] = animateArr[i];
      const [third, fourth] = animateArr[i + 1];
      setTimeout(() => {
        if (i == animateArr.length - 2) flag = true;
        swap(first, second, arrayBars, arrayBlocks);
        swap(third, fourth, arrayBars, arrayBlocks);
        createBeep(fourth);
        setTimeout(() => {
          resetStyles();
        }, i * animationSpeed);
        if (flag) {
          runThroughAnimate(arrayBars, arrayBlocks);
          setStartAlgo(false);
        }
      }, i * animationSpeed);
    }
  };

  const animateMergeSort = (logArr) => {
    const animateArr = MergeSort(barArr, logArr);
    animate(animateArr, logArr);
  };

  const animateQuickSort = (logArr) => {
    const animateArr = QuickSort(barArr, logArr);
    animate(animateArr, logArr);
  };

  const animateBubbleSort = (logArr) => {
    const animateArr = BubbleSort(barArr, logArr);
    animate(animateArr, logArr);
  };

  const animateSelectionSort = (logArr) => {
    const animateArr = SelectionSort(barArr, logArr);
    animate(animateArr, logArr);
  };

  const animateInsertionSort = (logArr) => {
    const animateArr = InsertionSort(barArr, logArr);
    animate(animateArr, logArr);
  };

  const isSorted = (array) => {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) return false;
    }
    return true;
  };
  const runThroughAnimate = (arrayBars, arrayBlocks) => {
    let tempArr = barArr;
    tempArr.sort((a, b) => a - b);
    for (let i = 0; i <= arrayBars.length - 1; i++) {
      setTimeout(() => {
        arrayBars[i].classList.add("active-bar");
        arrayBlocks[i].classList.add("active-block");
        createBeep(tempArr[i]);
      }, i * animationSpeed);
    }
  };

  const pushLog = (logTrace) => {
    setLogs((prevLogs) => [...prevLogs, logTrace]);
    let logs = document.querySelector(".log-tracer");
    logs.scrollTop = logs.scrollHeight;
  };

  const swap = (first, second, arrayBars, arrayBlocks) => {
    let firstBar = arrayBars[first];
    let firstBlock = arrayBlocks[first];
    firstBlock.classList.add("active-block");
    firstBar.classList.add("active-bar");
    firstBar.style.height = `${second / 10}vh`;
    firstBlock.innerText = second;
  };

  return (
    <>
      <Header />
      {generateProg && (
        <Buttons
          setSlider={changeArrSize}
          sliderVal={arrSize}
          generateArr={generateArr}
          isSearch={searchAlgo}
          currAlgo={currAlgo}
          changeSearchValue={changeSearchValue}
          searchValue={searchNum}
          runAlgo={runAlgo}
          animationSpeed={animationSpeed}
          setAnimationSpeed={changeAnimationSpeed}
          algoRunning={startAlgo}
        />
      )}
      <main>
        <Menu
          generate={generateArr}
          algoSearch={algoChoose}
          algoRunning={startAlgo}
        />
        <MainMarkdown
          barDisplay={barMap}
          blockDisplay={blockMap}
          logs={logMap}
          generateProg={generateProg}
        />
      </main>
    </>
  );
}
