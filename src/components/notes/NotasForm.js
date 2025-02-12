import Input from "../form/Input";
import Submit from "../form/Submit";
import style from './NotasForm.module.css';
import { useState } from "react";

function Notas({ btnText, handleSubmit}) {

    
    // Inicializando o estado para notas
    const [notas, setNotas] = useState({ nome: "", descricao: "", anotacoes: [""] });
   
    // Função para lidar com o envio do formulário
    const submit = (e) => {
        e.preventDefault();

        handleSubmit(notas);
        setNotas({ nome: "", descricao: "", anotacoes:[""] })
    };

    // Função para lidar com a mudança nos inputs
    function handleChange(e) {
        const { name, value } = e.target;
        setNotas((prevNotas) => ({...prevNotas,[name]: value}))
    }

    // Função para lidar com a mudança no input de anotacoes
    function handleAnotacoes(e) {
        setNotas((prevNotas) => ({
            ...prevNotas, anotacoes: [e.target.value] // Sempre armazenar anotacoes como array
        }));
    }

    return (
        <form onSubmit={submit} className={style.notes}>
            <Input
                type="text"
                name="nome" 
                text="Nome"
                placeholder="Insira o nome da nota"
                value={notas.nome}
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                name="descricao" 
                text="Descrição"
                placeholder="Insira a descrição da nota"
                value={notas.descricao}
                handleOnChange={handleChange}
            />
            <Input
                name="anotacoes"
                text="Anotações"
                placeholder="Insira as anotações..."
                textarea={true}
                value={notas.anotacoes}
                handleOnChange={handleAnotacoes}
            />
            <Submit text={btnText} />
        </form>
    );
}

export default Notas;
