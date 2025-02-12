import style from "./Loading.module.css"
import loading from "../../assets/image/loading.svg"


function Loading(){
    return(
        <div className={style.loader_cont}>
            <img src={loading} alt="loading" className={style.img_loader} />
        </div>
    )
}

export default Loading