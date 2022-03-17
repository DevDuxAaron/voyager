import React from 'react'
import Menu from '../components/Menu/Menu'
import Header from '../components/Header/Header'
import PlacePhoto from '../components/PlacePhoto/PlacePhoto'

const Home = () => {
  return (
    <div className='container'>
        <Header />
        <div className='section'>
            <PlacePhoto />
            <PlacePhoto />
            <PlacePhoto />
            <PlacePhoto />
            <PlacePhoto />
            <PlacePhoto />
            <PlacePhoto />
            <Menu />
        </div>
    </div>
  )
}

export default Home