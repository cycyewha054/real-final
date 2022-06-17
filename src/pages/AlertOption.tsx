import React from 'react';
import { TextField } from '../components/TextField';

export const AlertOptionPage = () => {
  return (
    <>
      <div className="bg-gray-100 pt-8 pb-36 mx-auto w-[400px] ">
        <div className="flex flex-row w-full justify-between ">
          <div className=" border mx-4 mb-4 w-full rounded-xl shadow-sm">
            <button className="py-2 w-1/2 rounded-l-xl text-white  bg-orange-600 hover:bg-red-600 transition">
              나의 요청
            </button>
            <button className=" py-2 w-1/2 rounded-r-xl bg-neutral-50 hover:bg-neutral-100 transition">
              옵션
            </button>
          </div>
        </div>

        <div className="">
          <div className="flex  content-center w-full overflow-hidden">
            <div className="flex mx-4 items-center w-full ">
              <div className="container flex flex-col w-full items-center justify-center bg-white  rounded-lg shadow">
                <ul className="flex w-full flex-col divide divide-y">
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2">
                          <button
                            type="submit"
                            className=" bg-green-200 text-green-700 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            진행중
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>

                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-green-200 text-green-700 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            진행중
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>

                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-red-200 text-red-500 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감임박
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>

                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-400 border text-black-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            선택대기
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                  <li className="flex mx-2 flex-row">
                    <div className="flex  select-none cursor-pointer flex flex-1 items-center my-4">
                      <div className="mx-2 space-x-1 flex w-1/2">
                        <div className="flex w-2/5 w-full mx-2 ">
                          <button
                            type="submit"
                            className=" bg-gray-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl "
                          >
                            마감
                          </button>
                        </div>
                        <div className="w-3/5">
                          <a href="#" className="block relative">
                            <img
                              className="w-16  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="w-1/2 text-gray-700  text-sm">
                        삼성/써큘레이터/화이트/...
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
