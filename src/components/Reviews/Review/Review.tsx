import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import styles from "./style.module.css";

interface commentProps {
    id: string,
    author: string,
    rating: number,
    date: string | null,
    pet: string,
    type: string,
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
              <StarIcon style={{ color: '#f6e05e' }} />
            ) : (
              <StarOutlineIcon style={{ color: '#d1d6dd' }} />
            )}
          </span>
        ));
    };

    return (
        <article className={styles.comment}>
            <div className={styles.headerComment}>
                <div>
                    <h2 className={styles.author}>{review.author}</h2>
                    <div className={styles.ranking}>
                        <div className={styles.stars}>{renderStars(review.rating)}</div>
                        <span>{review.date}</span>
                    </div>
                </div>
                <div>
                    <h3 className={styles.pet}>{review.pet}</h3>
                    <p className={styles.type}>{review.type}</p>
                </div>
            </div>

            <p className={styles.content}>{review.content}</p>
        </article>
    )
}
