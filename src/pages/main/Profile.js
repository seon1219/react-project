import Link from "next/link";

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
          className="h-32 w-32 bg-white p-2 rounded-full"
          src="/images/basic.jpg"
          alt=""
        />
      </div>
      <div className="p-5">
        <div className="text-center px-14">
          <h2 className="text-gray-800 text-3xl font-bold">내 이름</h2>
          <Link href="https://github.com/seon1219">
            <span className="text-gray-400 mt-2 hover:text-blue-500 flex justify-center hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              seon1219
            </span>
          </Link>
          <p className="mt-2 text-gray-500 text-sm">
            저는 뭐 어쩌구 저쩌구 개발을 어쩌구 프로젝트는 저쩌구
          </p>
        </div>
      </div>
    </div>
  );
}
