import React from 'react';

export const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="flex max-w-xl my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
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
                  <div className="text-gray-400 font-thin text-xs">300🔹</div>
                </div>
              </div>

              <div className="">
                <img className="" src="https://picsum.photos/536/354" />
              </div>

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
                  <div className="text-black  py-3 px-4">WH-4930-wjhs-001</div>
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
                      <div className="bg-orange-600 rounded-md text-white text-center py-2 px-3 test-xs">
                        옵션 추가
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-100"></div>
            </div>
          </div>
        </div>
      </div>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="matheusgongo"
        data-description="Support me on Buy me a coffee!"
        data-message="Thank you for visiting! :D"
        data-color="#BD5FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </>
  );
};
