import '../../Style/navbar.scss';
import burger from '../../Icons/hamburger.svg';
import basket from '../../Icons/basket.png';
import { useState } from 'react';
import NavBarModall from './NavbarModall';

const NavBar = () => {
    const [navModall , setModall] = useState(false);
    const [stateBasket, setBasket] = useState(false);


    function onHandleModall(state) {
        setModall(state);
    }
    function onHandleBasket(state) {
        setBasket(state);
    }


    return(
            <div className="navbar">
                <div className='navbar__left' onClick={() => onHandleModall(true)}>
                    <a href='#' className='hamburger'>
                        <img src={burger} alt="Меню" /> 
                    </a>
                </div>
                <div className='navbar__right-block'>
                    <a href="#" className='header__link'>Головна</a>
                    <a href="#" className='header__link'>Каталог</a>
                    <a href="#" className='basket' onClick={() => onHandleBasket(true)}>
                        <img src={basket} alt="Корзина"/>
                        <span>0</span>
                    </a>
                </div>
                <NavBarModall stateNav={navModall} funcNav={onHandleModall} stateBasket={stateBasket} funcBasket={onHandleBasket}/>
            </div>
    )
}

export default NavBar