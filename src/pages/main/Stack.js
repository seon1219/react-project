export default function Stack() {
  return (
    <div>
      <p>Front</p>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-2 justify-items-center">
        <div className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl">
          <img src="/images/react.png" alt="react" className="w-20" />
          <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
            React
          </span>
        </div>
        <div className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl">
          <img src="/images/react.png" alt="react" className="w-20" />
          <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
            React2
          </span>
        </div>
        <div className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl">
          <img src="/images/react.png" alt="react" className="w-20" />
          <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
            React3
          </span>
        </div>
        <div className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl">
          <img src="/images/react.png" alt="react" className="w-20" />
          <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
            React4
          </span>
        </div>
        <div className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl">
          <img src="/images/react.png" alt="react" className="w-20" />
          <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
            React5
          </span>
        </div>
        <div className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl">
          <img src="/images/react.png" alt="react" className="w-20" />
          <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
            Javascript
          </span>
        </div>
      </div>
      <p>Server</p>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-2 justify-items-center">
        <div className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl">
          <img src="/images/react.png" alt="react" className="w-20" />
          <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
            Spring
          </span>
        </div>
        <div className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl">
          <img src="/images/react.png" alt="react" className="w-20" />
          <span className="mt-6 text-sm ?leading-5 font-semibold text-center">
            Spring Boot
          </span>
        </div>
      </div>
    </div>
  );
}
