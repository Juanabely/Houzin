import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

function Header() {
    const [menuOpened, setmenuOpened] = useState(false)
    const handleOutClick=()=>{
        setmenuOpened(false)
    }
    const getMenuStyles = (menuOpened)=>{
        if(document.documentElement.clientWidth <= 800)
            return{
        right: !menuOpened && '-100%'}
    }
    return (
        <>
            <section className="h-wrapper">
                <div className="flexCenter paddings innerWidth  h-container">
                    <img src="./logo1.png" alt="Logo" width={100} />

<OutsideClickHandler onOutsideClick={handleOutClick}>

                    <div className="flexCenter  h-menu"
                    style={getMenuStyles(menuOpened)}
                    >
                        <a href="">Residencies</a>
                        <a href="">Our value</a>
                        <a href="">Contact us</a>
                        <a href="">Get started</a>
                        <button className='button'>
                        <a href="">Contact</a></button>
                    </div></OutsideClickHandler>
                    <div className="menu-icon" onClick={()=>setmenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
                </div>
            </section>
        </>
    )
}

export default Header