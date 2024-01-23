import React from 'react'
import Star from './Star'

const Written = () => {
    const written = [
        {
          review_id: '1',
          deal_id: '1',
          rating: '5',
          date: '2023. 05. 23',
          product: '부산 사과 5kg',
          text: '너무 달고 맛있어요~',
          imageUrl: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTgyJUFDJUVBJUIzJUJDfGVufDB8fDB8fHww',
          imageUrls: [
            'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFQyU4MiVBQyVFQSVCMyVCQ3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1552255349-450c59a5ec8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQyU4MiVBQyVFQSVCMyVCQ3xlbnwwfHwwfHx8MA%3D%3D',
          ],
        }, 
        {
            review_id: '2',
            deal_id: '2',
            rating: '3',
            date: '2023. 04. 11',
            product: '황금향 3kg',
            text: '황금향이 너무 달고 맛있어요~',
            imageUrl: 'https://images.unsplash.com/photo-1607595213051-227632ba53f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJTk1JTlDJUVCJTlEJUJDJUVCJUI0JTg5fGVufDB8fDB8fHww',
            imageUrls: [
                'https://images.unsplash.com/photo-1579169326371-ccb4e63f7889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVBJUI3JUE0fGVufDB8fDB8fHww',
                'https://images.unsplash.com/photo-1564415900645-30612d54dd0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFQSVCNyVBNHxlbnwwfHwwfHx8MA%3D%3D',
            ],
        },
        {
            review_id: '3',
            deal_id: '3',
            rating: '4',
            date: '2023. 04. 14',
            product: '황금향 5kg',
            text: '황금향 3kg 시켜먹고 5kg 또 시켜먹네요~ 맛있습니다',
            imageUrl: 'https://images.unsplash.com/photo-1607595213051-227632ba53f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJTk1JTlDJUVCJTlEJUJDJUVCJUI0JTg5fGVufDB8fDB8fHww',
            imageUrls: [
                'https://images.unsplash.com/photo-1564415900645-30612d54dd0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFQSVCNyVBNHxlbnwwfHwwfHx8MA%3D%3D',
            ]
        },

    ]

  return (
    <ul role="list" className="divide-y-8 divide-gray-100">
        {written.map((avail) => (
        <li key={avail.date} className="justify-between gap-x-6 p-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-20 w-20 flex-none square-full bg-gray-50" src={avail.imageUrl} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-4">{avail.product}</p>
                </div>
            </div>
            <div className='mt-2 mb-2'>
                <Star averageRating = {avail.rating} />
            </div>
            <div className='mt-2 mb-2 flex'>
                {avail.imageUrls.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="w-40 h-40 object-cover mr-1" />
                ))}
            </div>
            <p>{avail.text}</p>
            <div>
                <button className="bg-transparent hover:bg-gray-400 text-black font-semibold hover:text-white py-1 px-3 border border-gray-400 hover:border-transparent rounded mr-2 mt-2">
                    수정
                </button>
                <button className="bg-transparent hover:bg-gray-400 text-black font-semibold hover:text-white py-1 px-3 border border-gray-400 hover:border-transparent rounded">
                    삭제
                </button>
            </div>
        </li>
        ))}
    </ul>
  )
}

export default Written