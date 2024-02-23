
import dtoTask from "@/interfaz/dto.task";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import CardTask from "@/components/CardTask";

const URI: string = "http://localhost:3001";

function ShowTasks() {
  const [tasks, setTask] = useState([]);

  const router = useRouter();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const res = await axios.get(`${URI}/tasks`);
    setTask(res.data);
    console.log(res.data.length)
  };

  /*
  const deleteTask = async (id: number) => {
    await axios.delete(`${URI}/tasks/${id}/delete`);
    //router.push('/')
    await getTasks();
  };

  const editDoneTask = async (id: number) => {
    await axios.patch(`${URI}/tasks/${id}/toggleDone`);
    await getTasks();
  };
  */

  return (
  <div className="m-2 bg-gray-300 dark:bg-gray-700  shadow-2xl rounded-lg border-solidring-2 ring-blue-500/50 dark:ring-gray-800/50 border-2">
    <div >
      {tasks?.length
        ? (
        <div >
          <div className="m-6 text-center">
            <h3 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              TASKS
            </h3>
          </div>
          <div className="container mx-auto flex flex-wrap justify-around  ">
            {tasks.map((tasks: dtoTask, index) => (
              <CardTask tasks={tasks} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="w-80 m-8 text-center">
            <h3 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              No tasks
            </h3>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default ShowTasks;
