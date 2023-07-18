import React from "react";
import './ControleFin.css';



function Ressumo() {
    return (
        <div className="container2">

            <h1>Ressumo das Finanças</h1>

            <form >
                <input id="inputconta" type="text" placeholder="Nome Conta" />
                <input id="inputconta" type="text" placeholder="Data Venc." />
                <input id="inputconta" type="text" placeholder="Valor" />
                <button type="submit" id="btn1">add</button>
            </form>

            <div className="listaContas">
                <div className="item">
                    <span>Conta de Exemplo</span>
                    <span>Conta de Exemplo1</span>
                    <span>Conta de Exemplo2</span>
                    <button  className="del">Deletar</button>
                </div>

                <div className="item completo">
                    <span>Conta de Exemplo</span>
                    <span>Conta de Exemplo</span>
                    <span>Conta de Exemplo</span>
                    <button className="del">Deletar</button>
                </div>

                <button className="delete">Deletar Todas</button>

            </div>


        </div >

    )
}

export default Ressumo;