import React, { useState } from 'react';
import s from './Header.module.scss'
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo (1).png'
import iconsYoutube from '../../assets/image/soc-icons.png'
import iconsVk from '../../assets/image/soc-icons (1).png'
import iconsTelegramm from '../../assets/image/soc-icons (2).png'

const Header = () => {

    const [burgerMenu, setBurgerMenu] = useState(false)

    const style = burgerMenu ? { width: '100%' } : {};

    return (
        <header
            style={style}
            id={s.header}
        >
            <div className={s.header__menu}>
                <div className={s.header__menu__logo}>
                    <Link to='/'><img src={logo} alt="" /></Link>
                    <div onClick={() => setBurgerMenu(!burgerMenu)} className={s.header__menu__burgerMenu}>
                        <span></span>
                    </div>
                </div>
                <div className={s.header__menu__links}>
                    <img src={iconsYoutube} alt="" />
                    <img src={iconsVk} alt="" />
                    <img src={iconsTelegramm} alt="" />
                </div>
                <div className={burgerMenu ? s.header__burgerModal : s.header__opacityBurger}>
                    <div className={s.header__burgerModal__logo}>
                        <Link to='/'><img src={logo} alt="" /></Link>
                        <span onClick={() => setBurgerMenu(!burgerMenu)}></span>
                    </div>
                    <div className={s.header__burgerModal__navigate}>
                        <ul>
                            <li onClick={() => setBurgerMenu(!burgerMenu)}><Link to='/menu'><h3>Меню</h3></Link></li>
                            <li onClick={() => setBurgerMenu(!burgerMenu)}><Link to='/block'><h3>Доставка</h3></Link></li>
                            <li onClick={() => setBurgerMenu(!burgerMenu)}><Link to='/block'><h3>Оплата</h3></Link></li>
                            <li onClick={() => setBurgerMenu(!burgerMenu)}><Link to='/block'><h3>Бронь столика</h3></Link></li>
                        </ul>
                    </div>
                    <div className={s.header__burgerModal__links}>
                        <img src={iconsYoutube} alt="" />
                        <img src={iconsVk} alt="" />
                        <img src={iconsTelegramm} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;