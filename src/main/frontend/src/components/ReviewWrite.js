import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MakeStar from './MakeStar';

const ReviewWrite = () => {
  const location = useLocation();

  if (!location.state || !location.state.productInfo) {
    return <div>Error: Product information not available.</div>;
  }

  const { productInfo } = location.state;

  return (
    <div className="min-h-[100vh] max-w-3xl mx-auto shadow-layout bg-white">  
      <header className="sticky top-0 z-10 shadow-sm">
        <nav className="flex justify-between items-center px-4 h-[50px] relative bg-white">
            <div></div>
            <p className="text-xl">리뷰 작성</p>
            <div className="flex gap-x-4">
              <Link to='/mypage'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              </Link>
            </div>
        </nav>
      </header>
      <main className='justify-between gap-x-6 p-5 mt-3'>
        <div className="flex min-w-0 gap-x-4">
          <img className="h-20 w-20 flex-none square-full bg-gray-50" src={productInfo.imageUrl} alt="" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900 mt-4">{productInfo.product}</p>
            <p className="truncate text-xs leading-5 text-gray-500 mt-4">{productInfo.date}</p>
          </div>
        </div>
        <MakeStar />
        <label for="message" className="block mb-2 font-medium text-gray-900">상세 리뷰를 작성해주세요</label>
        <textarea id="message" rows="4" minLength={15} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="어떤 점이 좋았나요? 품질은 어떤가요? 15자 이상 작성해주세요."></textarea>

        <div className='mt-5'>
          <p className="block mb-2 font-medium text-gray-900">사진을 등록해주세요</p>
          <div className="rounded-md border  bg-gray-50 p-4 shadow-md w-24 h-24 mt-2">
            <label for="upload" className="justify-center h-full flex flex-col items-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </label>
            <input id="upload" type="file" className="hidden" />
          </div>
        </div>

        <div className=' mt-20 text-center'>
          <button className="bg-transparent hover:bg-gray-500  font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            등록하기
          </button>
        </div>
      
      </main>
    </div>
  )
}

export default ReviewWrite