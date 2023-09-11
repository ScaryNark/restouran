import React, { useState } from 'react';
import location from '../../assets/image/Vector (5).png'
import phone from '../../assets/image/ci_phone.png'
import { motion } from 'framer-motion';
import s from './Contacts.module.scss'


const scrollAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const Contacts = () => {

    const [toggle, setToggle] = useState(false)

    console.log(toggle);

    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.card}
            onClick={() => setToggle(!toggle)}
        >
            <div className={s.card__title}>
                <motion.h3 custom={1} variants={scrollAnimation}>контакты</motion.h3>
                <span></span>
            </div>
            <div className={s.card__delivery}>
                <div className={s.card__delivery__info}>
                    <div className={s.card__delivery__infoTime}>
                        <div>
                            <motion.h3 custom={1} variants={scrollAnimation}>2</motion.h3>
                            <motion.p custom={1} variants={scrollAnimation}>мин</motion.p>
                        </div>
                        <motion.p custom={1} variants={scrollAnimation}>
                            из центра
                            <br />
                            Санкт-Петербурга
                        </motion.p>
                    </div>
                    <div className={s.card__delivery__infoTime}>
                        <div>
                            <motion.h3 custom={1} variants={scrollAnimation}>12</motion.h3>
                            <motion.p custom={1} variants={scrollAnimation}>мин</motion.p>
                        </div>
                        <motion.p custom={1} variants={scrollAnimation}>
                            из города
                            <br />
                            Зеленогорск
                        </motion.p>
                    </div>
                    <div className={s.card__delivery__infoTime}>
                        <div>
                            <motion.h3 custom={1} variants={scrollAnimation}>42</motion.h3>
                            <motion.p custom={1} variants={scrollAnimation}>мин</motion.p>
                        </div>
                        <motion.p custom={1} variants={scrollAnimation}>
                            из аэропорта
                            <br />
                            Пулково
                        </motion.p>
                    </div>
                    <div className={s.card__delivery__infoTime}>
                        <div>
                            <motion.h3 custom={1} variants={scrollAnimation}>52</motion.h3>
                            <motion.p custom={1} variants={scrollAnimation}>мин</motion.p>
                        </div>
                        <motion.p custom={1} variants={scrollAnimation}>
                            из города
                            <br />
                            Павловск
                        </motion.p>
                    </div>
                </div>
                <div className={s.card__delivery__mapsBlock}>
                    <motion.iframe
                        custom={1}
                        variants={scrollAnimation}
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5848.508298798211!2d74.5708881!3d42.8674796!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1693908167998!5m2!1sru!2skg"
                        loading="lazy"
                    >
                    </motion.iframe>
                </div>
                {toggle && <div className={s.card__delivery__modal}>
                    <div className="container">
                        <div className={s.card__delivery__modalMaps}>
                            <div className={s.card__delivery__modalMapsInfo}>
                                <div>
                                    <img src={location} alt="" />
                                    <p>Санкт-Петербург, Северная дорога, 11 </p>
                                </div>
                                <div>
                                    <img src={phone} alt="" />
                                    <p>+7 (921) 777-77-77</p>
                                </div>
                            </div>
                            <div className={s.card__delivery__modalMapsTime}>
                                <h3>Время работы</h3>
                                <div>
                                    <h3>Вск-Чт</h3>
                                    <p>с 12:00 до 23:00</p>
                                </div>
                                <div>
                                    <h3>Пт-Сб</h3>
                                    <p>с 12:00 до 03:00</p>
                                </div>
                            </div>
                            <div className={s.card__delivery__modalMapsButton}>
                                <button>Бронь столика</button>
                                <button>Задать вопрос</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </motion.div>
    );
};

export default Contacts;