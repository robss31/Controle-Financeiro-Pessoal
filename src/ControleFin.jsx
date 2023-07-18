import react from "react";
import './ControleFin.css';



function ControleFin() {
    return (
        <div className="container">
            <h1>Controle Financeiro Pessoal</h1>



            <img width={300} height={300} src="./img/foto_capa.jpg" alt="" id="img" />
            <input type="text" id="inputsal" placeholder="Digite Sua Receita Mensal" />
            <button type="submit" id="btn" >Entrar</button>


        </div>
    )
}
export default ControleFin;