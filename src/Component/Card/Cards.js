import React from 'react'
import style from './cards.module.css'
import { Avatar } from 'rsuite'
import LocationIcon from '@rsuite/icons/Location';
import PhoneFillIcon from '@rsuite/icons/PhoneFill';
const Cards = () => {
  return (
    <div className={style['card-container']}>
         <div className={style['profile']}>
           <div >
           <Avatar size="xl" src="https://i.pravatar.cc/150?u=2" circle />
           </div>
         </div>
         <div className={style['name']}>
            <div className={style['fullname']}><h3>Anjali Sharma</h3></div>
            <div className={style['location']}>
                <span className={style['location-sym']}><LocationIcon/></span>
                <span  className={style['location-name']}>patna</span>
            </div>
         </div>
         <div className={style['contact']}>
            <div className={style['phone-cont']}>
                <div className={style['phone']}>
                 <span className={style['ph-icon']}><PhoneFillIcon/></span>
                 <span>1234567890</span>
                </div>
                <div className={style['avail']}>Available on phone</div>
            </div>
            <div className={style['fetch']}>Fetch Details</div>
         </div>
    </div>
  )
}

export default Cards