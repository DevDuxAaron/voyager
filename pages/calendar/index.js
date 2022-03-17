import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import { SubTitle } from '../../components/SubTitle/SubTitle'
import { CheckMenu } from '../../components/CheckMenu/CheckMenu'
import { Schedule } from '../../components/Schedule/Schedule'

const Calendar = () => {
  return (
    <div className='container'>
        <Header />
        <div className='section'>
          <SubTitle title='Mis viajes'/>
          <CheckMenu
            title1='Próximos'
            title2='Completados'
            title3='Cancelados'
          />
          <SubTitle title='Hoy'/>
            <Schedule
              user='Sara Alvarez'
              calification='4.8'
              price='175.00'
              origin='La Paz, Av. Arica'
              destiny='Copacabana'
              departure='8:40'
              arrival='11:40'
            />
          <SubTitle title='Mañana'/>
            <Schedule
              user='Alan Richard'
              calification='4.8'
              price='75.00'
              origin='La Paz, Av. Arce'
              destiny='Lago Titicaca'
              departure='9:00'
              arrival='11:40'
            />
          <SubTitle title='Marzo 10'/>
            <Schedule
              user='Rodrigo Castillo'
              calification='4.8'
              price='75.00'
              origin='Cochabamba'
              destiny='La Paz'
              departure='6:40'
              arrival='12:20'
            />
          <Menu />
        </div>
    </div>
  )
}

export default Calendar