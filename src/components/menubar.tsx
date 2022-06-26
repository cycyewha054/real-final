import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import {
  HiUser,
  HiOutlineUser,
  HiHome,
  HiOutlineHome,
  HiOutlineMenu,
  HiMenu,
} from 'react-icons/hi';

export const MenuBar = () => {
  const { push } = useHistory();

  return (
    <div className="static">
      <div className="fixed  bottom-0 left-0 right-0 ">
        <div className="absolute w-full mx-auto bottom-0">
          <div className="flex">
            <button
              type="submit"
              className=" focus:outline-none w-full focus:shadow-none "
            >
              <div className="flex w-full space-x-3 ">
                <div className="flex bg-white w-full  text-gray-700  text-center py-2 ">
                  <div
                    className=" my-2 w-full text-3xl"
                    onClick={() => {
                      push('alertwritten');
                    }}
                  >
                    <div className="flex items-center mx-auto justify-center  h-10 w-10 rounded-full hover:text-orange-600  text-orange-300">
                      <HiUser />
                    </div>
                  </div>
                </div>
              </div>
            </button>

            <button
              type="submit"
              className=" focus:outline-none w-full focus:shadow-none hover:text-blue-500"
            >
              <div className="flex w-full space-x-3 ">
                <div className="flex bg-white w-full  text-gray-700 text-center py-2 ">
                  <div
                    className=" my-2 w-full text-3xl"
                    onClick={() => {
                      push('/');
                    }}
                  >
                    <div className="flex items-center mx-auto justify-center  h-10 w-10 rounded-full hover:text-orange-600  text-orange-300">
                      <HiHome />
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              type="submit"
              className=" focus:outline-none w-full focus:shadow-none hover:text-blue-500"
            >
              <div className="flex w-full space-x-3 ">
                <div className="flex bg-white w-full  text-gray-700 text-center py-2 ">
                  <div
                    className=" my-2 w-full text-3xl"
                    onClick={() => {
                      push('/plus');
                    }}
                  >
                    <div className="flex items-center mx-auto justify-center  h-10 w-10 rounded-full  hover:text-orange-600  text-orange-300">
                      <FiMenu />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
