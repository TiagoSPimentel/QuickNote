import { useNavigate } from 'react-router-dom'
import NotasForm from '../components/notes/NotasForm'
import style from './NovaNota.module.css'

function NovaNota(){

    const history = useNavigate()

    function CriaNotas(note){


        fetch("http://localhost:4000/notas",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
                body: JSON.stringify(note)
        }).then((resp) => resp.json())
        .then((data) =>{
            history('/MinhasNotas', { state: { mensagem: 'Nota criada com sucesso' } })
        })
        .catch((err) => console.log(err))
        
    }



    return(
        <div className={style.novaNota_container}>
            <div className={style.novanota}>
                <h1>Criar Nota</h1>
                <NotasForm handleSubmit={CriaNotas} btnText="Salvar"/>
            </div>
        </div>
        
    )
}

export default NovaNota