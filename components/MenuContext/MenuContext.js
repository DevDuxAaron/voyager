import React,{ useState } from 'react'

const MenuContext = React.createContext()

const MenuProvider = (props) => {
    const [menuPosition, setMenuPosition] = useState(0);
    const [openComment, setOpenComment] = useState(false);

    let comments = [];

    return (
        <MenuContext.Provider value={{
            menuPosition,
            setMenuPosition,
            openComment,
            setOpenComment,
            comments
        }}>
            {props.children}
        </MenuContext.Provider>
    )
}

export { MenuContext, MenuProvider }

