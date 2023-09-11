import React from 'react';
import s from './Description.module.scss'
import { menu, breakfasts } from '../../config';
import { useParams } from 'react-router-dom';
import { IMenu } from '../../interface/interface';
import Contacts from '../../components/Contacts/Contacts';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import DifferentHeader from '../../components/DifferentHeader/DifferentHeader';

const Description = () => {

    const { id } = useParams()

    const selectBreakFast = breakfasts.filter((item: any) => {
        return item.id === id
    })

    console.log(typeof id);

    console.log(selectBreakFast);

    return (
        <>
            <DifferentHeader />
            <section id={s.description}>

                {selectBreakFast.map(el => (
                    <div className={s.description__breakfast}>
                        <div className={s.description__breakfast__info}>
                            <img src={el.image} alt="" />
                            <div className={s.description__breakfast__infoChild}>
                                <img src={el.image} alt="" />
                                <img src={el.image} alt="" />
                                <img src={el.image} alt="" />
                            </div>
                        </div>
                        <div className={s.description__breakfast__info}>
                            <h2>{el.title}</h2>
                            <span></span>
                            <div className={s.description__breakfast__infoChild}>
                                <p>{el.price} ₽</p>
                                <span></span>
                                <p>{el.weight} грамм</p>
                            </div>
                            <p>Количество порций:</p>
                            <div className={s.description__breakfast__infoChild}>
                                <QuantitySelector />
                            </div>
                            <span></span>
                            <h2>Сделать еще вкуснее</h2>
                            <div className={s.description__breakfast__infoAdditive}>
                                <h3>Тигровые креветки 60 г</h3>
                                <p>450 ₽</p>
                            </div>
                            <div className={s.description__breakfast__infoAdditive}>
                                <h3>Томаты / паприка</h3>
                                <p>80 ₽</p>
                            </div>
                            <div className={s.description__breakfast__infoAdditive}>
                                <h3>Бекон</h3>
                                <p>120 ₽</p>
                            </div>
                            <div className={s.description__breakfast__infoAdditive}>
                                <h3>Сыр чеддер 30 г</h3>
                                <p>80 ₽</p>
                            </div>
                        </div>
                    </div>
                ))}

            </section>
            <Contacts />
        </>
    );
};

export default Description;