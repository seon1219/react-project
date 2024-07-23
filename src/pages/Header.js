import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex items-center bg-white shadow dark:bg-gray-800">
        <p>로고?</p>
        <div className="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link href={"/"}>
            <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              Home
            </button>
          </Link>

          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            about
          </button>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            project
          </a>

          <a
            href="https://github.com/seon1219"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            github
          </a>
        </div>
      </nav>
    </>
  );
}
