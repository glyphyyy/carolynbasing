import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, deleteDoc, orderBy, query, onSnapshot, setDoc } from "firebase/firestore";

export const UseFirestore = () => {
  const [images, setImages] = useState([]);
  const imageCollectionRef = collection(db, "images");
  const q = query(imageCollectionRef, orderBy("number", "asc"));

  useEffect(
      () =>
        onSnapshot(q, (snapshot) => {
          setImages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))} 
        ),
      []
    );

  return (
      { images }
  );
};

export const HandleEditName = async (id, name) => {
  const docRef = doc(db, "images", id);
  await setDoc(docRef, { name: name }, { merge: true });
};

export const HandleEditNumber = async (id, number) => {
  const docRef = doc(db, "images", id);
  await setDoc(docRef, { number: number }, { merge: true });
};

export const HandleDelete = async (id) => {
  const docRef = doc(db, "images", id);
  await deleteDoc(docRef);
};