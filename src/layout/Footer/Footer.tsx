import React from 'react';
import s from './Footer.module.scss';
import logo from '../../assets/image/logo (1).png'

const Footer = () => {
    return (
        <footer id={s.footer}>
            <div className="container">
                <div className={s.footer__info}>
                    <img src={logo} alt="" />
                    <p>Политика конфиденциальности</p>
                    <h3>Дизайн d-e-n.ru</h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;