import { Link } from "react-router-dom";
import style from './NavBarra.module.css'
import Container from "./Container";
import foto from '../../assets/image/pencil.png'



function NavBarra(){
    return(
        <nav className={style.nav_cont}>
            <Container>
                <Link to="/">
                    <img src={foto} alt="foto" />
                </Link>
                <ul className={style.list}>
                    <li className={style.itens}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={style.itens}>
                        <Link to="/MinhasNotas">Notas</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBarra