import { useContext } from 'react'
import ProdutoContext from './ProdutoContext';
import Alerta from '../../../componentes/Alerta';

function Tabela() {

    const { setObjeto, alerta, setAlerta, listaObjetos, remover, setEditar, recuperar } = useContext(ProdutoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Produtos</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => {
                    setObjeto({
                        cod_produto: 0,
                        equipamentos: "",
                        suprimentos: "",
                        nome: "",
                        descricao: "",
                        serial: "",
                        valor: ""
                    });                  

                    setEditar(false);
                    setAlerta({ status: "", message: "" });
                }}>
                Novo <i className="bi bi-file-earmark-plus"></i>
            </button>
            {listaObjetos.length === 0 && <h1>Nenhum produto encontrado</h1>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">cod_produto</th>
                                <th scope="col">equipamentos</th>
                                <th scope="col">suprimentos</th>
                                <th scope="col">nome</th>
                                <th scope="col">descrição</th>
                                <th scope="col">serial</th>
                                <th scope="col">valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.cod_produto}>
                                    <td align="center">
                                        <button className="btn btn-info"
                                            data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={() => {
                                                recuperar(objeto.cod_produto);
                                                setEditar(true);
                                                setAlerta({ status: "", message: "" });
                                            }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => { remover(objeto.cod_produto); }}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <th scope="row">{objeto.cod_produto}</th>
                                    <td>{objeto.equipamentos}</td>
                                    <td>{objeto.suprimentos}</td>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.descricao}</td>
                                    <td>{objeto.serial}</td>
                                    <td>{objeto.valor}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Tabela;