import react from "react";
import './ControleFin.css';



function ControleFin() {

    const btn = document.querySelector("#send");

    btn.addEventListener("click", function (e) {
            e.preventDefault();

        const inputsal = document.querySelector("#inputsal");

        const valor = Number(inputsal.value);

        const converte = valor + 5;

        document.getElementById("saldo").innerHTML = ("Resultado: " + converte.toFixed(2) + " m/s ");

    })

    return (
        <div className="container">
            <h1>Controle Financeiro Pessoal</h1>

            <img width={300} height={300} src="./img/foto_capa.jpg" alt="" className="img" />

            <form action="">

                <input type="text" id="inputsal" placeholder="Digite Sua Receita Mensal" />
                <p ><span id="saldo" ></span>  </p>

            </form>

            <button type="submit" id="send" >Entrar</button>
        </div>
    )
}
export default ControleFin;