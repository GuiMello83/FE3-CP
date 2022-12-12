import { useEffect } from "react";
import { Link } from 'react-router-dom';

import { linkAPI } from "../../links"
import styles from "./Card.module.css";


const Card = (props) => {

  /* useEffect(() => {

    fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
      response => {
        response.json().then(
          data => {
            setCard(matricula)
          }
        )
      }
    )

  }, []); */
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
        
            <Link to={`/dentist/${props.dentista.matricula}`}>
            <h5
              className={`card-title ${styles.title}`}
            >{`${props.dentista.nome}`}</h5>
            </Link>
            <h6>{props.dentista.matricula}</h6>
            <Link to="/detail">Detalhes</Link>
        </div>
      </div>
    </>
  );
};

export default Card;
