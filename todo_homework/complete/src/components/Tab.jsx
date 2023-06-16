import React from "react";

const Tab = ({ filter, setFilter }) => {
  const setActiveTab = (tab) => {
    return tab === filter ? "is-active" : "";
  };

  return (
    <div className="tabs is-centered is-large">
      <ul>
        <li className={setActiveTab("default")}>
          <a onClick={() => setFilter("default")}>All</a>
        </li>
        <li className={setActiveTab("inProgress")}>
          <a onClick={() => setFilter("inProgress")}>In Progress</a>
        </li>
        <li className={setActiveTab("completed")}>
          <a onClick={() => setFilter("completed")}>Completed</a>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
