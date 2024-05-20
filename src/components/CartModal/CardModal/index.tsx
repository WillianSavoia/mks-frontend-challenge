/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { CartItens } from '@/app/Providers/types';
import { UseProductContext } from '@/app/Providers/productsContext';
import { IoMdCloseCircle } from 'react-icons/io';

import styles from './styles.module.scss';

export interface CardModalProps{
    item: CartItens;
}

export function CardModal ({item}: CardModalProps) {

    const { RemoveProduct, IncreaseAmount, DecreaseAmount } = UseProductContext()
    
    const OldPrice = item.price * item.amount;

    

    return(
        <div className={styles.CartContent}>
            <div className={styles.card}>
                <img src={item.photo} className={styles.foto} />
                <span>{item.name}</span>
                <div className={styles.qtdProducts}>
                    <button onClick={() => IncreaseAmount(item.id)} className={styles.increase}>+</button>
                    <span className={styles.quantity}>{item.amount}</span>
                    <button onClick={() => DecreaseAmount(item.id)} className={styles.decrease}>-</button>
                </div>
                <span className={styles.price}>R${OldPrice}</span>
                <IoMdCloseCircle size={25} onClick={() => RemoveProduct(item)} className={styles.close}/>
            </div>
        </div>
    )
}