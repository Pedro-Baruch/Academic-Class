export function CardTurmaItem (props) {
    return (
        <ul class='card'>
            <li><img class="banner-imagem" src="https://st.depositphotos.com/1002326/5133/v/450/depositphotos_51331625-stock-illustration-open-book-with-summer-landscape.jpg" /></li>
            <li className="card-item" id="titulo-card">{props.user.nome}</li>
            <li className="card-item" id="descricao-card">{props.user.descrição}</li>
        </ul>
    )
}