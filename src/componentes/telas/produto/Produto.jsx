import { useState, useEffect } from 'react';
import ProdutoContext from './ProdutoContext';
import Tabela from './Tabela';
import Form from "./Form";


function Produto() {
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        cod_produto: "", equipamentos: "", suprimentos: "", nome: "", descricao: "", serial: "", valor: ""
    })

    const recuperaProdutos = async () => {
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/produtos`)
            .then(response => response.json())
            .then(data => setListaObjetos(data))
            .catch(err => console.log('Erro: ' + err))
    }

    const remover = async objeto => {
        if (window.confirm('Deseja remover este produto?')) {
            try {
                await fetch(`${process.env.REACT_APP_ENDERECO_API}/produtos/${objeto.cod_produto}`,
                    { method: "DELETE" })
                    .then(response => response.json())
                    .then(json => setAlerta({ status: json.status, message: json.message }))
                recuperaProdutos();
            } catch (err) {
                console.log('Erro: ' + err)
            }
        }
    }
    const recuperar = async cod_produto => {    
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/produtos/${cod_produto}`)
            .then(response => response.json())
            .then(data => setObjeto(data))
            .catch(err => console.log(err))
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/produtos`, {
                method: metodo,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(objeto),
            }).then(response => response.json())
                .then(json => {
                    setAlerta({ status: json.status, message: json.message });
                    setObjeto(json.objeto);
                    if (!editar) {
                        setEditar(true);
                    }
                });
        } catch (err) {
            console.error(err.message);
        }       
        recuperaProdutos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }	    

    useEffect(() => {
        recuperaProdutos();
    }, []);

    return (
        <ProdutoContext.Provider value={
            {
                alerta, setAlerta,
                listaObjetos, setListaObjetos,               
                recuperaProdutos,
                remover,
                objeto, setObjeto,
                editar, setEditar,
                recuperar,
                acaoCadastrar,
                handleChange
            }
        }>
            <Tabela />
            <Form/>
        </ProdutoContext.Provider>
    );
}

export default Produto;