"use client";

import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

interface Task {
  id: string;
  title: string;
  desc: string;
  star: boolean;
  start: string;
  end: string;
  status: boolean;
}

interface CreateTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const CreateTask: React.FC<CreateTaskProps> = ({ tasks, setTasks }) => {
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState<Task>({
    id: "",
    title: "",
    desc: "",
    star: false,
    start: "",
    end: "",
    status: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const createTask = () => {
    const newTaskWithId = { ...newTask, id: (tasks.length + 1).toString() };
    setTasks((prevTasks) => [...prevTasks, newTaskWithId]);
    setShowForm(false); // Hide the form after submission
    setNewTask({ id: "", title: "", desc: "", star: false, start: "", end: "", status: false }); // Reset form
  };

  return (
    <div>
      <div className="w-full h-12 bg-gradient-to-r from-sky-600 to-blue-400 rounded-xl">
        <button
          className="h-12 w-full px-4 flex items-center flex-row justify-between"
          onClick={() => setShowForm(!showForm)}
        >
          Add a New Task
          {showForm ? <MdClose className="h-8 w-auto" /> : <MdAdd className="h-8 w-auto" />}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTask();
          }}
          className="w-full md:w-[49%] mt-4 bg-white p-8 flex flex-col rounded-lg border-2 border-[#aaa]"
        >
          <div className="flex flex-col">
            <label className="text-lg font-bold mb-1">Title:</label>
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              placeholder="Exercise"
              required
              className="border-2 pl-2 mb-2 border-gray-500 rounded-md p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold mb-1">Description:</label>
            <input
              type="text"
              name="desc"
              value={newTask.desc}
              placeholder="I will do some running"
              onChange={handleInputChange}
              required
              className="border-2 pl-2 mb-2 border-gray-500 rounded-md p-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold mb-1">Start Date:</label>
            <input
              type="date"
              name="start"
              value={newTask.start}
              onChange={handleInputChange}
              required
              className="border-2 pl-2 mb-2 border-gray-500 rounded-md p-1"

            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold mb-1">End Date:</label>
            <input
              type="date"
              name="end"
              value={newTask.end}
              onChange={handleInputChange}
              required
              className="border-2 pl-2 mb-2 border-gray-500 rounded-md p-1"

            />
          </div>
          <div className="flex flex-row mb-2 mt-2">
            <label className="text-lg font-bold mr-4">Important:&nbsp;</label>
            <input
              type="checkbox"
              name="star"
              checked={newTask.star}
              onChange={handleInputChange}
              className="w-5 h-5 mt-1"
            />
          </div>
          <div className="flex flex-row mb-8">
            <label className="text-lg font-bold mr-4">Completed:</label>
            <input
              type="checkbox"
              name="status"
              checked={newTask.status}
              onChange={handleInputChange}
              className="w-5 h-5 mt-1"
            />
          </div >
          <button type="submit" className="text-2xl font-bold bg-blue-400 py-2 rounded-full flex flex-row justify-center">Create Task</button>
        </form>
      )}
    </div>
  );
};

export default CreateTask;
