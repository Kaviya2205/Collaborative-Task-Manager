// frontend/src/components/KanbanBoard.js
import React, { useState, useEffect } from "react";
import "./KanbanBoard.css";

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="kanban-board">
      <div className="column todo">
        <h2>To Do</h2>
        {tasks.filter(task => task.status === "todo").map(task => (
          <div key={task._id} className="task-card">{task.title}</div>
        ))}
      </div>
      <div className="column in-progress">
        <h2>In Progress</h2>
        {tasks.filter(task => task.status === "in-progress").map(task => (
          <div key={task._id} className="task-card">{task.title}</div>
        ))}
      </div>
      <div className="column done">
        <h2>Done</h2>
        {tasks.filter(task => task.status === "done").map(task => (
          <div key={task._id} className="task-card">{task.title}</div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
