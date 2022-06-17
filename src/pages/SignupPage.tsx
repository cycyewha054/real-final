import React, { useState } from 'react';
import { TextField } from '../components/TextField';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const { replace } = useHistory();

  const register = () => {
    axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: name,
        email: email,
        password: password,
        nickname: nickname,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        replace('/login');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };
  return (
    <>
      <div className="bg-gray-100 py-8 mx-auto w-[400px] ">
        <div className="m-4 ">
          <div className="text-3xl  font-bold mb-10">회원가입</div>
        </div>

        <div className="">
          <div className="flex max-w-xl content-center my-10 bg-white shadow-md rounded-lg overflow-hidden mx-4">
            <div className="flex items-center my-4 w-full">
              <div className="w-full">
                <div className="mx-4 ">
                  <div className="">
                    <div className="mt-4">
                      <TextField
                        label="이름"
                        placeholder="이름을 입력해주세요."
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </div>

                    <div className="mt-4 mb-4">
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
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요."
                        value={nickname}
                        onChange={(event) => {
                          setNickname(event.target.value);
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

        <div className="mt-16 mb-24 px-4">
          <div className="flex  mb-4 ">
            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4 py-4  bg-orange-600  focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full "
                onClick={() => {
                  register();
                }}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
