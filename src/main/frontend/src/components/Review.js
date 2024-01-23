import React from 'react'
import Star from './Star'; 

const Review = () => {
    const averageRating = 3.5;
    
    return (
        <div className="min-h-[100vh] max-w-3xl mx-auto shadow-layout bg-white">  
        <header className="sticky top-0 z-10 shadow-sm">
        <nav className="flex justify-between items-center px-4 h-[50px] relative bg-white">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            </div>
            <p className="text-xl">상품 후기</p>
            <div className="flex gap-x-4"><a aria-label="마이페이지" href="/mypage">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user2"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 1 0-16 0"></path></svg></a>
            </div>
        </nav>
        </header>
        <main className="min-h-[calc(100vh-50px)] mx-4 mt-10">
            {/* 리뷰 개수 */}
            <div className="flex justify-between items-center px-4 h-[50px] relative">
            <div className="flex">
                <div className="font-bold text-xl ">상품 리뷰</div>
                <div className="text-gray-400 flex mx-3 mt-1">총<p className="text-green-600">21</p>개</div>
            </div>
            <p className="text-green-600">최신순</p>
            </div>

            {/* 별점 */}
            <div className="flex justify-between items-center px-4 h-[50px] relative">
            <div className="flex">
                <div className="text-gray-400 flex mr-5">평균별점</div>
                <div className="flex">
                <Star averageRating = {averageRating} />
                <h3 className="mx-2 font-bold text-2xl ">{averageRating}</h3>
                </div>
            </div>
            </div>

            {/* 포토 리뷰 */}
            <div className="flex justify-between items-center px-4 h-[50px] relative mt-5">
            <div className="flex">
                <div className="text-xl ">포토 리뷰</div>
                <div className="text-gray-400 flex mx-3 mt-1">총<p className="text-green-600">15</p>개</div>
            </div>
            </div>

            {/* 전체 리뷰 */}
            <div className="flex justify-between items-center px-4 h-[50px] relative mt-5">
            <div className="text-xl ">전체 리뷰</div>
            </div>
        </main>
    </div>
  )
}

export default Review