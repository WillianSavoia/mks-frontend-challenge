import styles from './styles.module.scss'
import { UseProductContext } from '@/app/Providers/productsContext';
import { Cards } from './Cards';

export function Content () {

    const { product } = UseProductContext();

    return (
        <>
                
                <div className={styles.content}>
                    {product.map((product) => (
                        <Cards key={product.id} product={product} />
                    ))}
                    </div>

        </>
    )
}