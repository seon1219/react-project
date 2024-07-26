import axios from "axios";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await axios.get("/api/projects/getProjects");
    setProjects(res.data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return projects.map((v, i) => {
    return (
      <div className="grid md:grid-cols-3	">
        <div
          className="w-64 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500 m-5"
          key={i}
        >
          <img
            className="w-64 object-cover rounded-t-md"
            src="https://images.unsplash.com/photo-1509223197845-458d87318791"
            alt=""
          />
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700">{v.title}</h1>
            <p className="text-sm mt-2 text-gray-700">상세 내용</p>
            <div className="mt-3 space-x-4 flex p-1">
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
                이미지?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
