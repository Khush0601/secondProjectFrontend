import React from 'react'
import style from './PageLayout.module.css'
const PageLogout = ({children}) => {
    let [navbarLayout,sectionLayout]=React.Children.toArray(children)
  return (
    <div className={style['app-container']}>
      <div className={style['app-header-bar']}>
       <div className={style['app-header-icons']}>
        <div className={style['icon']}>
          <img src='' alt=''/>
        </div>
        <div className={style['company-name']}>
          <div className={style['girman']}>Girman</div>
          <div className={style['technologies']}>TECHNOLOGIES</div>
        </div>
       </div>
       <div className={style['app-header-buttons']}>
        {navbarLayout}
        {/* <div>SEARCH</div>
        <div>WEBSITE</div>
        <div>LINKEDIN</div>
        <div>CONTACT</div> */}
       </div>

      </div>
      <div className={style['section']}>
        {sectionLayout}
        {/* <div className={style['section-div']}></div> */}
         
      </div>
    </div>
  )
}

export default PageLogout