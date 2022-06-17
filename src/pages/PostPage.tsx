import React from 'react';
import { TextField } from '../components/TextField';

export const PostPage = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 mx-auto w-[400px]">
        <div className="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
          <div className="flex max-w-xl content-center w-full my-1 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="mt-4 mb-4 mx-4 grid grid-cols-1 space-y-2">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                      <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
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
                <div className="mx-4 mt-4 mb-4 content-center w-full">
                  <div className="text-black-600 text-sm ">마감</div>

                  <div className="flex mt-1 relative rounded-md shadow-sm">
                    <select
                      className="block w-20 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="animals"
                    >
                      <option value="">__월</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select
                      className="block w-20 mx-2 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="animals"
                    >
                      <option value="">__일</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <select
                      className="block w-20   text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="animals"
                    >
                      <option value="">__시</option>
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                    </select>
                    <select
                      className="block w-20 mx-2 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="animals"
                    >
                      <option value="">__분</option>
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                      <option value="46">46</option>
                      <option value="47">47</option>
                      <option value="48">48</option>
                      <option value="49">49</option>
                      <option value="50">50</option>
                      <option value="51">51</option>
                      <option value="52">52</option>
                      <option value="53">53</option>
                      <option value="54">54</option>
                      <option value="55">55</option>
                      <option value="56">56</option>
                      <option value="57">57</option>
                      <option value="58">58</option>
                      <option value="59">59</option>
                    </select>
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
                    <TextField label="브랜드명" placeholder=" " />
                  </div>
                  <div className="mx-4 mt-4 mb-4">
                    <TextField label="제품명" placeholder=" " />
                  </div>
                  <div className="mx-4 mt-4 mb-4">
                    <TextField label="옵션" placeholder=" " />
                  </div>
                  <div className="mx-4 mt-4 mb-4">
                    <TextField
                      label="제품 번호"
                      placeholder="제품의 상세페이지 하단을 참고하세요. "
                    />
                  </div>
                  <div className="mx-4 mt-4 mb-4">
                    <TextField
                      label="추가 요청 사항"
                      placeholder="연락처를 남기지 않도록 주의하세요"
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

          <div className="flex justify-start  ">
            <div className="flex justify-end w-full ">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <div className="flex justify-end space-x-3 ">
                  <div className="bg-orange-600 rounded-md text-white text-center py-2 px-3 test-xs focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                    글 등록
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
