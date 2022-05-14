import { collection, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firebaseApp } from "../App"

export const criarTurma = () => {

    const[name, setName] = useState("")
    const[desc, setDesc] = useState("")
    const[status, setStatus] = useState("")
    const[turma, setTurma] = useState([])

    const db = getFirestore(firebaseApp)
    const userCollectionRef = collection(db, "turma")

    useEffect(() => {
        
    })

    return(
        <div>

        </div>
    )
}