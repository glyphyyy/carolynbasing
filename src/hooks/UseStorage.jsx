import { useState, useEffect } from 'react';
import { projectStorage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { serverTimestamp, addDoc, collection } from "firebase/firestore";


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url] = useState(null);
    const imageCollection = collection(db, "images");

    useEffect(() => {
        const storageRef = ref(projectStorage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const percentage = Math.round( (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    const timestamp = serverTimestamp();
                    addDoc(imageCollection, {
                        url: url,
                        name: "none",
                        number: 0,
                        timestamp: timestamp
                    });
                })

            }
        );
        
    }, [file,imageCollection]);
    return { progress, url, error };
}

export default useStorage;