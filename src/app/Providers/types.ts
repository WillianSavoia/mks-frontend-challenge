
import { Dispatch, ReactNode, SetStateAction } from "react";


export interface ProviderProps {
    children: ReactNode;
}

export interface Products {
    id: number;
    price: number;
    photo: string;
    name: string;
    brand: string;
    description: string;
}

export interface ProductsCards {
    product: Products;
}

export interface CartItens extends Products {
    amount: number;
}

export interface ProductsContext {
    openCart: boolean;
    setOpenCart: Dispatch<SetStateAction<boolean>>;
    product: CartItens[];
    setProduct: Dispatch<SetStateAction<CartItens[]>>;
    cart: CartItens[];
    setCart: Dispatch<SetStateAction<CartItens[]>>;
    addProducts: (product: CartItens) => void;
    RemoveProduct: (product: CartItens) => void;
    DecreaseAmount: (id: number) => void;
    IncreaseAmount: (id: number) => void;

}