import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TextField } from '../components/TextField';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { replace } = useHistory();
  const { push } = useHistory();

  const checkUser = () => {
    if (email === '' || password === '') {
      alert('아이디와 비밀번호를 입력해주세요');
      return;
    }
    axios
      .post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('userid', response.data.user.id);

        replace('/');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      replace('/');
    }
  }, []);

  return (
    <>
      <div className="bg-gray-100 pt-24 pb-36 mx-auto w-[400px]">
        <div className="m-4 ">
          <div className="text-3xl  font-bold mb-10">로그인</div>
        </div>

        <div className="">
          <div className="flex max-w-xl content-center my-10 bg-white shadow-md rounded-lg overflow-hidden mx-4">
            <div className="flex items-center my-4 w-full">
              <div className="w-full">
                <div className="mx-4 ">
                  <div className="">
                    <div className="mt-4">
                      <TextField
                        label="이메일"
                        placeholder="이메일을 입력해주세요."
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>

                    <div className="mt-4 mb-4">
                      <TextField
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요."
                        type="password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-24 px-4">
          <div className="flex  mb-4 ">
            <div className="flex w-full">
              <button
                type="submit"
                className=" px-4 py-6  bg-orange-600  focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full "
                onClick={() => {
                  checkUser();
                }}
              >
                로그인
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <button
              className="px-4 py-6  bg-white   focus:ring-purple-500 focus:ring-offset-purple-200 text-gray w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full "
              onClick={() => {
                push('signup');
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
