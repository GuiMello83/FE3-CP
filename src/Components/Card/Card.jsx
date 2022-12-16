import { useTheme } from '../../hooks/useTheme';

import styles from "./Card.module.css";


const Card = (props) => {
  const { theme } = useTheme();

  return (
    <>
      <div className={`card ${theme === 'dark' ? styles.cardDark : ''} `}>
        <a href={`/Detail/${props.dentista.matricula}`}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
          <div className={`card-body ${styles.CardBody}`}>

            <h5 className={`card-title ${styles.title}`}>
              {`${props.dentista.nome}`}
            </h5>

            <h6>{props.dentista.usuario.username}</h6>

          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
