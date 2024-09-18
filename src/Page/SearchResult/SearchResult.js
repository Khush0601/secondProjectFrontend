import React from 'react'
import PageLogout from '../../Component/PageLayout/PageLogout'
import style from './SearchResult.module.css'
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import Cards from '../../Component/Card/Cards';
const SearchResult = () => {
  return (
    <PageLogout>
      <div className={style['search-result-input']}>
        <InputGroup size="lg" >
          
          <InputGroup.Addon>
            <SearchIcon />
          </InputGroup.Addon>
          <Input placeholder='search' />
        </InputGroup>
      </div>
      <div className={style['search-result-content']}>
        <Cards/>
      </div>
    </PageLogout>
  )
}

export default SearchResult