import {  useState } from "react";
import styles from "./style.module.css";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { addDoc, collection, Timestamp  } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

interface commentProps {
  id: string,
  author: string,
  rating: number,
  date: Timestamp | null | string,
  pet: string,
  type: string,
  content: string,
}

function randomizerId(length = 20){
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for(let i = 0; i < length; i++){
    const random = Math.floor(Math.random() * characters.length);
    id += characters.charAt(random)
  }
  return id
}

export default function Form() {
    const [newReview, setNewReview] = useState<commentProps>({
        id: randomizerId(),
        author: '',
        rating: 5,
        date: null,
        pet: '',
        type: '',
        content: '',
      });

    const renderStars = (rating: number, isInput = false) => {
        return [...Array(5)].map((_, index) => (
          <span key={index} style={{cursor: 'pointer'}} onClick={isInput ? () => setNewReview((prev) => ({ ...prev, rating: index + 1 })) : undefined}>
            {index < rating ? (
              <StarIcon style={{ color: '#f6e05e' }} />
            ) : (
              <StarOutlineIcon style={{ color: '#e2e8f0' }} />
            )}
          </span>
        ));
    };

    const formattedDate = new Intl.DateTimeFormat("ru-RU").format(new Date());


    const handleChange = (field: keyof commentProps, value: commentProps[keyof commentProps]) => {
      if(typeof value === 'string'){
        if (field === 'content' && value?.length > 500) {
          return; 
        }
      }
     

      setNewReview({...newReview, [field]: value });
      console.log(field, value);
     
    }

    const submitForm = async (e: any) => {
      e.preventDefault()

      try{
        const collectionRef = collection(db, 'reviews')
        const docRef = await addDoc(collectionRef, {
          ...newReview,
          date: formattedDate,
          });

        setNewReview({
          id: randomizerId(),
          author: '',
          rating: 5,
          date: null,
          pet: '',
          type: '',
          content: '',
        });
        console.log('Document written with ID: ', docRef.id);
      }catch (err: any){
        console.error('Error adding document:', err.message);
      }
    }

    return (
        <>
          <form className={styles.formContainer} onSubmit={submitForm}>
            <h2 className={styles.formTitle}>Оставить отзыв</h2>
            <div className={styles.formGrid}>
              <div className={styles.inputColumn} />
              <label className={styles.label}>Ваше имя*</label>
              <input
                type="text"
                name="author"
                value={newReview.author}
                className={styles.input}
                required onChange={(e) => handleChange('author', e.target.value)} />
            </div>
            <div className={styles.inputColumn}>
              <label className={styles.label}>Кличка питомца</label>
              <input
                type="text"
                name="pet"
                value={newReview.pet}
                className={styles.input} onChange={(e) => handleChange('pet', e.target.value)} />
            </div>
          <div className={styles.inputRow}>
              <label className={styles.label}>О чем/ком отзыв*</label>
              <select
                name="type"
                value={newReview.type}
                className={styles.select}
                onChange={(e) => {
                  handleChange('type', e.target.value);
                  console.log(newReview);
                } }
              >
                <option value="Кот">Кот</option>
                <option value="Собака">Собака</option>
                <option value="shelter">приют</option>
                <option value="shelter">волонтерство</option>
              </select>
            </div><div className={styles.inputRow}>
              <label className={styles.label}>Оценка</label>
              <div className={styles.starContainer}>
                {renderStars(newReview.rating, true)}
              </div>
            </div><div className={styles.inputRow}>
              <label className={styles.label}>Ваш отзыв*</label>
              <textarea
                name="content"
                value={newReview.content}
                className={`${styles.textarea}`} maxLength={500}
                required onChange={(e) => handleChange('content', e.target.value)} />
              <span className={styles.maxLength}>
                {newReview.content.length}/{500}
              </span>
            </div><button type="submit" className={`${styles.submitButton} button`}>
              Отправить отзыв
            </button><p className={styles.reminder}>* - обязательно к заполнению</p>
          </form>
      </>
    )
}