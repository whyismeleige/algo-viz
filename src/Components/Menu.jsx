import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import interact from "interactjs";
import clsx from "clsx";

export default function Menu(props) {
  const sampleData = [
    "Linear Search",
    "Binary Search",
    "Merge Sort",
    "Quick Sort",
    "Insertion Sort",
    "Bubble Sort",
    "Selection Sort"
  ];
  const menuRef = useRef(null);

  useEffect(() => {
    interact(menuRef.current).resizable({
      edges: { top: false, left: false, bottom: false, right: true },
      listeners: {
        move: function (event) {
          let { x, y } = event.target.dataset;

          x = (parseFloat(x) || 0) + event.deltaRect.left;
          y = (parseFloat(y) || 0) + event.deltaRect.top;

          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
            transform: `translate(${x}px, ${y}px)`,
          });

          Object.assign(event.target.dataset, { x, y });
        },
      },
    });
  });

  const [searchData, changeSearchData] = useState([]);
  const [searchInput, changeSearchInput] = useState("");

  const changeInput = (event) => {
    changeSearchInput(event.target.value);
  };

  useEffect(() => {
    const filteredData = sampleData.filter((item) =>
      item.toLowerCase().includes(searchInput.toLowerCase())
    );
    changeSearchData(filteredData);
  }, [searchInput]);

  const searchDataMap = searchData.map((data) => {
    return <li key={nanoid()} className={clsx({'inactive':props.algoRunning})} onClick={() => {
      if(data !== "Binary Search") props.generate(data);
      props.algoSearch(data);
    }}>{data}</li>;
  });

  return (
    <aside className="menu-container">
      <div className="menu" ref={menuRef}>
        <div className="menu-header">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={changeInput}
          />
        </div>
        <ul className="menu-body">{searchDataMap}</ul>
      </div>
    </aside>
  );
}
