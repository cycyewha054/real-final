import React from 'react';
import { TextField } from '../components/TextField';

export const LoginPage = () => {
  return (
    <>
      <div className="m-4">
        <div className="text-3xl  font-bold mb-10">로그인</div>
      </div>
      <div className="border">
        <div className="">
          <TextField label="이메일" placeholder="이메일을 입력해주세요." />
        </div>

        <div className="mt-4">
          <TextField
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
        </div>
      </div>
      <div className="mt-20 px-4">
        <div className="bg-orange-500  text-white text-center rounded-full py-4">
          로그인
        </div>
        <div className="text-center mt-4 py-4 text-orange-500 border rounded-full border-orange-500 mt-2">
          회원가입
        </div>
      </div>
    </>
  );
};
