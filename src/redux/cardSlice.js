import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", 
    initialState:{
        products: []
    },
    reducers: {
        addToCart: (state, action)=>{
            const hasProduct = state.products.find(p=>p.id==action.payload.id)
            if (hasProduct) {
                state.products = state.products.filter(p=>p.id!=hasProduct.id)
            }else{
                state.products.push(action.payload)
            }
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer