import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const goLogin = async () => {
    if (!id) {
      alert("아이디 입력 ㄱ");
      return;
    }
    if (!pw) {
      alert("비번 입력 ㄱ");
      return;
    }
    const res = await axios.post("/api/user/login", { id: id, pw: pw });
    console.log(res);
    if (res.data.success) {
      alert("성공");
      sessionStorage.setItem("admin", true);
      router.replace(router.asPath);
    } else {
      alert("실패");
    }
  };

  const onLogin = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      {show ? (
        <div className="loginBox">
          <div className="mx-auto max-w-md px-6 py-12 bg-gray-100 border-0 shadow-lg sm:rounded-3xl">
            <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
            <form id="form" noValidate>
              <div className="relative z-0 w-full mb-5">
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  htmlFor="name"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Enter ID
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Name is required
                </span>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  type="password"
                  name="password"
                  placeholder=" "
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label
                  htmlFor="password"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Enter Password
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Password is required
                </span>
              </div>

              <button
                onClick={goLogin}
                id="button"
                type="button"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-sky-300 hover:bg-sky-600 hover:shadow-lg focus:outline-none"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      ) : null}
      <button onClick={onLogin} className="loginBtn">
        수정
      </button>
    </div>
  );
}
