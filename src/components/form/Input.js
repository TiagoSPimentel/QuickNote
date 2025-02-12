import style from './Input.module.css'
function Input({ type, text, name, placeholder, handleOnChange, value, textarea }) {
    return (
        <div className={style.input_cont}>
            <label htmlFor={name}>{text}:</label>
            {textarea ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    value={value}
                    className={style.textarea}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    value={value}
                />
            )}
        </div>
    );
}

export default Input;

//esse input foi criado para ser reutilizado em outros lugares