import '../../style/intro.scss';
import FB from '../../icons/fb.svg';
import phone from '../../icons/phone.svg';

const Intro = () => {
    return(
        <>
            <div className="intro">
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
        </>
    )
}

export default Intro;