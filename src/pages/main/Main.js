import { useEffect, useRef, useState } from "react";
import AddProject from "./AddProject";
import axios from "axios";
import Profile from "./Profile";
import Stack from "./Stack";
import Projects from "./Projects";
import About from "./About";
import { useRouter } from "next/router";

export default function Main({ refs }) {
  const router = useRouter();
  const [cardShow, setCartShow] = useState(false);
  const { aboutEl, stackEl, projectEl } = refs;

  const addProjectCard = () => {
    setCartShow(true);
  };

  const close = () => {
    setCartShow(false);
  };

  useEffect(() => {
    console.log(sessionStorage.getItem("admin"));
  }, []);

  return (
    <main className="relative pt-20">
      <div className="flex items-center justify-center relative z-0">
        {cardShow ? <AddProject close={close} /> : null}
        <div className="flex flex-col items-center max-w-4xl m-10 h-1/2 mt-10">
          <div className="border rounded-3xl w-full h-1/2">
            <Profile />
          </div>
          <p ref={aboutEl}>About</p>
          <About />
          <p ref={stackEl}>Stack</p>
          <Stack />
          <p ref={projectEl}>Project</p>
          <div className="border rounded-3xl w-full h-1/2 p-10">
            <div className="flex justify-end">
              <button
                onClick={addProjectCard}
                className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
              >
                추가
              </button>
            </div>
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}
