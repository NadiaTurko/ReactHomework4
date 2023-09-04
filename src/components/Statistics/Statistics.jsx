import React, { useState, useEffect } from "react";

function Statistics({ list }) {
  const [statistics, setStatistics] = useState({
    allTasks: 0,
    completedTasks: 0,
    inProgressTasks: 0,
  });
  const updateStatistics = () => {
    const allTasks = list.length;
    const completedTasks = list.filter((item) => item.completed).length;
    const inProgressTasks = allTasks - completedTasks;

    setStatistics({
      allTasks,
      completedTasks,
      inProgressTasks,
    });
  };
  useEffect(() => {
    updateStatistics();
  }, [list]);

  return (
    <div>
      <p>All tasks: {statistics.allTasks}</p>
      <p>Completed tasks: {statistics.completedTasks}</p>
      <p>in progress tasks: {statistics.inProgressTasks}</p>
    </div>
  );
}

export default Statistics;
