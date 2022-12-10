import { useEffect } from "react";
import Card from "../Components/Card/Card";

const Home = () => {

  const [dentistaData, setDentistaData] = useState([]);

  //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  useEffect(() => {

    fetch(`${ctdUrl}${'dentista'}`).then(
      response => response.json().then((data) => {
        setDentistaData(data);
        console.log(data);
      })
    );
  }, []);
     

  
  

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        <Card />
        {dentistaData.map((item) => (
        <div className="card-grid container" 
        key={item.matricula}>
          <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"/>
           <a href={`/dentist/MatriculaDoDentista`}>{item.matricula}
           <h3 className={`card-title`}>{item.nome}</h3>
           </a>                 
        </div>        
      ))}
      </div>      
    </>
  );
};

export default Home;
