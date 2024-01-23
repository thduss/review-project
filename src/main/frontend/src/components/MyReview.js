import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Available from './Available';
import Written from './Written';

const MyReview = () => {
  const avilReview = 3; //작성 가능한 리뷰
  const myReview = 3; //작성한 리뷰 

  const [selectedTab, setSelectedTab] = useState('available'); // 'available' or 'written'

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="border-y-gray-100">
        <div className="min-h-[100vh] max-w-3xl mx-auto shadow-layout bg-white">  
          <header className="sticky top-0 z-10">
          <nav className="flex justify-between items-center px-4 h-[50px] relative bg-white">
              <div>
                <Link to="/review">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                </Link>
              </div>
              <p className="text-xl">리뷰</p>
              <div className="flex gap-x-4"><a aria-label="마이페이지" href="/mypage">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg></a>
              </div>
          </nav>
          </header>
          <div className="flex flex-wrap">
            <div
              className={`w-1/2 ml-auto h-12 flex justify-center p-2 border-b-2 ${
                selectedTab === 'available' ? 'border-black' : 'border-gray-100'
              }`}
              onClick={() => handleTabClick('available')}
            >
              <p>작성 가능한 리뷰 {avilReview}</p>
            </div>
            <div
              className={`w-1/2 mr-auto h-12 flex justify-center p-2 border-b-2 ${
                selectedTab === 'written' ? 'border-black' : 'border-gray-100'
              }`}
              onClick={() => handleTabClick('written')}
            >
              <p>작성한 리뷰 {myReview}</p>
            </div>
          </div>
          {selectedTab === 'available' ?  <Available /> :  <Written />}
        </div>
    </div>
  )
}

export default MyReview