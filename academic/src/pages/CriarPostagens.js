import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../pages/RegistroStyle.css';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBeUZICL0_YOZXyjMCXqEn4JTRjCBF9G5k",
    authDomain: "registro-591d2.firebaseapp.com",
    projectId: "registro-591d2",
  
  });

export function CriarPost(){

    const navigate = useNavigate()

    const db = getFirestore(firebaseApp);
    const usercollectionRef = collection(db,'/criar/3IPKXVngxru1ut5YCQsC/posts')

    const [title, setTitle] = useState('');
    const [descrição, setDescrição] = useState('');
    const [users, SetUser] = useState('');
    
  
   
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usercollectionRef)
  
        SetUser(console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
      };
      getUsers();
    }, []);
  
  
    const handleChange = (e) => {
      setTitle(e.target.value);
    }
  
    const handleDescriçãoChange = (e) => {
      setDescrição(e.target.value);
    }

    async function CriarPost() {
  
        const user = await addDoc(usercollectionRef, {
          title,
          descrição,
    
        });
        console.log(user);
        navigate(-1)
        
      }


    return(
        <div className='criar-post'>
            <form>
                <h1>Criar Post</h1>
                <label>Titulo: </label>
                <input/>
                <label>descrição: </label>
                <input/>
            </form>
        </div>
    )
}