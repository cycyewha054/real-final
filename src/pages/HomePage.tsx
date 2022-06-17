import React from 'react';
import axios from 'axios';

axios.get('http://localhost:1337/api/markets').then((response) => {
  console.log(response);
});

export const HomePage = () => {
  return (
    <>
      <div className="bg-gray-100 pt-12 pb-36 mx-auto w-[400px] ">
        <div className=" flex justify-start  mb-4 ">
          <div className="flex justify-center w-full  ">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
            >
              <div className="flex  space-x-3 ">
                <div className="flex shadow-md bg-orange-600 rounded-full text-white text-center py-2 px-3 test-xs">
                  <div className="flex items-center mx-auto justify-center h-10 w-10 rounded-full bg-white text-yellow-400">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                    </svg>
                  </div>
                  <div className=" my-2  px-3 ">글쓰기</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
          <div className="">
            <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="flex items-center w-full">
                <div className="w-full">
                  <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                    <div className="w-auto h-auto rounded-full ">
                      <img
                        className="w-14 h-14 object-cover rounded-full shadow cursor-pointer"
                        alt="User avatar"
                        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                      />
                    </div>
                    <div className="flex flex-col mb-2 ml-4 mt-1">
                      <div className="text-black-600 text-sm font-semibold">
                        대현동 불주먹
                      </div>
                      <div className="flex w-full mt-1">
                        <div className="text-grey-700 font-base text-xs mr-1 cursor-pointer">
                          3시간 20분 후 마감
                        </div>
                      </div>
                      <div className="text-gray-400 font-thin text-xs">
                        300🔹
                      </div>
                    </div>
                  </div>

                  <div className="content-center w-full">
                    <img className="" src="https://picsum.photos/536/354" />
                  </div>

                  <div className="mt-2 flex  mx-3 space-x-2 ">
                    <div>
                      <div className="text-gray-500  py-3 px-4">브랜드</div>
                      <div className="text-gray-500  py-3 px-4">제품명</div>
                      <div className="text-gray-500  py-3 px-4">옵션</div>
                      <div className="text-gray-500  py-3 px-4">제품 번호</div>
                      <div className="text-gray-500  py-3 px-4">
                        추가요청사항
                      </div>
                    </div>
                    <div>
                      <div className="text-black  py-3 px-4">삼성</div>
                      <div className="text-black  py-3 px-4">써큘레이터</div>
                      <div className="text-black  py-3 px-4">화이트</div>
                      <div className="text-black  py-3 px-4">
                        WH-4930-wjhs-001
                      </div>
                      <div className="text-black  py-3 px-4">
                        네이버페이 원합니다
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start mb-4 ">
                    <div className="flex justify-end w-full  pr-5">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                      >
                        <div className="flex justify-end space-x-3 ">
                          <div className="bg-orange-600 shadow-md rounded-md text-white text-center py-2 px-3 test-xs">
                            옵션 추가
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="flex items-center w-full">
                <div className="w-full">
                  <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                    <div className="w-auto h-auto rounded-full ">
                      <img
                        className="w-14 h-14 object-cover rounded-full shadow cursor-pointer"
                        alt="User avatar"
                        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                      />
                    </div>
                    <div className="flex flex-col mb-2 ml-4 mt-1">
                      <div className="text-black-600 text-sm font-semibold">
                        대현동 불주먹
                      </div>
                      <div className="flex w-full mt-1">
                        <div className="text-grey-700 font-base text-xs mr-1 cursor-pointer">
                          3시간 20분 후 마감
                        </div>
                      </div>
                      <div className="text-gray-400 font-thin text-xs">
                        300🔹
                      </div>
                    </div>
                  </div>

                  <div className="content-center w-full">
                    <img className="" src="https://picsum.photos/536/354" />
                  </div>

                  <div className="mt-2 flex  mx-3 space-x-2 ">
                    <div>
                      <div className="text-gray-500  py-3 px-4">브랜드</div>
                      <div className="text-gray-500  py-3 px-4">제품명</div>
                      <div className="text-gray-500  py-3 px-4">옵션</div>
                      <div className="text-gray-500  py-3 px-4">제품 번호</div>
                      <div className="text-gray-500  py-3 px-4">
                        추가요청사항
                      </div>
                    </div>
                    <div>
                      <div className="text-black  py-3 px-4">삼성</div>
                      <div className="text-black  py-3 px-4">써큘레이터</div>
                      <div className="text-black  py-3 px-4">화이트</div>
                      <div className="text-black  py-3 px-4">
                        WH-4930-wjhs-001
                      </div>
                      <div className="text-black  py-3 px-4">
                        네이버페이 원합니다
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start mb-4 ">
                    <div className="flex justify-end w-full  pr-5">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                      >
                        <div className="flex justify-end space-x-3 ">
                          <div className="bg-orange-600 shadow-md rounded-md text-white text-center py-2 px-3 test-xs">
                            옵션 추가
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="flex items-center w-full">
                <div className="w-full">
                  <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                    <div className="w-auto h-auto rounded-full ">
                      <img
                        className="w-14 h-14 object-cover rounded-full shadow cursor-pointer"
                        alt="User avatar"
                        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                      />
                    </div>
                    <div className="flex flex-col mb-2 ml-4 mt-1">
                      <div className="text-black-600 text-sm font-semibold">
                        대현동 불주먹
                      </div>
                      <div className="flex w-full mt-1">
                        <div className="text-grey-700 font-base text-xs mr-1 cursor-pointer">
                          3시간 20분 후 마감
                        </div>
                      </div>
                      <div className="text-gray-400 font-thin text-xs">
                        300🔹
                      </div>
                    </div>
                  </div>

                  <div className="content-center w-full">
                    <img className="" src="https://picsum.photos/536/354" />
                  </div>

                  <div className="mt-2 flex  mx-3 space-x-2 ">
                    <div>
                      <div className="text-gray-500  py-3 px-4">브랜드</div>
                      <div className="text-gray-500  py-3 px-4">제품명</div>
                      <div className="text-gray-500  py-3 px-4">옵션</div>
                      <div className="text-gray-500  py-3 px-4">제품 번호</div>
                      <div className="text-gray-500  py-3 px-4">
                        추가요청사항
                      </div>
                    </div>
                    <div>
                      <div className="text-black  py-3 px-4">삼성</div>
                      <div className="text-black  py-3 px-4">써큘레이터</div>
                      <div className="text-black  py-3 px-4">화이트</div>
                      <div className="text-black  py-3 px-4">
                        WH-4930-wjhs-001
                      </div>
                      <div className="text-black  py-3 px-4">
                        네이버페이 원합니다
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start mb-4 ">
                    <div className="flex justify-end w-full  pr-5">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                      >
                        <div className="flex justify-end space-x-3 ">
                          <div className="bg-orange-600 shadow-md rounded-md text-white text-center py-2 px-3 test-xs">
                            옵션 추가
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
