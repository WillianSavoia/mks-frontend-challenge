import { UseProductContext } from '@/app/Providers/productsContext';
import { IoMdCloseCircle } from "react-icons/io";
import { CardModal } from './CardModal';
import styles from './styles.module.scss'

interface CartModalProps {
    onClick: () => void;
    
    
}

export function CartModal ({onClick}: CartModalProps) {

    const { cart, setOpenCart } = UseProductContext();

    const TotalPrice = cart.reduce((acc, product) => {
        return product.price * product.amount + acc;
    }, 0)

    const buy = () => {
        setOpenCart(true)
    }

    
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.CartHeader}>
                    <h1 className={styles.CartTitle}>
                        Carrinho de Compras
                    </h1>
                    <IoMdCloseCircle 
                    onClick={onClick}
                    size={30}
                    className={styles.close}/>
                </div>    
                {cart.map((item) => (
                    <CardModal key={item.id} item={item} />
                ))}
                
                <h2 className={styles.total}>Total: <p>R${TotalPrice}</p></h2>
                <button 
                onClick={buy} 
                className={styles.btn}>Finalizar Compra</button>
            </div>
        </>
    )
}