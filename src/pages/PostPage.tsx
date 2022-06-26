import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MenuBar } from '../components/menubar';
import { TextField } from '../components/TextField';
import DateTimePicker from 'react-datetime-picker';

//useEffect(() => {}, []);

export const PostPage = () => {
  const { push } = useHistory();
  const [brand, setBrand] = useState('');
  const [proption, setProption] = useState('');
  const [prname, setPrname] = useState('');
  const [prno, setPrno] = useState('');
  const [additional, setAdditional] = useState('');
  const [due, onDueChange] = useState(new Date());
  // const [userid, setUserid] = useState('');

  const { replace } = useHistory();

  const posting = () => {
    axios
      .post('http://localhost:1337/api/posts/', {
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
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('userid', response.data.user.id);
        replace('/');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  return (
    <>
      <div className="bg-gray-100 py-8 mx-auto w-[400px]">
        <div className="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8 ">
          <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="mt-4 mb-4 mx-4 grid grid-cols-1 space-y-2">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                      <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
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
                            제품 이미지를 등록하세요
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
              </div>
            </div>
          </div>

          <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="content-center w-full">
                  <div className="mx-4 mt-4">
                    <TextField
                      label="브랜드명"
                      placeholder=" "
                      onChange={(e) => setBrand(e.target.value)}
                      value={brand}
                    />
                  </div>
                  <div className="mx-4 mt-4 mb-4">
                    <TextField
                      label="제품명"
                      placeholder=" "
                      onChange={(e) => setPrname(e.target.value)}
                      value={prname}
                    />
                  </div>
                  <div className="mx-4 mt-4 mb-4">
                    <TextField
                      label="옵션"
                      placeholder=" "
                      onChange={(e) => setProption(e.target.value)}
                      value={proption}
                    />
                  </div>
                  <div className="mx-4 mt-4 mb-4">
                    <TextField
                      label="제품 번호"
                      placeholder="제품의 상세페이지 하단을 참고하세요. "
                      onChange={(e) => setPrno(e.target.value)}
                      value={prno}
                    />
                  </div>
                  <div className="mx-4 mt-4 mb-4">
                    <TextField
                      label="추가 요청 사항"
                      placeholder="연락처를 남기지 않도록 주의하세요"
                      onChange={(e) => setAdditional(e.target.value)}
                      value={additional}
                    />
                    <p className="mt-1 mx-1 mb-4 text-xs text-gray-400">
                      <span>
                        네이버페이 결제가능, 중고제품 불가능 등의 요청사항을
                        적어보세요!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg mx-auto">
            <span className="text-black-600 text-sm mx-4 mt-4">마감</span>
            <div className="mt-1 mb-2 ">
              <DateTimePicker
                onChange={onDueChange}
                value={due}
                className="mx-4 mb-4"
              />
            </div>
          </div>

          <div className="flex justify-start  ">
            <div className="flex justify-end w-full ">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <div className="flex justify-end space-x-3 ">
                  <div
                    className="bg-orange-600 rounded-md text-white text-center py-2 px-3 test-xs focus:ring-purple-500 focus:ring-offset-purple-200 w-full transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onClick={() => {
                      posting();
                    }}
                  >
                    글 등록
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <MenuBar />
      </div>
    </>
  );
};
