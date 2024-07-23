import axios from "axios";
import { useState } from "react";

export default function AddProject({ close }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const saveProject = async () => {
    const res = await axios.post("/api/projects/addProject", {
      title: title,
      detail: detail,
    });
    console.log(res.data);
    if (res.data.success) {
      alert("저장완료!");
      close();
    }
  };

  return (
    <div className="w-1/4 border rounded-2xl p-10 absolute z-10 bg-white">
      <div className="grid  gap-8 grid-cols-1">
        <div className="flex flex-col ">
          <div className="flex flex-col sm:flex-row items-center">
            <h2 className="font-semibold text-lg mr-auto">Add Project</h2>
            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
          </div>
          <div className="mt-5">
            <div className="form">
              <div className="md:space-y-2 mb-3">
                <label className="text-xs font-semibold text-gray-600 py-2">
                  Project Image
                </label>
                <div className="flex items-center py-6">
                  <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                    {/* 이미지 */}
                  </div>
                  <label className="cursor-pointer ">
                    <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                      Browse
                    </span>
                  </label>
                </div>
              </div>
              <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2">
                    Project Title <abbr title="required">*</abbr>
                  </label>
                  <input
                    placeholder="Project Title"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required="required"
                    type="text"
                    name="integration[shop_name]"
                    id="integration_shop_name"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-auto w-full mb-1 text-xs space-y-2">
                <label className="font-semibold text-gray-600 py-2">
                  Project Detail
                </label>
                <textarea
                  required=""
                  name="message"
                  id=""
                  className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                  spellCheck="false"
                  onChange={(e) => setDetail(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                <button
                  onClick={() => close()}
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={saveProject}
                  className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
