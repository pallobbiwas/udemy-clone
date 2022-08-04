import React from "react";

const LearningTools = () => {
  return (
    <div className="mb-4">
      <div>
        <h1 className="mb-8 text-2xl font-bold">Learning reminders</h1>
        <h1 className="text-1xl font-bold">Calendar events</h1>
        <p className="mt-2 mb-1">
          Learning a little each day adds up. Research shows that students who
          make learning a habit are more likely to reach their goals. Set time
          aside to learn and get reminders using your learning scheduler.
        </p>
        <small className="text-blue-300">
          Requires Google Calendar, Apple Calendar, or Outlook
        </small>
      </div>
      <div className="flex btn w-64 rounded-none bg-purple-400 text-white outline-none border-none mt-3">
        <p>Schedule learning time </p>
        <p>
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
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold">Push notifications</h2>
        <p className="mt-5 mb-4">
          Don't want to schedule time blocks? Set a learning reminder to get
          push notifications from the Udemy mobile app.
        </p>
        <h6 className="font-bold">Text me a link to download the app</h6>
        <div className="mt-4 ">
          <label for="cars"></label>

          <select
            className="input input-bordered input-secondary w-2/4 rounded-none"
            id="cars"
          >
            <option value="volvo">+4(united state)</option>
            <option value="vw">+5(united state)</option>
            <option value="vw">+6(united state)</option>
            <option value="vw">+7(united state)</option>
            <option value="vw">+8(united state)</option>
            <option value="vw">+9(united state)</option>
            <option value="vw">+3(united state)</option>
            <option value="audi" selected>
              +3(united state)
            </option>
          </select>
          <br />
          <input
            placeholder="34567897877"
            className="input input-bordered input-secondary w-1/4 rounded-none mt-2"
            type="text"
          />
          <button className="btn btn-active rounded-none px-6">Send</button>
        </div>
        <div className="mb-16">
          <small>
            By providing your phone number, you agree to receive a one-time
            automated text message with a link to get app. Standard messaging
            rates may apply.
          </small>
        </div>
      </div>
    </div>
  );
};

export default LearningTools;
