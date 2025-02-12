import style from './Submit.module.css'
function Submit({text}) {
    return (
        <div>
            <button className={style.submit_cont}>{text}</button>
        </div>
    );
}

export default Submit;