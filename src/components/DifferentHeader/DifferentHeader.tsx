import React from 'react';
import s from './DifferentHeader.module.scss'
import { Link } from 'react-router-dom';
import profile from '../../assets/image/mdi_account.png'
import basket from '../../assets/image/fa-solid_shopping-basket.png'
import { menu } from '../../config';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { handleCategory } from '../../redux/slicer/categorySlice';

const DifferentHeader = () => {

    const category = useAppSelector(state => state.categorySlice)

    const dispath = useAppDispatch()

    const handleItemClick = (title: string) => {
        dispath(handleCategory(title))
    };


    return (
        <div className={s.differentHeader}>
            <div className={s.differentHeader__profile}>
                <h3>Личный кабинет</h3>
                <Link to='/'><img src={profile} alt="" /></Link>
                <Link to='/menu/basket'><img src={basket} alt="" /></Link>
            </div>
            <div className={s.differentHeader__title}>
                <Link to='/menu'>
                    <ul>

                        {menu.map(item => (
                            <li
                                key={item.id}
                                onClick={() => handleItemClick(item.title)}
                            >
                                {item.title}
                                {category.category === item.title
                                    ? <span></span>
                                    : ''}
                            </li>
                        ))}
                    </ul>
                </Link>
            </div>
        </div>
    );
};

export default DifferentHeader;