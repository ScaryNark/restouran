import React from 'react';
import { IMenu } from '../../interface/interface';
import s from './Card.module.scss'
import { Link } from 'react-router-dom';
import empty from '../../assets/image/Без названия.jpeg'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addItemToCart, removeItemFromCart } from '../../redux/slicer/basketSlice';

interface IProps {
    item: IMenu
}

const Card: React.FC<IProps> = ({ item }) => {

    const category = useAppSelector(state => state.categorySlice)
    const dispath = useAppDispatch()

    const handleBasket = (item: object | null) => {
        dispath(addItemToCart(item))
    }

    return (
        <>
            {category.category === item.category
                ? <div key={item.id} className={s.card}>
                    <div className={s.card__info}>
                        <Link to={`/menu/description/${item.id}`}>
                            <img src={item.image} alt="" />
                        </Link>
                        <p>{item.title}</p>
                        <div>
                            <h2>{item.price} ₽</h2>
                            <button onClick={() => handleBasket(item)}>В корзину</button>
                        </div>
                    </div>

                </div>
                : <div className={s.card}>
                    <div className={s.card__info}>
                        <img src={empty} alt="" />
                        <p>тут пусто</p>
                    </div>
                </div>
            }

        </>
    );
};

export default Card;