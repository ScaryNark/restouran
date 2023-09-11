import React, { useState } from 'react';
import up from '../../assets/image/Polygon 1.png'
import down from '../../assets/image/Polygon 2.png'
import s from './QuantitySelector.module.scss'

const QuantitySelector = () => {

    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increment = () => {
        setQuantity(quantity + 1);
    };

    return (
        <>
            <div className={s.quantity}>
                <input type="number" value={quantity} min={1} readOnly />
                <div className={s.quantity__button}>
                    <button onClick={increment}></button>
                    <button onClick={decrement}></button>
                </div>
                <button>В корзину</button>
            </div>
        </>
    );
};

export default QuantitySelector;