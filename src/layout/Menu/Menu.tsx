import React from 'react';
import s from './Menu.module.scss'
import { breakfasts } from '../../config';
import Contacts from '../../components/Contacts/Contacts';
import Card from '../../components/Card/Card';
import DifferentHeader from '../../components/DifferentHeader/DifferentHeader';

const Menu = () => {


    const breakfastsMenu = breakfasts.map(el =>
        <Card
            item={el}
            key={el.id}
        />
    )

    return (
        <>
            <section id={s.menu}>
                <DifferentHeader />
                <div className={s.menu__info}>
                    <div className="container">
                        <div className={s.menu__info__breakfasts}>
                            {breakfastsMenu}
                        </div>
                    </div>
                </div>
            </section>
            <Contacts />
        </>
    );
};

export default Menu;