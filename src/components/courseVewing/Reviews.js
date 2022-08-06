import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className="md:px-32 my-10">
        <h1>Student feedback</h1>
        <div className="flex">
          <div>
            <h1>4.5</h1>
            <h1>********</h1>
            <h1>Course Rating</h1>
          </div>
          <div>
            <progress class="progress w-56" value="100" max="100"></progress><br />
            <progress class="progress w-56" value="70" max="100"></progress><br />
            <progress class="progress w-56" value="400" max="100"></progress><br />
            <progress class="progress w-56" value="10" max="100"></progress><br />
            <progress class="progress w-56" value="0" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
