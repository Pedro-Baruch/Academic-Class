import { useNavigate } from "react-router-dom";

export function Turma () {
    const navigate = useNavigate();

    return(
        <>
            <button onClick={() => navigate(`pessoas`)}>Pessoas</button>
        </>
    )
}