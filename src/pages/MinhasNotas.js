import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import LinkButton from "../components/layout/LinkButton"
import Messenger from "../components/layout/Messenger"
import Container from "../components/layout/Container"
import style from "./MinhasNotas.module.css"
import NotasCard from "../components/notes/NotasCard"
import Loading from "../components/layout/Loading"


function MinhasNotas(){

    const [notas, SetNotas] = useState([])
    const [removeLoader, setRemoveLoader] = useState(false)
    const [notaMsg, setNotaMsg] = useState('')

    const location = useLocation()
    let mensagem =''
    if(location.state){
        mensagem =location.state.mensagem
    }

    useEffect(()=>{
        fetch("http://localhost:4000/notas", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        }).then((resp) => resp.json())
        .then((data) => {
            SetNotas(data)
            setRemoveLoader(true)
        })
        .catch((err) => console.log(err))
    }, [])


    function removeNota(id){   
        fetch(`http://localhost:4000/notas/${id}`, {
            method: 'DELETE', 
            headers:{
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
        .then((data) =>{
            SetNotas((prevnota) => prevnota.filter((notas) => notas.id !== id))
            setNotaMsg('');
            setTimeout(() => {
                setNotaMsg("Nota excluída com sucesso");
            }, 100)

        })
        .catch((err) => console.log("ERRO ao excluir nota: ", err))

    }


    return(
        <div className={style.notas_container}>
            <div className={style.tittle_container}>
                <h1>Minhas Notas</h1>
                <LinkButton to={"/NovaNota"} text="Criar nova nota"/>
            </div>
            {mensagem && <Messenger type="sucess" msg={mensagem}/>}
            {notaMsg && <Messenger type={"sucess"} msg={notaMsg} />}

            <Container customClass="start">
                {notas.length > 0 && notas.map((nota)=>
                <NotasCard
                key={nota.id}
                id={nota.id}
                nome={nota.nome}
                descricao={nota.descricao}
                anotacoes={nota.anotacoes}
                handleRemove={removeNota}
                />
                )}
                {!removeLoader && <Loading/>}
                {removeLoader && notas.length === 0 && (
                    <p>Não há notas Cadastradas</p>
                )}

            </Container>
        </div>
    )
}

export default MinhasNotas