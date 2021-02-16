import React from 'react';
import './App.css';

function App() 
{
  return (
    <div id="App">
      <FormRegisterUser />
    </div>
  );
}

function FormRegisterUser() 
{
  return (
    <form className="form_register_user">
      <div className="div_form_register_user">

        <legend id="form_register_user_legend"> Cadastrar Usuário </legend>

        {/* Campo Username
            Input for Username
        */}
        <label for="form_register_user_username">
          <input
            id="form_register_user_username"
            type="text"
            maxLength="100"
            className="input"
            placeholder="Nome"
            required="required"
          />
        </label>
        {/* End */}

        {/* Campo Email Usuário
            Input for User Email
        */}
        <label for="form_register_user_email" className="label">
          <input
            id="form_register_user_email"
            type="email"
            placeholder="Ex: maria@gmail.com"
            className="input"
            required="required"
          />
        </label>
        {/* End */}

        <label for="form_register_user_password" className="label">
          <input
            id="form_register_user_password"
            type="password"
            placeholder="Senha"
            className="input"
            required="required"
          />
        </label>
        {/* End */}
        <p />

        {/* Botões de Cadastro e Cancelamento de Cadastro
            Register Button and Cancel Button
        */}
        <div id="btn_form_register_user">
          <label for="btn_form_register_user_submit">
            <input
              id="btn_form_register_user_submit"
              type="button"
              value="Cadastar"
              required="required"
            />
          </label>
        </div>
        {/* End */}
      </div>
    </form>
  );
}
export default App;
