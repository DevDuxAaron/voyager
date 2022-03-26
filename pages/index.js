import React,{ useEffect } from 'react'
import Menu from '../components/Menu/Menu'
import Header from '../components/Header/Header'
import PlacePhoto from '../components/PlacePhoto/PlacePhoto'
import LoginModal from '../components/LoginModal/LoginModal'
import { MenuContext } from '../components/MenuContext/MenuContext'
import { Comments } from '../components/Comments/Comments'

// import { collection, getDocs } from 'firebase/firestore'
// import { db } from '../firebase/firebase'

const Home = () => {
  const { openComment, setMenuPosition} = React.useContext(MenuContext)
  setMenuPosition(0)
  // useEffect(() => {
  //   const getData = async() => {
  //     const datos = await getDocs(collection(db, 'VOYAGER'));
  //     // console.log(datos.docs[0].data);
  //     datos.forEach((documento) => {
  //       console.log(documento.data);
  //     })
  //   }
  //   getData()
  // },[])
  return (
      <div className='container'>
        <Header />
        <div className='section'>
            <PlacePhoto
              idPlace=""
              user="Buck"
              placeName="Copacabana"
              ubication="La Paz, Bolivia"
              price="25"
              userImage="/userFemale.jpg"
              placeImage=""
              likes="2.4k"
              comments="175"
            />
            <PlacePhoto
              idPlace=""
              user="Buck"
              placeName="Lago"
              ubication="La Paz, Bolivia"
              price="72"
              userImage="/userMale.jpg"
              placeImage=""
              likes="56.4k"
              comments="1k"
            />
            <PlacePhoto
              idPlace=""
              user="Buck"
              placeName="Laguna"
              ubication="Cochabamba, Bolivia"
              price="98"
              userImage="/userFemale2.jpg"
              placeImage=""
              likes="2k"
              comments="235"
            />
            <Menu />
        </div>
        <Comments noComments="175" id="3" userImage="/userFemale.jpg"/>
      </div>
  )
}



export default Home