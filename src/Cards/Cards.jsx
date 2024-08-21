import React from 'react';

const reviews = [
  {
    text: "This is an amazing product! Highly recommend it.",
    author: "Customer 1",
  },
  {
    text: "Fantastic quality and fast shipping.",
    author: "Customer 2",
  },
  {
    text: "Great value for the price. Will buy again.",
    author: "Customer 3",
  },
];

const ReviewCarousel = () => {
  return (

    <div className="relative w-full max-w-3xl mx-auto mt-8 overflow-x-hidden">
  {/* Review Container */}
  <div className='md:text-4xl text-2xl font-semibold pt-10 pl-10 text-center mb-16'>
    Custumors Reviews
  </div>
  <div className="overflow-x-auto flex space-x-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    <style>
      {`
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
    {reviews.map((review, index) => (
      <div key={index} className="min-w-full md:min-w-[calc(100%-1rem)] p-6 snap-center">
        <p className="text-2xl md:text-3xl italic">"{review.text}"</p>
        <p className="mt-6 text-lg md:text-xl text-right font-bold">- {review.author}</p>
      </div>
    ))}
  </div>
</div>

  
  );
};

export default ReviewCarousel;
