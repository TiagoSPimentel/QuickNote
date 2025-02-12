import style from './Home.module.css'
import img from '../assets/image/notepad.png'
import LinkButton from '../components/layout/LinkButton'
function Home(){
    return(
        <section className={style.home_cont}>
            <h1>Bem-vindo ao <span>QuickNote</span></h1>
            <p>Para anotações rápidas</p>
            <LinkButton to={"/NovaNota"} text="Criar nova nota"/>
            <img src={img} alt="Bloco de notas" />
        </section>
    )
}

export default Home