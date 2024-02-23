"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import dtoTypeTask from "@/interfaz/dto.taskType";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const URI: string = "http://localhost:3001";

function EditFormTask() {

    const[title,setTitle]=useState<string | undefined>()
    const[typeTask,setTypeTask]=useState<number | string | undefined>()
    const[description,setDescription]=useState<string | undefined>()
    const[done,setDone]=useState<boolean | undefined>()
    const {id} =useParams()
    const router = useRouter();
    //const navigate = useNavigate()



    const [typeTasks, setTypeTasks] = useState([])




    const getTaskId = async () => {
        const res = await axios.get(`${URI}/tasks/${id}/get`)
        setTitle(res.data.title)
        setTypeTask(res.data.type_task_id)
        setDescription(res.data.description)
        setDone(res.data.done)
    };

    const getTypeTasks = async () => {
        const res = await axios.get(`${URI}/type-tasks`)
        setTypeTasks(res.data)

    };


    const putEditTasks = async (e:any) => {
        e.preventDefault()
        await axios.put(`${URI}/tasks/${id}/edit`,{title:title,type_task_id:typeTask,done:done,description:description})
        router.push('/')

    };


    useEffect(() => {
        getTaskId()
        getTypeTasks()


    }, []);


  return (
    <div>
      <div className="m-4 text-center">
        <h3 className="text-xl font-medium  text-neutral-800 dark:text-neutral-50">
          Update Task
        </h3>
      </div>
      <form onSubmit={putEditTasks} className="max-w-sm mx-auto ">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Type Task
          </label>
          <select
            id="type_task_id"
            value={typeTask}
            onChange={(e) => setTypeTask(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            
          >
            <option disabled>
              Open this select menu
            </option>
            {typeTasks.map((typeTasks: dtoTypeTask) => (
              <option key={typeTasks.id} value={typeTasks.id}>
                {typeTasks.name} 
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description Task
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description ..."
            required
          ></textarea>
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="done"
              type="checkbox"
              checked={done || false}
              onChange={(e) => setDone(e.target.checked)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Done Task
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          edit
        </button>
      </form>
    </div>
  );
}

export default EditFormTask;
