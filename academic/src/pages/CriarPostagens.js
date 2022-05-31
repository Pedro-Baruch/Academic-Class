import './../pages/RegistroStyle.css';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

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
        navigate('/home/post')
        
      }


    return(
        <div className='criar-post'>
            <form>
                <h1>Criar Post</h1>
                <label>Titulo: </label>
                <input value={title}
            required onChange={(e) => { handleChange(e) }} /><br />
                <label>descrição: </label>
                <input  value={descrição}
            required onChange={(e) => { handleDescriçãoChange(e) }} /><br />
                <button onClick={CriarPost}>Criar</button>
            </form>
        </div>
    )
}