import React from 'react';
import { TextField } from '../components/TextField';

export const PostOptionPage = () => {
  return (
    <div className="bg-gray-100  py-8 mx-auto w-[400px]">
      <div className="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
        <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="mt-4 mb-2 mx-4 grid grid-cols-1 space-y-2">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                      <div className="w-full flex items-center justify-center mb-6 mt-8">
                        <button className="flex items-center hover:text-orange-600 dark:text-orange-300 text-orange-600 border-0 focus:outline-none">
                          <svg
                            width="60"
                            height="60"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10"></div>
                      <p className="pointer-none text-gray-500 ">
                        <span className="text-xl">
                          제품 이미지를 업로드하세요
                        </span>{' '}
                        <br />
                        <a>( </a>
                        <a
                          href=""
                          id=""
                          className="text-blue-600 hover:underline"
                        >
                          파일 선택
                        </a>{' '}
                        또는 이미지 첨부
                        <a> )</a>
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <p className="mx-4 mb-4 text-sm text-gray-400">
                <span>Tip. 사진을 등록하면 채택률이 올라가요!</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="content-center w-full">
                <div className="mt-2 flex  mx-3 space-x-2 ">
                  <div>
                    <div className="text-gray-500  py-3 px-4">브랜드</div>
                    <div className="text-gray-500  py-3 px-4">제품명</div>
                    <div className="text-gray-500  py-3 px-4">옵션</div>
                    <div className="text-gray-500  py-3 px-4">제품 번호</div>
                    <div className="text-gray-500  py-3 px-4">추가요청사항</div>
                  </div>
                  <div>
                    <div className="text-black  py-3 px-4">삼성</div>
                    <div className="text-black  py-3 px-4">써큘레이터</div>
                    <div className="text-black  py-3 px-4">화이트</div>
                    <div className="text-black  py-3 px-4">
                      WH-4930-wjhs-001
                    </div>
                    <div className="text-black mb-2 py-3 px-4">
                      네이버페이 원합니다
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="content-center w-full">
                <div className="  mx-3 space-x-2 ">
                  <div>
                    <div className="text-gray-800 font-semibold  mt-4 mb-2 mx-2">
                      URL 주소를 입력하세요.
                    </div>
                    <div className="mx-2 text-sm mb-4">
                      <TextField placeholder=" ex) 중고거래시장, 소셜커머스 등의 웹사이트 주소" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="content-center w-full">
                <div className="  mx-3 space-x-2 ">
                  <div>
                    <div className="text-gray-800 font-semibold mt-4 mb-1 mx-2">
                      위 제품의 구매 가능한 가격을 알려주세요.
                    </div>
                    <p className="mx-2 mb-4 text-sm text-gray-400">
                      <span>
                        요청된 옵션과 일치하는지 다시 한 번 확인해주세요.
                      </span>
                    </p>
                    <div className="flex justify-end">
                      <div className="mx-2 mt-2 mb-4">
                        <TextField placeholder=" 실구매가를 입력하세요" />
                      </div>
                      <div className="text-gray-800 font-semibold text-xl mt-4 mb-1 mx-2">
                        원
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end mb-4 ">
          <div className="flex  justify-end w-full">
            <button
              type="submit"
              className="focus:outline-none focus:shadow-none hover:text-blue-500"
            >
              <div className="flex max-w-xl space-x-3 ">
                <div className="bg-orange-600 rounded-md text-white text-center py-2 px-3 test-xs">
                  글 등록
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
