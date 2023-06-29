import { useContext } from 'react'
import Alerta from '../../Alerta';
import ProdutoContext from './ProdutoContext';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(ProdutoContext);

    // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()	  

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Produto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}
	                className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtCod_produto" className="form-label">
                                    Código
                                </label>
                                <input
                                    type="number"
                                    readOnly
                                    className="form-control"
                                    id="txtCod_produto"
                                    name="cod_produto"
                                    value={objeto.cod_produto}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtEquipamentos" className="form-label">
                                    Equipamentos
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtEquipamentos"
                                    name="equipamentos"
                                    value={objeto.equipamentos}
                                    onChange={handleChange}
                                />
                            </div>
                                
                            <div className="form-group">
                                <label htmlFor="txtSuprimentos" className="form-label">
                                    Suprimentos
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtSuprimentos"
                                    name="suprimentos"
                                    value={objeto.suprimentos}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    value={objeto.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="valid-feedback">
                                    OK
                                 </div>

                                <div class="invalid-feedback">
                                    Informe o nome
                                </div>	
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtDescricao" className="form-label">
                                    Descrição
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtDescricao"
                                    name="descricao"
                                    value={objeto.descricao}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="valid-feedback">
                                    OK
                                </div>

                                 <div class="invalid-feedback">
                                 Informe o nome
                                </div>	
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtSerial" className="form-label">
                                    Serial
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtSerial"
                                    maxLength="40"
                                    name="serial"
                                    value={objeto.serial}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="valid-feedback">
                                    OK
                                </div>

                                <div class="invalid-feedback">
                                    Informe o nome
                                </div>	
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtValor" className="form-label">
                                    Valor
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtValor"
                                    maxLength="10"
                                    name="valor"
                                    value={objeto.valor}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="valid-feedback">
                                    OK
                                </div>

                                <div class="invalid-feedback">
                                    Informe o nome
                                </div>	
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" >
                                Salvar  <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Form;