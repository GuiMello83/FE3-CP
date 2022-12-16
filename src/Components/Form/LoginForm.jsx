import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../hooks/Context/useToken";
import styles from "../../Components/Form/Form.module.css";

const LoginForm = () => {

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { changeToken } = useToken();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault()

    const requestHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const requestBody = {
      username: userName,
      password: userPassword,
    }
    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(requestBody)
    }

    fetch('http://dhodonto.ctdprojetos.com.br/auth', requestConfig).then((response) => {
      console.log(response)
      if (response.ok) {
        response.json().then((data) => {
          changeToken(data.token);
          navigate('/home');
          alert('Login realizado com Sucesso!');
        });
      } else {
        alert('senha errada');
      }
    });
  };


  return (
    <>
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
            <button

              className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;