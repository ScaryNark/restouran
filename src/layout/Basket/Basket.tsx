import React from 'react';
import s from './Basket.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import DifferentHeader from '../../components/DifferentHeader/DifferentHeader';
import { addItemToCart, removeItemFromCart } from '../../redux/slicer/basketSlice';
import { IMenu } from '../../interface/interface';

const Basket = () => {

    const dispatch = useAppDispatch();
    const goods = useAppSelector(state => state.basketSlice)


    console.log(goods);

    const handleAddToCart = (item: IMenu) => {
        dispatch(addItemToCart(item));
    };

    const handleRemoveFromCart = (item: IMenu) => {
        dispatch(removeItemFromCart(item));
    };

    const totalOfAllProducts = goods.goods.reduce((acc: number, rec: IMenu) => {
        return acc + rec.quantity * rec.price
    }, 0)


    return (
        <section id={s.basket}>
            <DifferentHeader />
            <div className="container">
                <h2>Общая цена: {totalOfAllProducts} ₽</h2>
                <div className={s.basket__goods}>
                    {Array.isArray(goods.goods) && goods.goods.map((el: any) => (
                        <div key={el.id} className={s.basket__goods__card}>
                            <img src={el.image} alt="" />
                            <h3>Название: {el.title}</h3>
                            <div className={s.basket__goods__cardInfo}>
                                <p> Цена: {el.quantity * el.price} ₽</p>
                                <p>Категория: {el.category}</p>
                            </div>
                            <div className={s.basket__goods__cardInfo}>
                                <p>Количество: {el.quantity}</p>
                                <p>Вес: {el.quantity * el.weight} грамм</p>
                            </div>
                            <div className={s.basket__goods__cardInfo}>
                                <button onClick={() => handleAddToCart(el)}>+</button>
                                <button onClick={() => handleRemoveFromCart(el)}>-</button>
                            </div>
                        </div>
                    ))}

                    {goods.goods.length === 0
                        ? <div className={s.basket__goods__empty}>
                            <h1>В корзине пусто</h1>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </section>
    );
};

export default Basket;