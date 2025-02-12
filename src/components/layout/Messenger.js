import style from './Messenger.module.css'
import { useState, useEffect } from 'react'

function Messenger({type, msg}){

    const [visualiza, setVisualiza] = useState(false)

    useEffect(()=>{
        if(!msg){
            setVisualiza(false)
            return
        }
        setVisualiza(true)
        const tempo = setTimeout(() => {
            setVisualiza(false)
        }, 3000);
        return () => clearTimeout(tempo)

    }, [msg])

    return(
        <>
            {visualiza &&(
                <div className={`${style.mensagem} ${style[type]}`}>{msg}</div>
            )}
        </>
    )
}

export default Messenger