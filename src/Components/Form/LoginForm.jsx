import { useState } from "react"
import { useNavigate } from "react-router-dom";


import styles from "../Form/Form.module.css";
import { linkAPI } from "../../links";

const LoginForm = () => { 

  const [user, setUser] = useState({
    name:'',
    password:'',
  })
  const rote = useNavigate()
  const [status, setStatus ] = useState({
    type: '',
    mensagem: ''
  });

  function validade(){
    if(user.name.length < 3) return setStatus({type: 'error', mensagem:'Verifique suas informações novamente'})
  }


  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro

    e.preventDefault()

    const userData = {
      username: user.name,
      password: user.password,
    }

    if(!validade()) return;

    const requestConfig = {
      method: 'POST',
      /* headers: requestHeaders, */
      body: JSON.stringify(userData)
    }

    fetch(`${linkAPI}auth`, requestConfig).then(
      response => {
        
        if(response.status === 200) {
          response.json().then(
            data => {
              localStorage.setItem('authToken', data.jwt)
              /* setAuthToken(data.jwt) */
              setStatus({
                type: 'success',
                mensagem: "Usuário autenticado com sucesso"
              })
            }
            
          )
          rote('home')
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Usuário ou senha não conferem"
          });
          
        }
      }
    )
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
      {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
      {status.type === 'error' ? <p style={{ color: "ff0000" }}>{status.mensagem}</p> : ""}

        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}> 
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;