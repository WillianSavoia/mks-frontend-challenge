/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { IoBagCheckOutline } from 'react-icons/io5'
import styles from './styles.module.scss'
import { UseProductContext } from '@/app/Providers/productsContext'
import { CartItens } from '@/app/Providers/types'

export interface CardsProps {
    product: CartItens;
}


export function Cards ({product}: CardsProps){
    const { addProducts } = UseProductContext();

    const submit = (data: CartItens) =>
        addProducts(data);

    const ParcialDescription = () => {
        const CompleteDescription = `${product.description}`
        const ShowingPart = CompleteDescription.slice(0, 35)

        return(
            <span className={styles.description}>
                {ShowingPart}...
            </span>

        )
    }

    const OldPrice = `${product.price}`;
    const NewPrice = OldPrice.slice(0, -3) 

    return (
           
        
          <div className={styles.cards}>
            <div className={styles.cardContent}>
                <img src={product.photo} className={styles.foto} />
                <div className={styles.productPrice}>
                  <h2 className={styles.name}>{product.name}</h2>
                  <p className={styles.price}>R${NewPrice}</p>
                </div>
                 <ParcialDescription />
                </div>
            <button onClick={() => submit(product)}
            className={styles.buy}><IoBagCheckOutline className={styles.bag}/> COMPRAR</button>
          </div>
        
    )
}