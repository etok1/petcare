import {  useState } from "react";
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { addDoc, collection, Timestamp  } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import '../../globals.css'

interface commentProps {
  id: string,
  author: string,
  rating: number,
  date: Timestamp | null | string,
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
          content: '',
        });
        console.log('Document written with ID: ', docRef.id);
      }catch (err: any){
        console.error('Error adding document:', err.message);
      }
    }

    const labelFormStyles = 'block mb-2 text-grey text-sm md:text-base'

    return (
        <>
        <form className="w-11/12 self-center font-inter my-12 bg-white rounded-lg shadow-md p-6" onSubmit={submitForm}>
          <h2 className="text-xl text-grey font-bold mb-6 md:text-2xl">Оставить отзыв</h2>
          <div className="w-full flex items-center gap-5 mb-4">
            <div className="w-full">
              <label className={labelFormStyles}>Ваше имя*</label>
              <input
                type="text"
                name="author"
                value={newReview.author}
                className="w-full p-2 border border-form-border rounded bg-white"
                required 
                onChange={(e) => handleChange('author', e.target.value)} 
              />
              </div>
          </div>
          <div className="mt-4">
            <label className={labelFormStyles}>Оценка</label>
            <div className="flex gap-1 mb-2">
              {renderStars(newReview.rating, true)}
            </div>
          </div>
          <div className="mt-4">
            <label className={labelFormStyles}>Ваш отзыв*</label>
            <textarea
              name="content"
              value={newReview.content}
              className="w-full h-14 p-2 border border-form-border rounded text-grey bg-white" 
              maxLength={500}
              required 
              onChange={(e) => handleChange('content', e.target.value)} 
            />
            <span className="text-xs text-grey">
              {newReview.content.length}/{500}
            </span>
          </div>
          <button type="submit" className="mt-6 text-xs font-comfortaa button sm:text-sm md:text-base">
            Отправить отзыв
          </button>
          <p className="mt-2.5 text-[10px] text-grey sm:text-xs">* - обязательно к заполнению</p>
        </form>
      </>
    )
}