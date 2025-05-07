import React from 'react';
import Form from "./Reviews/Form";
import { collection, query, onSnapshot, orderBy, Timestamp } from 'firebase/firestore';
import Review from "./Reviews/Review";
import { useEffect, useState } from "react";
// @ts-ignore
import { db } from "../firebaseConfig";
import { Loading } from './Loading';

export interface commentProps {
    id: string;
    author: string,
    rating: number,
    date: Timestamp | string | null,
    type: string,
    content: string,
}


 function Reviews() {
    const [comments, setComments] = useState<any[]>([]);
    const [visibleComments, setVisibleComments] = useState(6)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>()


useEffect(() => {
  try{
    const q = query(
      collection(db, "reviews"),
      orderBy("date", "asc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsArray: any[] = [];
      querySnapshot.forEach((doc) => {
        commentsArray.push({
          id: doc.id,
  
          ...doc.data()
        });
      });
      setComments(commentsArray);
      console.log(commentsArray);
      setLoading(false);
    });

    return () => unsubscribe();
  }catch (error){
    console.error(error);
      setError(error)
      setLoading(false)
  }
}, []); 


  const loadMore = () => {
    setVisibleComments(prevVisibleComments => prevVisibleComments + 6);
    setComments(comments.slice(0, visibleComments + 6))
  }
  

    return(
        <div style={{display: 'flex', flexDirection: 'column', padding:"15px"
        }}>
            <Form/>
            <section className='mt-[50px]'>
                {loading && (<Loading />)}
                {!loading && <h1 className='text-xl text-grey sm:text-2xl'>{comments.length} {comments.length === 1 ? 'отзыв' : 'отзыва'}</h1>}
                
                <div className='w-full mt-11 flex flex-wrap justify-center gap-[50px]'>
                    {comments.slice(0, visibleComments).map((review:any, index: number) => (
                        <Review key={index} review={review}/>
                    ))}
                </div>
                {comments.length > 6 && (
                  <div className="mt-10 flex justify-center">
                    <button onClick={loadMore} className="button">
                      Загрузить больше
                    </button>
                  </div>
                )}
            </section>
        </div>
    )
}

export default Reviews;