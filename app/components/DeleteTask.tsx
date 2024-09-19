"use client";

import React from "react";
import { MdDelete } from 'react-icons/md';

interface Task {
  id: string;
  title: string;
  desc: string;
  star: boolean;
  start: string;
  end: string;
  status: boolean;
}

interface DeleteTaskProps {
  taskId: string;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId, tasks, setTasks }) => {
  const handleDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <button onClick={handleDelete}>
      <MdDelete className="text-xl md:text-2xl" />
    </button>
  );
};

export default DeleteTask;
