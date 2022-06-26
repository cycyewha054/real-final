import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { MenuBar } from '../components/menubar';
import { stringify } from 'qs';

export const HomePage = () => {
  const query = stringify(
    {
      sort: ['id:desc'],
    },
    {
      encodeValuesOnly: true,
      addQueryPrefix: true,
    }
  );
  console.log('query: ', query);
  const [posts, setPosts] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get('https://startup-coding-1602054.herokuapp.com/api/posts' + query)
      .then((res) => res.data.data)
      .then((data) => {
        console.log('data : ', data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-100 pt-12 pb-36 mx-auto w-[400px] ">
        <div className="relative">
          <div className="fixed top-0 left-0 right-0">
            <div className="flex justify-center w-full mt-8 ">
              <button
                type="submit"
                className=" focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <div className="flex  space-x-3 ">
                  <div className="flex shadow-md bg-orange-500 hover:bg-orange-600 rounded-full text-white text-center py-2 px-3 test-xs">
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
                    <div
                      className=" my-2  px-3 "
                      onClick={() => {
                        push('post');
                      }}
                    >
                      글쓰기
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" flex justify-start  mb-4 "></div>

        <div className="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
          {posts.map((post) => {
            const { attributes, id } = post;
            const { brand, prNo, prName, prOption, additional, due } =
              attributes;
            console.log(attributes);
            return (
              <div className="">
                <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                  <div className="flex items-center w-full">
                    <div className="w-full">
                      <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                        <div className="w-14 h-14 object-cover rounded-full text-gray-400 shadow ">
                          <svg
                            width="auto"
                            height="auto"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z" />
                          </svg>
                        </div>
                        <div className="flex flex-col mb-2 ml-4 mt-1">
                          <div className="text-black-600 text-sm font-semibold">
                            {localStorage.getItem('userid')}
                          </div>

                          <div className="flex w-full mt-1">
                            <div className="text-grey-700 font-base text-xs mr-1 cursor-pointer">
                              {due}에 마감
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
                          <div className="text-gray-500  py-3 px-4">
                            제품 번호
                          </div>
                          <div className="text-gray-500  py-3 px-4">
                            추가요청사항
                          </div>
                        </div>
                        <div>
                          <div className="text-black  py-3 px-4">{brand}</div>
                          <div className="text-black  py-3 px-4">{prName}</div>
                          <div className="text-black  py-3 px-4">
                            {prOption}
                          </div>
                          <div className="text-black  py-3 px-4">{prNo}</div>
                          <div className="text-black  py-3 px-4">
                            {additional}
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
                              <div
                                className="bg-orange-500 hover:bg-orange-600 shadow-md rounded-md text-white text-center py-2 px-3 test-xs"
                                onClick={() => {
                                  push('postoption/' + id);
                                }}
                              >
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
            );
          })}
        </div>

        <MenuBar />
      </div>
    </>
  );
};
