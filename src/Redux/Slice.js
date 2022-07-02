import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    shoppingCart: [],
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const selectedItem = state.shoppingCart.find(item => item.id === action.payload.id)

            if (selectedItem) { // daha önceden eklenmiş
                state.shoppingCart = [
                    ...state.shoppingCart.filter(item => item.id !== action.payload.id),
                    {...action.payload, count: selectedItem.count + 1}
                ]
            } else { //ilk kez eklenen bir şey
                state.shoppingCart = [
                    ...state.shoppingCart,
                    {...action.payload, count: 1}
                ]
            }
        },
        decreaseItemCount: (state, action) => {
            const selectedItem = state.shoppingCart.find(item => item.id === action.payload.id)
            if (selectedItem.count === 1) {
                state.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload.id)
            } else {
                state.shoppingCart = [
                    ...state.shoppingCart.filter(item => item.id !== action.payload.id),
                    {...action.payload, count: selectedItem.count - 1}
                ]
            }
        },
        deleteItem: (state, action) => {
            state.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload)
        },
        deleteAllCartItem: (state, action) => {
            state.shoppingCart = action.payload
        },
    },
})

export const {addItem, decreaseItemCount , deleteItem , deleteAllCartItem} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer