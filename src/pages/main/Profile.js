export default function Profile() {
  return (
    <div className="container w-full bg-white  shadow-lg    transform   duration-200 easy-in-out rounded-3xl">
      <div className=" h-32 overflow-hidden rounded-t-3xl">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
      </div>
      <div className="flex justify-center px-5  -mt-12">
        <img
          className="h-32 w-32 bg-white p-2 rounded-full   "
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
      </div>
      <div className="p-5">
        <div className="text-center px-14">
          <h2 className="text-gray-800 text-3xl font-bold">내 이름</h2>
          <a
            className="text-gray-400 mt-2 hover:text-blue-500"
            href="https://www.instagram.com/immohitdhiman/"
            target="BLANK()"
          >
            @immohitdhiman
          </a>
          <p className="mt-2 text-gray-500 text-sm">대충 소개글</p>
        </div>
      </div>
    </div>
  );
}
