import { useEffect, useState } from "react";


import ScheduleFormModal from "../ScheduleForm/ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { linkAPI } from "../../links";

const DetailCard = (props) => {

  const [dentista, setDentista] = useState({
    nome:'',
    sobrenome:'',
    matricula:'',
  })
  const [usuario, setUsuario] = useState('')
 

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    fetch(`${linkAPI}${"dentista?matricula="}${dentista.matricula}`).then(
      response =>{
        response.json().then(
          data =>{            
            setDentista.nome(data.nome)
            setDentista.sobrenome(data.sobrenome)
            setUsuario(data.usuario.username)
          }
        )
      }
    )
  },[]);



  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Detalhe do dentista {`: ${dentista.nome}`} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {`${dentista.nome}`}</li>
              <li className="list-group-item">
                Sobrenome: {`${dentista.sobrenome}`}
              </li>
              <li className="list-group-item">
                Usuário: {`${usuario}`}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
