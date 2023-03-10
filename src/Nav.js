import React, { useEffect, useState } from 'react'
import "./Nav.css"

export default function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY>100){
                handleShow(true);
            }
            else {
                handleShow(false)
            }

        })
        // return ()=>{
        //     window.removeEventListener("scroll")
        // }
    },[])



  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" className="nav_logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className="nav_avatar" />
      
    </div>
  )
}
