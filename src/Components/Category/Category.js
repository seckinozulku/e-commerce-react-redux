import { useState } from 'react'
import './Category.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {addItem, decreaseItemCount} from '../../Redux/Slice'

const Category = ({ categoryData, filteredItem, handleCategorySelection }) => {
    const dispatch = useDispatch()
    const { shoppingCart } = useSelector((state) => state.shoppingCart)

    const [selectedCategory, setSelectedCategory] = useState('')

    const handleClick = (value) => {
        setSelectedCategory(value)
        handleCategorySelection(value)
    }

    return (
        <div className='category-wrapper'>
            <p className='market-location-text'>Lorem Market - İstanbul -
                <span className='location-green-text'> LoremBreadCrumb</span>
            </p>

            <div className='category-area'>
                <div className='category-icon' />
                <h3 className='category-header-text'>Kategoriler</h3>
            </div>

            <div className='category-option'>
                <div onClick={() => handleClick("")} className={`category-option-item ${selectedCategory === '' ? 'active' : ''}`}>Tüm Kategoriler</div>
                {categoryData?.map((item, index) => <div onClick={() => handleClick(item)} className={`category-option-item ${selectedCategory === item ? 'active' : ''}`} key={index}>{item}</div>)}
            </div>

            <h3 className='category-products-header'>Tüm Kategoriler</h3>
            <div className='category-products'>

                {
                    filteredItem?.map((item, index) => {
                        const isActive = shoppingCart.find(cartItem => cartItem.id === item.id)
                        return (
                            <div key={index} className='category-products-cards'>
                                <img className='category-products-image item' alt='TAB' src={item.image}></img>
                                <div className='category-products-info'>
                                    <p className='category-products-title item'>{item.title}</p>
                                    <p className='category-products-freeShipping item'>{item.freeShipping && 'Ücretsiz Teslimat'}</p>
                                </div>
                                <div className='category-products-button-height'>
                                    <p className='category-products-price item'>{item.price} TL</p>

                                    {
                                        !isActive &&
                                        <button onClick={() => dispatch(addItem(item))} className='category-products-button item' >Sepete Ekle</button>
                                    }
                                    {
                                        isActive &&
                                        <div className='piece-button-wrapper item'>
                                            <button onClick={() => dispatch(decreaseItemCount(item))} className='piece-button'><span>-</span></button>
                                            {isActive.count}
                                            <button onClick={() => dispatch(addItem(item))} className='piece-button'><span>+</span></button>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }

                {
                    filteredItem?.length === 0 &&
                    <div className='category-products-empty'>   Bu Kategoride Ürün Bulunmamaktır. </div>
                }
            </div>
        </div>
    )
}

export default Category