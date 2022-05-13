import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBeUZICL0_YOZXyjMCXqEn4JTRjCBF9G5k",
    authDomain: "registro-591d2.firebaseapp.com",
    projectId: "registro-591d2",
    storageBucket: "registro-591d2.appspot.com",
    messagingSenderId: "104534479722",
    appId: "1:104534479722:web:fe956b763926f160640b13"
})

export const App = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [users, setUsers] = useState([])

    const db = getFirestore(firebaseApp)
    const userCollectionRef = collection(db, "users")

    async function criarUser() {
        const user = await addDoc(userCollectionRef, {name, email, senha})
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getUsers()
    },[])

    /*async function deleteUser(id) {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
    }*/

    return(
        <div>
            <input type="text" 
            placeholder="Nome" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            />
            <input type="text" 
            placeholder="Email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input type="text" 
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            />
            <button onClick={criarUser}>Criar User</button>
        </div>
    )
}
