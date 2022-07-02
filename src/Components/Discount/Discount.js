import './Discount.scss'

const Discount = () => {

    return (
        <div className='discount-wrapper'>
            <div className='free-delivery discount-card'>
                <div className='free-delivery-img'></div>
                <div className='free-delivery-info info'>
                    <h3>75 TL Üzerine Teslimat Ücreti Bizden</h3>
                    <button>Detaylı Bilgi</button>
                </div>
            </div>

            <div className='gift discount-card'>
            <div className='gift-img'></div>
                <div className='gift-info info'>
                    <h3>Hediye Kategorisi için Sepette %15 İndirim</h3>
                    <button>Hediye Ürünleri</button>
                </div>
            </div>

            <div className='stationary discount-card'>
            <div className='stationary-img'></div>
                <div className='stationary-info info'>
                    <h3>Kırtasiye Kategorisi için Sepette %15 İndirim</h3>
                    <button>Detaylı Bilgi</button>
                </div>
            </div>

        </div>
    )
}

export default Discount