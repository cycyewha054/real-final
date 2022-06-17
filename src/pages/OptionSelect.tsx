import React from 'react';
import { TextField } from '../components/TextField';

export const OptionSelectPage = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 mx-auto w-[400px]">
        <div className="grid grid-cols-1 gap-6  px-4 md:px-6 lg:px-8">
          <div className="">
            <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="flex items-center w-full">
                <div className="w-full mt-4 mx-4">
                  <div className="flex flex-row "></div>

                  <div className="content-center">
                    <img className="" src="https://picsum.photos/536/354" />
                  </div>

                  <div className="mt-4 mb-4 flex space-x-2 ">
                    <div className="max-w-xl">
                      <div className="text-gray-500  py-1 px-2">브랜드</div>
                      <div className="text-gray-500  py-1 px-2">제품명</div>
                      <div className="text-gray-500  py-1 px-2">옵션</div>
                      <div className="text-gray-500  py-1 px-2">제품 번호</div>
                      <div className="text-gray-500  py-1 px-2">
                        추가요청사항
                      </div>
                    </div>
                    <div>
                      <div className="text-black  py-1 px-4">삼성</div>
                      <div className="text-black  py-1 px-4">써큘레이터</div>
                      <div className="text-black  py-1 px-4">화이트</div>
                      <div className="text-black  py-1 px-4">
                        WH-4930-wjhs-001
                      </div>
                      <div className="text-black  py-1 px-4">
                        네이버페이 원합니다
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="flex items-center w-full">
                <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white  rounded-lg shadow">
                  <div className="px-4 py-5 sm:px-6 border-b w-full">
                    <h3 className="text-gray-700  py-1 text-xl font-bold px-2">
                      가장 마음에 드는 옵션을 선택하세요
                    </h3>
                    <p className="text-gray-400  text-xs  px-2">
                      선택한 옵션이 최초 요청사항과 일치하지 않는 경우 다른
                      옵션을 재선택 할 수 있습니다.
                    </p>
                  </div>

                  <ul className="flex w-full flex-col divide divide-y">
                    <li className="flex mx-2 flex-row">
                      <div className="flex justify-between select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="">
                          <a href="#" className="block relative">
                            <img
                              className="w-36  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                        <div className="text-gray-700 font-semibold text-l">
                          15000원
                        </div>
                        <div className="text-gray-700 font-semibold text-l">
                          열람하기
                        </div>
                      </div>
                    </li>

                    <li className="flex mx-2 flex-row">
                      <div className="flex justify-between select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="">
                          <a href="#" className="block relative">
                            <img
                              className="w-36  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                        <div className="text-gray-700 font-semibold text-l">
                          15000원
                        </div>
                        <div className="text-gray-700 font-semibold text-l">
                          열람하기
                        </div>
                      </div>
                    </li>

                    <li className="flex mx-2 mb-2 flex-row">
                      <div className="flex justify-between select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="">
                          <a href="#" className="block relative">
                            <img
                              className="w-36  object-cover rounded-xl"
                              src="https://picsum.photos/536/354"
                            />
                          </a>
                        </div>
                        <div className="text-gray-700 font-semibold text-l">
                          15000원
                        </div>
                        <div className="text-gray-700 font-semibold text-l">
                          열람하기
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start  ">
            <div className="flex justify-end w-full ">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <div className="flex justify-end space-x-3 ">
                  <div className="bg-orange-600 rounded-md text-white text-center py-2 px-3 test-xs focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                    옵션 선택
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
