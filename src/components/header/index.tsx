'use client'
import { useState } from 'react';
import styles from './styles.module.scss'
import { FaShoppingCart } from "react-icons/fa";
import { CartModal } from '../CartModal';
import { UseProductContext } from '@/app/Providers/productsContext';

export function Header() {

    const { openCart ,setOpenCart, cart } = UseProductContext();

    const items = cart.length;

    return (
        <>
            <div className={styles.header}> 
                <div className={styles.logo}>
                    <h1 className={styles.title}>MKS</h1> 
                    <h2 className={styles.subtitle}>Sistemas</h2>
                </div>

                <button
                className={styles.cart}
                onClick={() => setOpenCart(false)}
                >
                    <FaShoppingCart
                    size={20}
                    />
                    <span className={styles.number}>{items}</span>
                </button>
            </div>

            {openCart === false && 
            
            <CartModal onClick={() => setOpenCart(true)} />}
        </>

        

        
    ) 
    
}