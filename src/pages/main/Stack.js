import axios from "axios";
import { fromJSON } from "postcss";
import { useEffect, useState } from "react";

export default function Stack() {
  const [list, setList] = useState([]);
  const [frontList, setFrontList] = useState([]);
  const [serverList, setServerList] = useState([]);
  const [databaseList, setDatabaseList] = useState([]);

  const getStacks = async () => {
    const res = await axios.get("/api/projects/getStacks");
    const data = res.data;
    if (data.success) {
      setList(data.list);
      console.log(list);
    }
  };

  useEffect(() => {
    getStacks();
  }, []);

  // useEffect(() => {

  //   list.map((v, i) => {
  //     console.log(v.name);
  //     switch (v.type) {
  // case "front":
  //   setFrontList([...frontList, v.name]);
  //   return;
  // case "server":
  //   setServerList([...serverList, v.name]);
  //   return;
  // case "database":
  //   setDatabaseList([...databaseList, v.name]);
  //   return;
  //     }
  //   });
  // }, [list]);

  return (
    <div>
      <p>Front</p>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-2 justify-items-center">
        {frontList.map((v, i) => {
          return (
            <div
              key={`front-${i}`}
              className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl"
            >
              <img src="/images/react.png" alt="react" className="w-20" />
              <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
                {v}
              </span>
            </div>
          );
        })}
      </div>
      <p>Server</p>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-2 justify-items-center">
        {serverList.map((v, i) => {
          return (
            <div
              key={`server-${i}`}
              className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl"
            >
              <img src="/images/react.png" alt="react" className="w-20" />
              <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
                {v}
              </span>
            </div>
          );
        })}
      </div>
      <p>Database</p>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-2 justify-items-center">
        {databaseList.map((v, i) => {
          return (
            <div
              key={`database-${i}`}
              className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl"
            >
              <img src="/images/react.png" alt="react" className="w-20" />
              <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
                {v}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
