import react, { useState } from "react";
import './ControleFin.css';


include: './Ressumo'



function ControleFin() {


    const [valor1, setValor1,] = useState('');
     
  

    const handleChage = (event) => {
        setValor1(event.target.value);
    };


   
    return (
        <div className="container">
            <h1>Controle Financeiro Pessoal</h1>

            <img width={300} height={300} src="./img/foto_capa.jpg" alt="" className="img" />
            
            <form action="">
                    
                <input type="text" value={valor1} onChange={handleChage} placeholder="Digite Sua Receita Mensal" />
                
                <h1>saldo = {valor1 -10}</h1>
            </form>

            <button type="submit"  >Entrar</button>

        </div>
    )
}
export default ControleFin;