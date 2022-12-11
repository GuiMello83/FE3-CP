import { useEffect } from "react";
import { useState } from "react";
import Card from "../Components/Card/Card";

import { linkAPI } from "../links";

const Home = () => {

  const [dentistaData, setDentistaData] = useState([]);

  //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  useEffect(() => {

  fetch(`${linkAPI}${"dentista"}`).then((response) =>
  response.json().then((data) => {
    setDentistaData(data);
    
  })
);
}, []);
     
  

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
       
      {dentistaData.map((dentistaCard) => {
          return <Card key={dentistaCard.matricula} dentista={dentistaCard} />;
        })}
      </div>
    </>
  );
};
      

export default Home;
