import React, { useState } from 'react';
import s from './Main.module.scss'
import imageCardOne from '../../assets/image/Rectangle 40.png'
import imageCardTwo from '../../assets/image/Rectangle 42.png'
import { motion } from 'framer-motion';
import Contacts from '../Contacts/Contacts';

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

const Main = () => {


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.main}
        >
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className={s.main__restouran}
                >
                    <div className={s.main__restouran__title}>
                        <motion.h3 custom={1} variants={scrollAnimation}>о ресторане</motion.h3>
                        <span></span>
                    </div>
                    <div className={s.main__restouran__info}>
                        <motion.h1 custom={2} variants={scrollAnimation}>Food Exxe Relo</motion.h1>
                        <motion.p custom={3} variants={scrollAnimation}>
                            Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh.
                            In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor.
                            Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.
                            <br />
                            <br />
                            Morbi pellentesque enim massa laoreet vel id.
                            Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula.
                            Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor.
                            Fringilla luctus pretium in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis.
                            Dui, scelerisque vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat vel. At.
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className={s.main__restouran}
                >
                    <div className={s.main__restouran__title}>
                        <motion.h3 custom={1} variants={scrollAnimation}>меню</motion.h3>
                        <span></span>
                    </div>
                    <div className={s.main__restouran__info}>
                        <motion.h1 custom={2} variants={scrollAnimation}>Меню</motion.h1>
                        <motion.p custom={3} variants={scrollAnimation}>
                            At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat.
                            Nascetur nunc neque, varius massa aliquam interdum turpis massa.
                            Ac tortor aliquam risus, interdum nisl mauris sit.
                            Ut placerat fermentum pellentesque ac at.
                            Vitae venenatis faucibus urna mi eget vitae quam eu.
                            Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.
                            Nunc cras cras aliquet blandit faucibus massa sagittis semper.
                        </motion.p>
                    </div>
                    <div className={s.main__restouran__image}>
                        <div className={s.main__restouran__imageCard}>
                            <motion.img custom={2} variants={scrollAnimation} src={imageCardOne} alt="" />
                            <div className={s.main__restouran__imageCardTitle}>
                                <motion.h3 custom={3} variants={scrollAnimation}>Основное меню</motion.h3>
                                <span></span>
                            </div>
                        </div>
                        <div className={s.main__restouran__imageCard}>
                            <motion.img custom={2} variants={scrollAnimation} src={imageCardTwo} alt="" />
                            <div className={s.main__restouran__imageCardTitle}>
                                <motion.h3 custom={3} variants={scrollAnimation}>Барная карта</motion.h3>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className={s.main__restouran}
                >
                    <div className={s.main__restouran__title}>
                        <motion.h3 custom={1} variants={scrollAnimation}>доставка</motion.h3>
                        <span></span>
                    </div>
                    <div className={s.main__restouran__info}>
                        <motion.h1 custom={2} variants={scrollAnimation}>Служба доставки</motion.h1>
                        <motion.p custom={3} variants={scrollAnimation}>
                            Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a.
                            In risus, venenatis enim vitae mauris aliquet orci.
                            Consectetur nibh interdum nullam ut lobortis eu etiam sem.
                            Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse.
                            Semper aliquam id et ultrices velit donec lacus.
                            In odio sit nibh volutpat cras placerat sit feugiat dignissim.
                            Rutrum et suspendisse tortor, lobortis eleifend in fringilla.
                            Egestas cursus imperdiet cursus dui, nulla id massa.
                            Hendrerit nam enim semper porttitor imperdiet diam semper.
                            Nulla sit etiam cras morbi enim elementum euismod sapien.
                        </motion.p>
                    </div>
                    <div className={s.main__restouran__button}>
                        <motion.button custom={3} variants={scrollAnimation}>Подробнее</motion.button>
                        <motion.button custom={3} variants={scrollAnimation}>Условия доставки</motion.button>
                    </div>
                </motion.div>
            </div>
            <Contacts />
        </motion.div >
    );
};

export default Main;