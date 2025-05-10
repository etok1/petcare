import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import React from 'react';

interface commentProps {
    id: string,
    author: string,
    rating: number,
    date: string | null,
    content: string,
  }

interface ReviewProps{
    review: commentProps,
}



export default function Review ({review}:ReviewProps) {
    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
          <span key={index} style={{cursor: 'pointer'}}>
            {index < rating ? (
              <StarIcon style={{ color: '#f6e05e' }} className='md:w-[22px] md:h-[22px]' />
            ) : (
              <StarOutlineIcon style={{ color: '#d1d6dd' }} className='md:w-[22px] md:h-[22px]'/>
            )}
          </span>
        ));
    };

    return (
      <article className="w-full min-h-[250px] font-['Inter',serif] border border-[#0000001e] p-4 rounded-md shadow-md md:w-[40%] lg:w-[45%]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] text-grey">{review.author}</h2>
          <div className="mt-1 w-full flex items-center gap-2.5">
            <div className="stars">{renderStars(review.rating)}</div>
          
          </div>
        </div>
        <div>  <span className="text-xs text-grey text-center self-end md:text-sm">{review.date}</span></div>
      </div>
    
      <p className="mt-5 break-all text-grey leading-tight text-xs md:text-sm">{review.content}</p>
    </article>
    )
}
