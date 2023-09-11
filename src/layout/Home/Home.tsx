import React, { useEffect, useState } from 'react';
import s from './Home.module.scss'
import Main from '../../components/Main/Main';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchData } from '../../redux/action/fetchData';

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const Home = () => {

    const { isLoading, error } = useAppSelector(state => state.loaderSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData)
    }, [dispatch])

    console.log(isLoading);
    console.log(error);




    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                id={s.home}
            >
                <div className={s.home__loader}>
                    {isLoading && <p>Загрузка...</p>}
                    {error && <p>Произошла ошибка: {error}</p>}
                </div>
                <div className="container">
                    <div className={s.home__navigate}>
                        <ul>
                            <li><Link to='/menu'><h3>Меню</h3></Link></li>
                            <li><Link to='/block'><h3>Доставка</h3></Link></li>
                            <li><Link to='/block'><h3>Оплата</h3></Link></li>
                            <li><Link to='/block'><h3>Бронь столика</h3></Link></li>
                        </ul>
                    </div>
                    <div className={s.home__title}>
                        <motion.h1 custom={1} variants={textAnimation}>Видовой ресторан Food Exxe Relo на Крестовском острове</motion.h1>
                    </div>
                </div>
            </motion.section>
            <Main />
        </>
    );
};

export default Home;