import React from 'react'
import styles from '@/app/page.module.css'
const ContactSection = () => {
  return (
    <div className="flex_column gap2rem width100" style={{margin:"5rem 0"}}>
    <div className="flex_row gap2rem wrap" style={{width:"85%"}}>
      <div className="flex_column gap1rem">
        <div className="svg_icon">
          
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <h4>nofil.bashiir@gmail.com</h4>
        <p className={`${styles.hero_subtitle_skill_section}`}>Email</p>
      </div>


      <div className="flex_column gap1rem">
      <div className="svg_icon">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="currentColor"/>
        </svg>
      </div>
        <h4>+1 619 9285168 <span style={{opacity:"0.6",fontSize:"1.5rem", fontWeight:"lighter"}}>|</span> +92 305 410 66 89 </h4>
        <p className={`${styles.hero_subtitle_skill_section}`}>Phone</p>
      </div>

    </div>
    </div>
  )
}

export default ContactSection