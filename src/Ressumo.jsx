import React from "react";
import './ControleFin.css';



function Ressumo() {


    const [lista, setLista] = useState([]);
    const [novo, setNovoItem] = useState("");

    function adicionaItem(form){
        form.preventDefault();
        if (!novoItem){
            return;
        }
        setLista([...lista, {text: novoItem, isCompleted: false}]);
        setNovoItem("");
        document.getElementById('inputconta').focus();
    }


    return (
        <div className="container2">

            <h1>Ressumo das Finanças</h1>

            <form onSubmit= {adicionaItem}>
                <input id="inputconta" type="text" value={novoItem} onChange={(e)=> {setNovoItem(e.target.value)}} placeholder="Nome da Conta" />
                <input id="inputconta" type="text" value={novoItem} placeholder="Data Venc." />
                <input id="inputconta" type="text" value={novoItem} placeholder="Valor" />
                <button type="submit" id="btn1">add</button>
            </form>

            <div className="listaContas">
                {
                    <lista className="length"></lista>
                }

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