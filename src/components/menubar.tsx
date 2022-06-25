import React from 'react';
import { useHistory } from 'react-router-dom';

export const MenuBar = () => {
  const { push } = useHistory();

  return (
    <div className="static">
      <div className="fixed  bottom-0 left-0 right-0 ">
        <div className="absolute w-full mx-auto bottom-0">
          <div className="flex">
            <button
              type="submit"
              className=" focus:outline-none w-full focus:shadow-none hover:text-blue-500"
            >
              <div className="flex w-full space-x-3 ">
                <div className="flex bg-white w-full  text-gray-700 text-center py-2 ">
                  <div
                    className=" my-2 w-full text-xl"
                    onClick={() => {
                      push('alertwritten');
                    }}
                  >
                    👤
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
                    className=" my-2 w-full text-xl"
                    onClick={() => {
                      push('/');
                    }}
                  >
                    🏠
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
                    className=" my-3 w-full text-sm"
                    onClick={() => {
                      push('plus');
                    }}
                  >
                    ⚫️ ⚫️ ⚫️
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
