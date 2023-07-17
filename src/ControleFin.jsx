import react from "react";
import './ControleFin.css';


function ControleFin() {
    return (
        <div className="container">
            <h1>Controle Financeiro Pessoal</h1>


            <input type="text" placeholder="   Digite o Salário Mensal" />
            <img width={300} height={250} src="./img/foto_capa.jpg" alt="" id="img" />
            <button type="submit" id="btn">Entrar</button>


        </div>
    )
}
export default ControleFin;