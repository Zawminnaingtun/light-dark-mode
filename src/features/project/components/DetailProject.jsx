import { useState } from "react";

export default function DetailProject() {
  const [visibleBox, setVisibleBox] = useState(null); // "box1" or "box2"

  const handleClick = (btn) => {
    if (btn === "Button 1") {
      setVisibleBox("box2"); // show opposite
    } else {
      setVisibleBox("box1"); // show opposite
    }
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex gap-4">
        <button
          onClick={() => handleClick("Button 1")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Button 1
        </button>
        <button
          onClick={() => handleClick("Button 2")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Button 2
        </button>
      </div>

      {visibleBox === "box1" && (
        <div className="p-4 bg-blue-300 text-black rounded">Box 1</div>
      )}
      {visibleBox === "box2" && (
        <div className="p-4 bg-green-300 text-black rounded">Box 2</div>
      )}
    </div>
  );
}
