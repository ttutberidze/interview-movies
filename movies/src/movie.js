import React from 'react';
import {getMovie} from "./api";
import {NavLink, useParams} from 'react-router-dom';
import Loading from "./loading";

const Movie = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('')
  const params = useParams();

  React.useEffect(() => {
    setLoading(true);
    setErrorMessage('');
    (async () => {
      try {
        const data = (await getMovie(params.id)).data;
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

  let starships = null

  if(data.starships && data.starships.length > 0) {
    starships = (
      <ul>
        {data.starships.map(url => {
          const urlArr = url.split('/');
          const id = urlArr[urlArr.length - 2]
          return <li key={id}><NavLink to={`/starship/${id}`}>Starship {id}</NavLink></li>
        })}
      </ul>
    )
  }


  const content = (
    <div>
      <h1>{data.title}</h1>
      <p>{data.opening_crawl}</p>
      {starships}
    </div>
  )

  return (
    <div>
      {content}
    </div>
  )
}

export default Movie;
