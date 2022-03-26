import React from 'react'
import Menu from '../../components/Menu/Menu'
import { MenuContext } from '../../components/MenuContext/MenuContext'

const Maps = () => {
    const {setMenuPosition} = React.useContext(MenuContext)
    setMenuPosition(1)
    return (
        <div>
            Maps
            <Menu />
        </div>
    )
}

export default Maps