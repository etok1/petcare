import Form from "./Form/Form";
import styles from "./style.module.css";
import { collection, query, onSnapshot, orderBy, Timestamp } from 'firebase/firestore';

import Review from "./Review/Review";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

export interface commentProps {
    id: string;
    author: string,
    rating: number,
    date: Timestamp | string | null,
    pet: string,
    type: string,
    content: string,
    liked: boolean,
    likes: number
  }


 function Reviews() {
    const [comments, setComments] = useState<any[]>([]);
    const [visibleComments, setVisibleComments] = useState(6)
    const [loading, setLoading] = useState(true);


useEffect(() => {
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
  }, []); 


  const loadMore = () => {
    setVisibleComments(prevVisibleComments => prevVisibleComments + 6);
    setComments(comments.slice(0, visibleComments + 6))
  }
  

  if(loading){
    return <div>loading</div>
  }

    return(
        <div style={{display: 'flex', flexDirection: 'column', padding:"15px"
        }}>
            <Form/>
            <section className={styles.reviews}>
                <h1 className={styles.heading}>{comments.length} {comments.length === 1 ? 'отзыв' : 'отзыва'}</h1>
                <div className={styles.reviewsTotal}>
                    {comments.slice(0, visibleComments).map((review:any, index: number) => (
                        <Review key={index} review={review}/>
                    ))}
                </div>
                {comments.length <= 6 ? '' : <button onClick={loadMore}>Загрузить больше</button>}
             
            </section>
        </div>
    )
}

export default Reviews;