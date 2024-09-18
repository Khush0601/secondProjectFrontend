import React from 'react'
import PageLogout from '../../Component/PageLayout/PageLogout'
import style from './Search.module.css'
import sectionLogo from '../../Assets/Image/sectionLogo.svg'
import { Input, InputGroup } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search';
const Search = () => {
  return (
       <PageLogout>
       <div className={style['app-header-buttons']} >
       <div>SEARCH</div>
        <div>WEBSITE</div>
        <div>LINKEDIN</div>
        <div>CONTACT</div>
        </div>
       
        <div className={style['section-div']}>
          <div className={style['section-upper']}>
           <img src={sectionLogo} alt='sectionlOgo' width={500}/> 
          </div>
          <div className={style['section-lower']}>
          <InputGroup size="lg" >
          
          <InputGroup.Addon>
            <SearchIcon />
          </InputGroup.Addon>
          <Input placeholder='search' />
        </InputGroup>
          </div>
        </div>
      
   </PageLogout>
  )
}

export default Search