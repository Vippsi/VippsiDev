import React from 'react'
import Hero from '../../img/hero image.svg'
const Header = () => {
    return (
        <div className='header-div'>
            <img className='hero-img' src={Hero}/>
            <div className='text-div'>
                <h1 className='header-h1'>Jonathan Thornton</h1>
                <p className='header-info'>Front End Developer</p>
                <button className='header-button'>See my work</button>
                
            </div>
            
        </div>
    )
}

export default Header