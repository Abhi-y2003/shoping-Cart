import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add: (state, action) => {
            state.push(action.payload)      //action.payload is jo khuch bhe bheja hoga add function k liye
        },
        remove: (state, action) => {
            return state.filter (  (item) => item.id !== action.payload )
        }

    }
})

export const {add , remove} = CartSlice.actions; 
export default CartSlice.reducer