import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = ({ handleChange, handleSearch }) => {
    const { shoppingCart } = useSelector((state) => state.shoppingCart)
    const navigate = useNavigate()
    const [cargoPrice, setCargoPrice] = useState(500)

    const handleCartPath = () => {
        navigate('sepetim')
    }
    
    useEffect(() => {
        const total = shoppingCart?.reduce((a, b) => a + b?.price * b.count, 0)?.toFixed(2)
        setCargoPrice((500 - total).toFixed(2))
    }, [shoppingCart])

    return (
        <>
            <div className="header-wrapper">  
                    <a href='/' className='company-logo'> </a>
                <div className='search-input-area'>
                    <div className="magnifying-glass" />
                    <input onChange={handleChange} className='search-input' type="text" min="3"
                        placeholder='Ürün Ara'></input>
                    <button onClick={handleSearch} className='search-button'>Ara</button>
                </div>
                <div className='cart-shopping-area'>
                    <div className="cart-shopping" />
                    <button onClick={handleCartPath} className='cart-button'><span>Sepetim</span></button>
                    <div className='notification-bubble'><span
                        className='notification-piece'>{shoppingCart.length}</span></div>
                </div>
            </div>

            <section className='section-wrapper'>
                <h1 className='company-header'>Lorem Ipsum</h1>
                <div className='cargo-notification'>
                    <div className='cargo-notification-arrow' />
                    <div className='free-cargo-goal'>
                        <span className='notification-thunder'></span>
                        {cargoPrice > 0 && <span className='cargo-price-dynamic'>{cargoPrice} TL</span>}
                        <span
                            className='cargo-price-static'> {cargoPrice > 0 ? "ürün daha ekleyin kargo bedava" : "Kargo Bedava!"}</span>
                    </div>
                    <div className='free-cargo-bar'>
                        <div className='free-cargo-bar-inside'
                            style={{ width: `${cargoPrice === "500.00" ? 0 : 100 - 100 * cargoPrice / 500}%` }} />
                    </div>
                </div>
            </section>
        </>
    )
}


export default Header