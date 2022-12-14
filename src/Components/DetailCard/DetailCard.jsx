import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ScheduleFormModal from "../ScheduleForm/ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { linkAPI } from "../../links";
import { useTheme } from '../../hooks/useTheme';

const DetailCard = () => {
  const { theme } = useTheme();
  const { matricula } = useParams();
  const [dentista, setDentista] = useState({});
  const [username, setUsername] = useState("");

  setTimeout(() => {
    setUsername(dentista.usuario.username);
  }, 10);

  useEffect(() => {
    fetch(`${linkAPI}/dentista?matricula=${matricula}`).then((response) => {
      response.json().then((data) => setDentista(data));
    });
  }, [matricula]);

  return (
    <>
      {username !== "" ? (
        <>
          <h1>Detail about Dentist {dentista.nome} </h1>
          <section
            className={`card col-sm-12 col-lg-6 container ${
              theme === "dark" ? styles.cardDark : ""
            }`}
          >
            <div className={`card-body row `}>
              <div className="col-sm-12 col-lg-6">
                <img
                  className="card-img-top"
                  src="/images/doctor.jpg"
                  alt="doctor placeholder"
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <ul className="list-group">
                  <li className="list-group-item">Nome: {dentista.nome}</li>
                  <li className="list-group-item">
                    Sobrenome: {dentista.sobrenome}
                  </li>
                  <li className="list-group-item">Usuário: {username}</li>
                </ul>
                <div className="text-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={`btn btn-${theme} ${styles.button}`}
                  >
                    Marcar consulta
                  </button>
                </div>
              </div>
            </div>
          </section>
          <ScheduleFormModal />
        </>
      ) : null}
    </>
  );
};

export default DetailCard;
