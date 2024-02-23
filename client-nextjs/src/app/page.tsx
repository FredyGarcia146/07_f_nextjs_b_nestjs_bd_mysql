"use client";
import FormTask from "@/components/FormTask";
import ShowTasks from "@/components/ShowTasks";
import { useRouter, useParams} from "next/navigation";

export default function Home() {
  const router = useRouter();

  
  return (
    <div>
      <div>
        <div className="container mx-auto flex justify-around">
          <p className="text-xl font-semibold text-zinc-800/50 dark:text-white">
            FrontEnd: Next.js
          </p>
          <img
            src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*okiCUvTUJLtOqJv1dMzwpA.png"
            width="30"
            alt="Nest Logo"
          />
          <p className="text-xl font-semibold text-zinc-800/50 dark:text-white">
            React.js
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png"
            width="30"
            alt="Nest Logo"
          />
          <p className="text-xl font-semibold text-zinc-800/50 dark:text-white">
            BackEnd: Nest.js
          </p>
          <img
            src="https://nestjs.com/img/logo-small.svg"
            width="30"
            alt="Nest Logo"
          />
          <p className="text-xl font-semibold text-zinc-800/50 dark:text-white">
            DB: MySQL
          </p>
          <img
            src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
            width="30"
            alt="Nest Logo"
          />
          <p className="text-xl font-semibold text-zinc-800/50 dark:text-white">
            CSS: Tailwindcss
          </p>
          <img
            src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png"
            width="30"
            alt="Nest Logo"
          />
          <p className="text-xl font-semibold text-zinc-800/50 dark:text-white">
            Typescript
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
            width="30"
            alt="Nest Logo"
          />
        </div>
      </div>
      <div className="container mx-auto flex justify-between  ">
        <div className="">
          <FormTask></FormTask>
        </div>
        <div className="">
          <ShowTasks></ShowTasks>
        </div>
      </div>
    </div>
  );
}
