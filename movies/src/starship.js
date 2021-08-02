import React from 'react';
import {useParams} from "react-router-dom";
import {getMovie, getStarship} from "./api";
import Loading from "./loading";

const Starship = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('')
  const params = useParams();

  React.useEffect(() => {
    setLoading(true);
    setErrorMessage('');
    (async () => {
      try {
        const data = (await getStarship(params.id)).data;
        setData(data)
        setLoading(false)
      }catch (err) {
        setErrorMessage(err.message)
        setLoading(false)
      }
    })()
  }, [params])

  if(loading) {
    return <Loading />
  }

  if(errorMessage) {
    return <div>{errorMessage}</div>
  }

  const content = (
    <div>
      <h1>{data.name}</h1>
      <p>Model: {data.model}</p>
      <p>Passengers: {data.passengers}</p>
    </div>
  )

  return (
    <div>
      {content}
    </div>
  )
}

export default Starship;
