import { useHistory } from 'react-router-dom';
import { MenuBar } from '../components/menubar';

export const PlusPage = () => {
  const { push } = useHistory();
  return (
    <>
      <div className="bg-gray-100 py-16 mx-auto w-[400px] ">
        <div className="mx-4">
          <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-xl overflow-hidden mx-auto">
            <div className="flex items-center w-full">
              <div className="w-full ">
                <div className="flex flex-row mt-2 mb-2 px-2 py-3 mx-3">
                  <div className="w-auto h-auto rounded-full mx-2 mt-3">
                    <img
                      className="w-16 h-16 object-cover rounded-full shadow cursor-pointer"
                      alt="User avatar"
                      src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                    />
                  </div>
                  <div className="flex mx-6  space-x-2 text-sm">
                    <div className="max-w-xl">
                      <div className="text-gray-500  py-1 px-2">아이디</div>
                      <div className="text-gray-500  py-1 px-2">닉네임</div>
                      <div className="text-gray-500  py-1 px-2">코인</div>
                    </div>
                    <div>
                      <div className="text-black  py-1 px-4">ewha1313</div>
                      <div className="text-black  py-1 px-4">대현동불주먹</div>
                      <div className="text-black  py-1 px-4">3700🔹</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid mt-12 mb-24 grid-cols-1 gap-6  px-4 md:px-6 lg:px-8">
          <div className="shadow-lg rounded-xl w-full md:w-80 p-4 bg-white  relative overflow-hidden">
            <div className="w-full flex items-center justify-between mb-8">
              <p className="text-gray-700 font-semibold text-xl">Coin</p>
              <a
                href="#"
                className="flex items-center text-sm hover:text-gray-600  text-gray-300 border-0 focus:outline-none"
                onClick={() => {
                  push('coin');
                }}
              >
                더보기
              </a>
            </div>
            <div className="flex items-center mb-6 rounded justify-between">
              <div className="flex items-center w-full justify-between">
                <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                  <p className="">2022.06.13</p>
                  <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
                </div>
                <span className="text-green-400">+300🔹</span>
              </div>
            </div>
            <div className="flex items-center mb-6 rounded justify-between">
              <div className="flex items-center w-full justify-between">
                <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                  <p className="">2022.06.03</p>
                  <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
                </div>
                <span className="text-green-400">+1200🔹</span>
              </div>
            </div>
            <div className="flex items-center mb-6 rounded justify-between">
              <div className="flex items-center w-full justify-between">
                <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                  <p className="">2022.05.28</p>
                  <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
                </div>
                <span className="text-red-400">-850🔹</span>
              </div>
            </div>
            <div className="flex items-center rounded justify-between">
              <div className="flex items-center w-full justify-between">
                <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                  <p className="">2022.04.30</p>
                  <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
                </div>
                <span className="text-green-400">+780🔹</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
          <div className="bg-white h-full rounded-2xl ">
            <div className="flex items-center justify-center pt-6">
              <svg
                width="35"
                height="30"
                viewBox="0 0 256 366"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <defs>
                  <linearGradient
                    x1="12.5189534%"
                    y1="85.2128611%"
                    x2="88.2282959%"
                    y2="10.0225497%"
                    id="linearGradient-1"
                  >
                    <stop
                      stop-color="#FF0057"
                      stop-opacity="0.16"
                      offset="0%"
                    ></stop>
                    <stop stop-color="#FF0057" offset="86.1354%"></stop>
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                    fill="#001B38"
                  ></path>
                  <circle
                    fill="url(#linearGradient-1)"
                    transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                    cx="147.013244"
                    cy="147.014675"
                    r="78.9933938"
                  ></circle>
                  <circle
                    fill="url(#linearGradient-1)"
                    opacity="0.5"
                    transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                    cx="147.013244"
                    cy="147.014675"
                    r="78.9933938"
                  ></circle>
                </g>
              </svg>
            </div>

            <nav className="mt-6">
              <div>
                <a
                  className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500  border-r-4 border-blue-500"
                  href="#"
                >
                  <span className="mx-4 text-sm font-normal">Dashboard</span>
                </a>
                <a
                  className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                  href="#"
                >
                  <span className="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="m-auto"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                    </svg>
                  </span>
                  <span className="mx-4 text-sm font-normal">Projects</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <MenuBar />
      </div>
    </>
  );
};
