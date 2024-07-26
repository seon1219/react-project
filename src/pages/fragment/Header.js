import Link from "next/link";
import { useRef } from "react";

export default function Header({ refs }) {
  const { aboutEl, stackEl, projectEl } = refs;

  const onMove = (e) => {
    switch (e.target.value) {
      case "about":
        window.scrollTo({
          top: aboutEl.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case "stack":
        window.scrollTo({
          top: stackEl.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case "project":
        window.scrollTo({
          top: projectEl.current.offsetTop,
          behavior: "smooth",
        });
        break;
    }
  };
  return (
    <header>
      <nav className="flex items-center bg-white shadow dark:bg-gray-800 fixed z-20 w-full">
        <Link href={"/"}>
          <img src="/images/home.svg" className="w-10 m-5" />
        </Link>
        <div className="container flex items-center justify-end p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link href={"/"}>
            <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              Home
            </button>
          </Link>

          <button
            onClick={onMove}
            value="about"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            About
          </button>

          <button
            onClick={onMove}
            value="stack"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Stack
          </button>

          <button
            onClick={onMove}
            value="project"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Project
          </button>
        </div>
      </nav>
    </header>
  );
}
