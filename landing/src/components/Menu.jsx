import style from './Menu.module.css'

export default function Menu (){


    return (
        <div className={style["wrap-menu"]}>
            <h1 className={style["text-title"]}>Menu</h1>            
            <p> 
                <a className={style["wrapEach"]} href="/">Home</a> 
            </p>
            <p> 
                <a className={style["wrapEach"]} href="/api">Api</a> 
            </p>
            <p> 
                <a className={style["wrapEach"]} href="/calc">Média</a> 
            </p>
            <p> 
                <a className={style["wrapEach"]} href="/contc">Contato</a> 
            </p>
            <p> 
                <a className={style["wrapEach"]} href="/technologies">Tecnologia</a> 
            </p>

        </div>
    )
} 