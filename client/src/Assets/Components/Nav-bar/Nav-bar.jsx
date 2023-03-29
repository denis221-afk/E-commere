import '../../style/navbar.scss';
import burger from '../../icons/hamburger.svg';
import basket from '../../icons/basket.png';


const NavBar = () => {
    return(
            <div className="navbar">
                <div className='navbar__left'>
                    <a href='#' className='hamburger'>
                        <img src={burger} alt="Меню" /> 
                    </a>
                </div>
                <div className='navbar__right-block'>
                    <a href="#" className='header__link'>Головна</a>
                    <a href="#" className='header__link'>Каталог</a>
                    <a href="#" className='basket'>
                        <img src={basket} alt="Корзина"/>
                    </a>
                </div>
            </div>
       
    )
}

export default NavBar