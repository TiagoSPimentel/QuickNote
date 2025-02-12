import style from './NotasCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function NotasCard({id, nome, descricao, anotacoes, handleRemove}){

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    } 
    
    return(
        <div className={style.notas_card}>
            <h2>{nome}</h2>
            <h4>{descricao}</h4>
            <p>
                <span>{anotacoes}</span>
            </p>
            <div className={style.notas_card_actions}>
                <Link to="/">
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
            
        </div>
    )
}

export default NotasCard