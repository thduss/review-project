import React from 'react';

const StarRating = ({ averageRating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    index + 1 <= averageRating ? 1 : averageRating > index ? 0.5 : 0));

  return (
    <div className="flex">
      {stars.map((value, index) => (
        <Star key={index} filled={value === 1} halfFilled={value === 0.5} />
      ))}
    </div>
  );
};

const Star = ({ filled, halfFilled }) => {
  return (
    <div>
      {filled ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="2" stroke="orange" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ) : halfFilled ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="2" stroke="orange" className="w-6 h-6">
            <defs>
                {/* Define a linear gradient for the half-filled part */}
                <linearGradient id="halfGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="50%" style={{ stopColor: 'orange' }} />
                <stop offset="50%" style={{ stopColor: 'lightgray' }} />
                </linearGradient>
                {/* Define a clip path for the half-filled part */}
                <clipPath id="halfClip">
                <rect x="12" y="0" width="12" height="24"/>
                </clipPath>
            </defs>
            {/* Entire path with no fill */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            {/* Half-filled part with the linear gradient and clip path */}
            <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#halfGradient)" fill="url(#halfGradient)" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" clipPath="url(#halfClip)" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 24 24" strokeWidth="2" stroke="lightgray" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      )}
    </div>
  );
};

export default StarRating;
