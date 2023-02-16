import React from 'react'
import { useParams } from 'react-router-dom'

const Home = () => {
  const { cat } = useParams();
  return (
    <div>Hello { cat }</div>
  )
}

export default Home