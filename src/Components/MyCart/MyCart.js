import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem, deleteAllCartItem } from '../../Redux/Slice'
import './MyCart.scss'


const MyCart = () => {
    const { shoppingCart } = useSelector((state) => state.shoppingCart)
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0)

    const handleBack = () => {
        window.history.back()
    }

    useEffect(() => {
        const total = shoppingCart.reduce((a, b) => a + b.price * b.count, 0).toFixed(2)
        setTotalPrice(total)
    }, [shoppingCart])

    return (
        <div className='my-cart-wrapper'>
            <div className='control-button'>
                <button className='homepage-button' onClick={handleBack}><span>&#10229;</span></button>
                <button onClick={() => dispatch(deleteAllCartItem([]))}
                    className='homepage-button'>Sepeti Temizle
                </button>
            </div>

            <h2 className='cart-header'>Sepet</h2>

            <div className='cart-container'>
                <div className='cart-products'>
                    {
                        shoppingCart.map((item, index) => {
                            return (
                                <div key={index} className='cart-content'>
                                    <img src={item.image} alt={'tab'} className='cart-img'></img>
                                    <div className='cart-text-area'>
                                        <p className='cart-title'>{item.title}</p>
                                        <p className='cart-price'>{totalPrice} TL</p>
                                        <button onClick={() => dispatch(deleteItem(item.id))}
                                            className='cart-products-delete-add'>Ürünleri Sil
                                        </button>
                                        <p className='cart-price'>{item.count} Adet</p>
                                        <button onClick={() => dispatch(addItem(item))} className='cart-products-delete-add'>Ürün Ekle</button>
                                    </div>

                                </div>
                            )
                        })
                    }

                    {shoppingCart?.length === 0 &&
                        <div className='category-products-empty'> Sepetinizde Ürün Bulunmamaktır. </div>}
                </div>

                <div className='cart-total-price'>
                    <h1>Sipariş Özeti</h1>
                    <div>Toplam Tutar :{totalPrice} TL</div>
                    {totalPrice > 500 &&
                        <div>Kargo Ücretsiz</div>}
                </div>
            </div>
        </div>
    )
}

export default MyCart