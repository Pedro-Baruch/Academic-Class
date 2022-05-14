import { firebaseApp } from "../Firebase.config.jsx"
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

export const Registro = () => {
    
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
            <input type="password" 
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            />
            <button onClick={criarUser}>Criar User</button>
        </div>
    )
}