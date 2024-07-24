import { useEffect, useState } from "react";
import AddProject from "./AddProject";
import axios from "axios";
import Profile from "./main/Profile";
import Stack from "./main/Stack";
import Projects from "./main/Projects";
import About from "./main/About";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  const [cardShow, setCartShow] = useState(false);

  const addProjectCard = () => {
    setCartShow(true);
  };

  const close = () => {
    setCartShow(false);
    router.push("");
  };
  return (
    <main className="relative pt-16">
      <div className="flex items-center justify-center relative z-0">
        {cardShow ? <AddProject close={close} /> : null}
        <div className="flex flex-col items-center max-w-4xl m-10 h-1/2 mt-10">
          <div className="border rounded-3xl w-full h-1/2">
            <Profile />
          </div>
          <p>About</p>
          <div className="flex border rounded-3xl w-full h-1/2 p-10">
            <About />
          </div>
          <p>Stack</p>
          <div className="flex border rounded-3xl w-full h-1/2 p-10 justify-center items-center">
            <Stack />
          </div>
          <p>Project</p>
          <div className="border rounded-3xl w-full h-1/2 p-10">
            <div className="flex justify-end">
              <button
                onClick={addProjectCard}
                className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
              >
                추가
              </button>
            </div>
            <div className="grid md:grid-cols-3	">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
