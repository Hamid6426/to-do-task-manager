"use client"

import React, { useState } from "react";
import tasksData from "../lib/tasks";
import CreateTask from './CreateTask'
import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";
import { MdStar, MdStarBorder } from "react-icons/md"

interface Task {
  id: string;
  title: string;
  desc: string;
  star: boolean;
  start: string;
  end: string;
  status: boolean;
}

export default function AllTasks() {

  const [tasks, setTasks] = useState<Task[]>(tasksData);

  return (
    <div id="sidebar" className='p-4 mb-8 mt-8 rounded-xl w-screen lg:w-[70%] bg-[#fafafa] flex flex-col border-2 border-[#bbb]'>
      <div className=''>
        <div className="flex flex-col">
          <CreateTask tasks={tasks} setTasks={setTasks} />
          <h2 className="text-2xl font-bold py-4 overscroll-contain">All Tasks</h2>
          <ul className="flex flex-row xl:gap-[2%] flex-wrap">
            {tasks.map((task) => (
              // eslint-disable-next-line react/jsx-key
              <div className="w-[100%] xl:w-[49%] mb-4 h-fit lg:min-h-60 xl:min-h-52 2xl:min-h-44  p-2 bg-gradient-to-r from-green-400 to-green-700 rounded-xl border-2 border-black">
                <li key={task.id}>
                  <div className="flex flex-col">
                     <div className="flex flex-row justify-between">
                      <p className="text-base md:text-xl font-bold">{task.title}</p>
                      <div className="flex flex-row gap-4">
                        <div><DeleteTask taskId={task.id} tasks={tasks} setTasks={setTasks} /></div>
                        <div><UpdateTask task={task} tasks={tasks} setTasks={setTasks} /></div>
                        <div>{task.star ? <MdStar className="text-xl md:text-2xl text-yellow-400" /> : <MdStarBorder className="text-xl md:text-2xl"/>}</div>
                      </div>
                    </div>
                    <p className="text-base md:text-lg my-2">{task.desc}</p>
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-row">
                        <h3 className="text-base md:text-lg font-bold">Status:&nbsp;&nbsp;</h3>
                        <p className="text-base md:text-lg">{task.status ? "Completed" : "Pending"}</p>
                      </div>
                      <div className="flex flex-col">
                          <div className="flex flex-row">
                            <h3 className="text-base md:text-lg font-bold">Start:&nbsp;&nbsp;</h3>
                            <p className="text-base md:text-lg">{task.start}</p>
                          </div>
                          <div className="flex flex-row">
                            <h3 className="text-base md:text-lg font-bold">End:&nbsp;&nbsp;</h3>
                            <p className="text-base md:text-lg">{task.end}</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}
