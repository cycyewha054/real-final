import axios from 'axios';
import React, { useState } from 'react';
import { TextField } from '../components/TextField';
import { useHistory, useParams } from 'react-router-dom';
import { MenuBar } from '../components/menubar';

export const PostOptionPage = () => {
  const { push } = useHistory();
  const { postId } = useParams<{ postId: string }>();
  console.log('postId : ', postId);
  const [brand, setBrand] = useState('');
  const [proption, setProption] = useState('');
  const [prname, setPrname] = useState('');
  const [prno, setPrno] = useState('');
  const [additional, setAdditional] = useState('');
  const [due, onDueChange] = useState(new Date());
  const { replace } = useHistory();

  const postoption = () => {
    axios
      .post(`https://startup-coding-1602054.herokuapp.com/api/posts/{postId}`, {
        data: {
          due: due,
          brand: brand,
          prOption: proption,
          prName: prname,
          prNo: prno,
          additional: additional,
          userid: localStorage.getItem('userid'),
        },
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        replace('/');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  return (
    <div className="bg-gray-100  py-8 mx-auto w-[400px]">
      <div className="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
        <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="mt-4 mb-2 mx-4 grid grid-cols-1 space-y-2">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div className="h-full w-full text-center flex flex-col items-center justify-center  ">
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
                          ?????? ???????????? ??????????????????
                        </span>{' '}
                        <br />
                        <a>( </a>
                        <a
                          href=""
                          id=""
                          className="text-blue-600 hover:underline"
                        >
                          ?????? ??????
                        </a>{' '}
                        ?????? ????????? ??????
                        <a> )</a>
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <p className="mx-4 mb-4 text-sm text-gray-400">
                <span>Tip. ????????? ???????????? ???????????? ????????????!</span>
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
                    <div className="text-gray-500  py-3 px-4">?????????</div>
                    <div className="text-gray-500  py-3 px-4">?????????</div>
                    <div className="text-gray-500  py-3 px-4">??????</div>
                    <div className="text-gray-500  py-3 px-4">?????? ??????</div>
                    <div className="text-gray-500  py-3 px-4">??????????????????</div>
                  </div>
                  <div>
                    <div className="text-black  py-3 px-4">??????</div>
                    <div className="text-black  py-3 px-4">???????????????</div>
                    <div className="text-black  py-3 px-4">?????????</div>
                    <div className="text-black  py-3 px-4">
                      WH-4930-wjhs-001
                    </div>
                    <div className="text-black mb-2 py-3 px-4">
                      ??????????????? ????????????
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
                      URL ????????? ???????????????.
                    </div>
                    <div className="mx-2 text-sm mb-4">
                      <TextField placeholder=" ex) ??????????????????, ??????????????? ?????? ???????????? ??????" />
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
                      ??? ????????? ?????? ????????? ????????? ???????????????.
                    </div>
                    <p className="mx-2 mb-4 text-sm text-gray-400">
                      <span>
                        ????????? ????????? ??????????????? ?????? ??? ??? ??????????????????.
                      </span>
                    </p>
                    <div className="flex justify-end">
                      <div className="mx-2 mt-2 mb-4">
                        <TextField placeholder=" ??????????????? ???????????????" />
                      </div>
                      <div className="text-gray-800 font-semibold text-xl mt-4 mb-1 mx-2">
                        ???
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
              <div className="flex max-w-xl mb-8 space-x-3 ">
                <div className="bg-orange-600 rounded-md text-white text-center py-2 px-3 test-xs">
                  ??? ??????
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <MenuBar />
    </div>
  );
};
