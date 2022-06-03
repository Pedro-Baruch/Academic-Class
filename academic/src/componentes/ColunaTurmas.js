import './ColunaTurmasStyle.css'

export function ColunaTurmas () {
    return (
        <>
            <aside class="coluna-turma">
                <ul class="coluna-lista">
                    <li class="coluna-item" id="coluna-topico"><a href="home-page.html">Turmas</a></li>
                    <li class="coluna-item" id="coluna-subtopico"><a href="publicacao-turma.html">Turma 01</a></li>
                    <li class="coluna-item" id="coluna-subtopico"><a href="">NomeTurma</a></li>
                    <li class="coluna-item" id="coluna-subtopico"><a href="">NomeTurma</a></li>
                </ul>
                <ul class="coluna-lista">
                    <li class="coluna-item" id="coluna-topico"><a href="">T.Encerradas</a></li>
                </ul>
                <ul class="coluna-lista">
                    <li class="coluna-item" id="coluna-topico"><a href="">Configurações</a></li>
                </ul>
            </aside>
        </>
    )
}