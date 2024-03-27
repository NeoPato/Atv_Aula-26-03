import style from './Menu.module.css'

export default function Menu (){
    return (
        <div className={style["wrap-menu"]}>
            {/* Só um nome para mostrar oq é a barra */}
            <h1>Menu</h1>
            {/* Clique para ir para outra parte do site */}
            <p> 
                <a href="/">Home</a> 
            </p>
        </div>
    )
} 