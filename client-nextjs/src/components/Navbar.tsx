import Link from "next/link";

import ButtonChangeTheme from "@/components/ChangeThemeBotton";

function Navbar() {
  return (
    <nav className="bg-zinc-400 py-3 mb-2 dark:bg-zinc-800">
      <div className="container mx-auto flex justify-between ">
        <div>
          <Link
            href="/"
            className=" text-white bg-gradient-to-br from-zinc-600 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Applicaction web CRUD : Home
          </Link>
        </div>
        <div className=" align-middle">
          <ButtonChangeTheme></ButtonChangeTheme>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
