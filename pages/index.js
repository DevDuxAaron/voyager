import React,{ useEffect } from 'react'
import { enableIndexedDbPersistence } from 'firebase/firestore'
import Menu from '../components/Menu/Menu'
import Header from '../components/Header/Header'
import { Photo } from '../components/Photo/Photo'
import { MenuContext } from '../components/MenuContext/MenuContext'
import { getAllPhoto } from '../firebase/getAllPhoto'
import { getPerson } from '../firebase/getAllPerson'

const Home = () => {
  const { openComment, setMenuPosition} = React.useContext(MenuContext)
  setMenuPosition(0)
  // useEffect(() => {
    // enableIndexedDbPersistence()
    // getAllPhoto()
    // getPerson()
  // },[])
  return (
      <div className='container'>
        <Header />
        <div className='section'>
            <Photo
              idPhoto="peeug4T6ebFngxLb0pKK"
            />
            {/* <Photo
              idPhoto="peeug4T6ebFngxLb0pKK"
            />
            <Photo
              idPhoto="peeug4T6ebFngxLb0pKK"
            /> */}
            <Menu />
        </div>
      </div>
  )
}

export default Home