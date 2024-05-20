"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { CartItens, Products, ProductsContext, ProviderProps } from "./types";
import { api } from "../services/api";

export const IProductsContext = createContext({} as ProductsContext);

export function ProductContextProvider ({children}: ProviderProps) {

    const [cart, setCart] = useState([] as CartItens[]);
    const [openCart, setOpenCart] = useState(true);
    const [product, setProduct] = useState([] as CartItens[]) 

    async function getProducts() {
        try {
            const response = await api.get(
                "/products?page=1&rows=5&sortBy=id&orderBy=ASC"
            );
            const frstPageProducts = response.data.products;

            const response2 = await api.get(
                "/products?page=2&rows=5&sortBy=id&orderBy=ASC"
            
            )
            const scdPageProducts = response2.data.products;

            setProduct([...frstPageProducts, ...scdPageProducts]); 
        }catch(err) {
            console.error("Não foi possível obter produtos", err);
        }
    }
 
    
    useEffect(() => {
        getProducts()
    }, [])

    const addProducts = (item: CartItens) => {
        if(!cart.some((currentProducts: CartItens) => currentProducts.id === item.id)){
            const newCart = {...item, amount: 1};
            setCart([...cart, newCart])
        }
        else{
            console.log("Produto já adicionado.")
        }
    }

    const IncreaseAmount = (id: number) => {
        const newCart = cart.map((item) =>
            item.id === id ? {...item, amount: item.amount + 1} : item
        );
        setCart(newCart);
    }

    const DecreaseAmount = (id: number) => {
        const newCart = cart.map((item) =>
        item.id === id && item.amount > 1 ? {...item, amount: item.amount - 1} : item)

        setCart(newCart)
    }

    const RemoveProduct = (currentProduct: Products) => {
        const newCardProduct = cart.filter((product) => 
            product.id !== currentProduct.id);
        
        setCart(newCardProduct);
    }

    return (
        <IProductsContext.Provider
        value={{
            cart,
            setCart,
            addProducts,
            openCart,
            setOpenCart,
            product,
            setProduct,
            IncreaseAmount,
            DecreaseAmount,
            RemoveProduct,

        }} >
            {children}    
        </IProductsContext.Provider   >

        
    )
}

export const UseProductContext = () => useContext(IProductsContext)