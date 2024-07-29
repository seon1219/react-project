import Header from "./fragment/Header";
import Main from "./main/Main";
import Footer from "./fragment/Footer";
import { useRef, useState } from "react";
import Login from "./Login";

export default function Home() {
  const refs = {
    aboutEl: useRef(),
    stackEl: useRef(),
    projectEl: useRef(),
  };
  const [admin, setAdmin] = useState(false);
  return (
    <div className="flex flex-col">
      <Header refs={refs} />
      <Main refs={refs} admin={admin} />
      <Login admin={admin} setAdmin={setAdmin} />
      <Footer />
    </div>
  );
}
