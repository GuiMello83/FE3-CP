import { useState } from "react";
import { useEffect } from "react";



import DetailCard from "../Components/DetailCard/DetailCard";

const Detail = () => {

  const [detail, setDetail] = useState([])

  useEffect(() => {

    fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
      response => {
        response.json().then(
          data => {
            setDetail(data)
          }
        )
      }
    )

  }, []);


  return (
    <>
      {
        detail.map(
          detail => {
            return (
              <DetailCard
                containerData={detail}
              />
            )
          }
        )
      }

    </>
  )
}

export default Detail