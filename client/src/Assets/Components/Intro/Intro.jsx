import '../../Style/intro.scss';
import FB from '../../Icons/fb.svg';
import phone from '../../Icons/phone.svg';

import bg0 from '../../img/introbj.jpg';
import bg1 from '../../img/Group.jpg';
import bg2 from '../../img/Group18.jpg';
import { useEffect, useState } from 'react';


const Intro = () => {
    useEffect(() => {
        const images = [bg0, bg1, bg2];
        let index = 0;
        setBackground(images[0])
        const intervalId = setInterval(() => {
          setBackground(images[index]);
          index = (index + 1) % images.length;
        }, 4000);
    
        return () => clearInterval(intervalId);
      }, []);

    const [backgroundImage, setBackgraund] = useState(null);


    function setBackground(backgraund) {
        setBackgraund(backgraund) 
    }

    return(
        <>
        <div>
            <div className="intro" style={{transition: '0.4s'  ,backgroundImage: `url(${backgroundImage})`}}>
                <div className="container">
                    <div className="intro__title">
                        <h1>FDIK УКРАЇНА</h1>
                        <div className="title__sub">Стаціанарні та Переносні Автономки , аналог вебасто
                        які забезпечують комфортну температуру в автомобілях та інших приміщеннях.</div>
                        <button className="buy">ЗАМОВИТИ</button>
                    </div>
                </div>
                <div className="bottom">
                    <a href="#">
                        <img src={FB} alt="Facebook" />
                        <div className="fb">@FDIK УКРАЇНА</div>
                    </a>
                    <a href="#">
                        <img src={phone} alt="phone number" />
                        <div className="phone">+380973127491</div>
                    </a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Intro;