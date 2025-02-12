import style from './Footer.module.css'
function Footer(){
    return(
        <footer className={style.footer}>
            <p className={style.copy_right}>
                <span>QuickNote</span> &copy; 2025
            </p>
        </footer>
    )
}

export default Footer