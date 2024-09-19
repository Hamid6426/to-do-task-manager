"use client";

import React, { useState } from "react";
import { MdEdit } from 'react-icons/md';
import { MdClose } from "react-icons/md";

interface Task {
  id: string;
  title: string;
  desc: string;
  star: boolean;
  start: string;
  end: string;
  status: boolean;
}

interface UpdateTaskProps {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const UpdateTask: React.FC<UpdateTaskProps> = ({ task, tasks, setTasks }) => {
  const [updatedTask, setUpdatedTask] = useState<Task>(task);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUpdatedTask((prevTask) => ({
      ...prevTask,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = () => {
    const updatedTasks = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
    setTasks(updatedTasks);
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        <MdEdit className="text-xl md:text-2xl" />
        {showForm ? <MdClose /> : null}
      </button>

      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate();
          }}
        >
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={updatedTask.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="desc"
              value={updatedTask.desc}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Starred:</label>
            <input
              type="checkbox"
              name="star"
              checked={updatedTask.star}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="start"
              value={updatedTask.start}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              name="end"
              value={updatedTask.end}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Status (Completed):</label>
            <input
              type="checkbox"
              name="status"
              checked={updatedTask.status}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default UpdateTask;
