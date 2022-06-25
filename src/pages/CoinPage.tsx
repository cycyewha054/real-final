import React from 'react';
import { TextField } from '../components/TextField';
import { useHistory } from 'react-router-dom';
import { MenuBar } from '../components/menubar';

export const CoinPage = () => {
  const { push } = useHistory();
  return (
    <div className="bg-gray-100 py-8 mx-auto w-[400px] ">
      <div className="grid mt-12 mb-24 grid-cols-1 gap-6  px-4 md:px-6 lg:px-8">
        <div className="shadow-lg rounded-xl w-full md:w-80 p-4 bg-white  relative overflow-hidden">
          <div className="w-full flex items-center justify-between mb-8">
            <p className="text-gray-700 font-semibold text-xl">Coin</p>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.06.13</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-green-400">+300🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.06.03</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-green-400">+1200🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.05.28</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-red-400">-850🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.05.15</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-green-400">+780🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.05.10</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-red-400">-1000🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.04.30</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-green-400">+730🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.04.25</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-green-400">+350🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.04.21</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-red-400">-790🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.04.13</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-green-400">+650🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.04.01</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-red-400">-820🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.03.28</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-red-400">-920🔹</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p className="">2022.03.16</p>
                <p className="text-gray-300">삼성/써큘레이터/화이트/...</p>
              </div>
              <span className="text-green-400">+320🔹</span>
            </div>
          </div>
        </div>
      </div>
      <MenuBar />
    </div>
  );
};
