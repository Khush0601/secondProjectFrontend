import React from 'react'
import PageLogout from '../../Component/PageLayout/PageLogout'
import style from './SearchResult.module.css'
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import Cards from '../../Component/Card/Cards';
const SearchResult = () => {
  const onFormSubmit=()=>{

  }
  return (
    <PageLogout>
      <div className={style['search-result-input']}>
       <form onSubmit={onFormSubmit}>
       <InputGroup size="lg" >
          
          <InputGroup.Addon>
            <SearchIcon />
          </InputGroup.Addon >
          <Input placeholder='search' />
        </InputGroup>
       </form>
      </div>
      <div className={style['search-result-content']}>
        <Cards/>
      </div>
    </PageLogout>
  )
}

export default SearchResult