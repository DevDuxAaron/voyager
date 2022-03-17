import React from 'react'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import TagMenu from '../../components/TagMenu/TagMenu'
import { Gallery } from '../../components/Gallery/Gallery'

const Search = () => {
  return (
    <div className='container'>
        <Header />
        <div className='section'>
          <SearchBar />
          <TagMenu />
          <Gallery />
          <Menu />
        </div>
    </div>
  )
}
export default Search