import React from 'react'
import style from './PageLayout.module.css'
import headerLogo from '../../Assets/Image/headerLogo.svg'
const PageLogout = ({children}) => {
    let [navbarLayout,sectionLayout]=React.Children.toArray(children)
  return (
    <div className={style['app-container']}>
      <div className={style['app-header-bar']}>
       <div className={style['app-header-icons']}>
       <img src={headerLogo} alt='headerLogo' width='200' />
       </div>
       <div className={style['app-header-buttons']}>
        {navbarLayout}
      
       </div>

      </div>
      <div className={style['section']}>
        {sectionLayout}
        
         
      </div>
    </div>
  )
}

export default PageLogout