import React from 'react'
import { useNavigate} from 'react-router-dom'

const Available = () => {
    const available = [
        {
          review_id: '1',
          deal_id: '1',
          date: '2023. 05. 23',
          product: '부산 사과 5kg',
          imageUrl: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTgyJUFDJUVBJUIzJUJDfGVufDB8fDB8fHww',
        }, 
        {
            review_id: '2',
            deal_id: '2',
            date: '2023. 04. 11',
            product: '황금향 3kg',
            imageUrl: 'https://images.unsplash.com/photo-1607595213051-227632ba53f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJTk1JTlDJUVCJTlEJUJDJUVCJUI0JTg5fGVufDB8fDB8fHww',
        },
        {
            review_id: '3',
            deal_id: '3',
            date: '2023. 04. 14',
            product: '황금향 5kg',
            imageUrl: 'https://images.unsplash.com/photo-1607595213051-227632ba53f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJTk1JTlDJUVCJTlEJUJDJUVCJUI0JTg5fGVufDB8fDB8fHww',
        },
    ]
    const remainingDays = 5; // 남은 계산된 일 수
    const navigate = useNavigate();

  return (
    <ul role="list" className="divide-y-8 divide-gray-100">
    {available.map((avail) => (
      <li key={avail.date} className="justify-between gap-x-6 p-5">
        <div className="flex min-w-0 gap-x-4">
          <img className="h-20 w-20 flex-none square-full bg-gray-50" src={avail.imageUrl} alt="" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900 mt-4">{avail.product}</p>
            <p className="truncate text-xs leading-5 text-gray-500 mt-4">{avail.date}</p>
          </div>
        </div>
            <button className=" bg-gray-200 hover:bg-blue-300 text-black py-2 px-4 mt-3 rounded-full w-full"
              onClick={() => navigate('/reviewWrite', { state: { productInfo: avail } })}>
                <p className=' text-xs'>상품 리뷰 작성하기 ( {remainingDays}일 남음 )</p>
            </button>
      </li>
    ))}
  </ul>
  )
}

export default Available