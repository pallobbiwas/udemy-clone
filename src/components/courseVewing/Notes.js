import React, { useState } from "react";
import TextEditor from "./TextEditor";

const Notes = () => {
  const [change, setChange] = useState(true);
  const time = new Date().toLocaleTimeString();
  console.log(change);
  return (
    <div className="md:px-32 my-10">
      <button onClick={() => setChange(!change)} className="w-full border py-3">
        <div className="flex justify-between px-3">
          <div className="text-gray-500">Create a new note at {time}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </button>
      <div className={change ? "hidden" : "block"}>
        <TextEditor />
        <div className="text-end mr-4 mt-3" >
          <button className="btn btn-xs">Create</button>
        </div>
      </div>
      <div className="mt-4">
        <label for="cars"></label>

        <select
          className="mr-2 rounded-none input input-bordered input-accent w-56 max-w-xs"
          id="cars"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi" selected>
            Audi
          </option>
        </select>
        <label for="cars"></label>

        <select
          className="rounded-none input input-bordered input-accent w-full max-w-xs"
          id="cars"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi" selected>
            Audi
          </option>
        </select>
      </div>
      <div className="text-center my-32">
        <p>
          Click the "Create a new note" box, the "+" button, or press "B" to
          make your first note.
        </p>
      </div>
    </div>
  );
};

export default Notes;
