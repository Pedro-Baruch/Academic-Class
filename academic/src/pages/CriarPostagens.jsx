import './../pages/RegistroStyle.css';

export function CriarPost(){


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