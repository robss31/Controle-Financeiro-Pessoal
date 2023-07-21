import React, { useState, useEffect } from "react";
import './ControleFin.css';



function Ressumo() {

    const listaStorage = localStorage.getItem('Lista');

    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
    const [name, setName] = useState('');
    const [venci, setVenci] = useState('');
    const [valor, setValor,] = useState('');

    useEffect(() => {
        localStorage.setItem('Lista', JSON.stringify(lista));
    }, [lista]);

    function adicionaItem(e) {
        e.preventDefault();

        if (name === '' || venci === '' || valor === '') {
            alert("Preencha todos os campos");
            return;
        }

        setLista([...lista, { text: name, data: venci, custo: valor, isCompleted: false }])
        setName("");
        setVenci("");
        setValor("");
        document.getElementById('inputconta');
        document.getElementById('inputconta1');
        document.getElementById('inputconta2');
    }

    function clicou(index) {
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }

    function deleta(index) {
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setLista(listaAux);
    }

    function deletatudo() {
        setLista([]);
    }



    return (
        <div className="container2">

            <h1>Ressumo das Finanças</h1>

            <form className="form" onSubmit={adicionaItem}>

                <input id="inputconta" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="  Nome da Conta" />
                <input id="inputconta1" type="text" value={venci} onChange={(e) => { setVenci(e.target.value) }} placeholder="  Vencimento  da Conta" />
                <input id="inputconta1" type="text" value={valor} onChange={(e) => { setValor(e.target.value) }} placeholder="  Valor" />

                <button type="submit" id="btn1">add</button>

                <div >
                    
                    <p ><span id="recebe" ></span>  </p>
                   
                </div>
            </form>


            <div className="listaContas">

                {
                    lista.length < 1
                        ?
                        <img width={300} height={300} src="./img/lista_capa.jpg" className="img1" alt="" />
                        :
                        lista.map((item, index) => (


                            <div
                                key={index}
                                className={item.isCompleted ? "item completo " : "item "}
                            >
                                <span onClick={() => { clicou(index) }}>{item.text}</span>
                                <span onClick={() => { clicou(index) }}>{item.data}</span>
                                <span onClick={() => { clicou(index) }}>{item.custo}</span>

                                <button onClick={() => { deleta(index) }} className="deletar">deletar</button>

                            </div>

                        ))

                }


            </div>
            {
                lista.length > 0 &&
                <button onClick={() => { deletatudo() }} className="deletarTudo">Deletar Todas</button>
            }
        </div>
    )


};


export default Ressumo;










