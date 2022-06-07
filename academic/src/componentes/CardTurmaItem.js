import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../services/firebase-config";

export function CardTurmaItem (props) {
    const navigate = useNavigate();
    const sfDocRef = doc(db, "turma", props.user.id);

    async function handleJoinTurma() {
        const t = await getDoc(sfDocRef)
        if(!t){
            console.log('NÃO EXISTE')
            return
        }

        navigate(`turma/${t.id}`)
    }

    return (
        <ul class='card' onClick={() => handleJoinTurma()}>
            <li className="banner-imagem"></li>
            <li className="card-item" id="titulo-card">{props.user.nome}</li>
            <li className="card-item" id="descricao-card">{props.user.descrição}</li>
        </ul>
    )
}