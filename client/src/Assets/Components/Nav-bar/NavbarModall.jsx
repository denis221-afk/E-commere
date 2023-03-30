import { useEffect } from "react";

const NavBarModall = ({stateNav, funcNav, stateBasket, funcBasket}) => {

    useEffect(() => {
        window.document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape') {
                funcNav(false);
                funcBasket(false);
            }
        })
    },[])

    
    let styles = {
        fiil: {
            transition: '0.5s',
            opacity: 0,
            pointerEvents: 'none',
        },
        navModall: {
            transition: '0.7s',
            left: '-100%'
        }, 
        basket: {
            transition: '0.5s',
            opacity: 0,
            pointerEvents: 'none',
        }
    }



    if(stateNav) {
        styles.navModall.left = 0;
        styles.fiil.pointerEvents = 'all';
        styles.fiil.opacity = 1;
    }

    if(stateBasket) {
        styles.basket.pointerEvents = 'all';
        styles.basket.opacity = 1;
        styles.fiil.pointerEvents = 'all';
        styles.fiil.opacity = 1;
    }

    return(
        <>
        <div className="fillter" style={styles.fiil} onClick={() => {
            funcNav(false);
            funcBasket(false);
        }}></div>
        <div className="navbar--modall" style={styles.navModall}>
            <div className="navbar--modall-header">
                <h2>FDIK УКРАЇНА</h2>
            </div>

            <div className="body--modall">
                <ul className="menu">
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Доставка і оплата</a></li>
                    <li><a href="#">Політика Конф...</a></li>
                    <li><a href="#">Наш Facebook</a></li>
                    <li><a href="#">Наші контакти</a></li>
                </ul>
            </div>
        </div>

        <div className="basket--modall" style={styles.basket}>
            
        </div>
        </>
    )
}

export default NavBarModall