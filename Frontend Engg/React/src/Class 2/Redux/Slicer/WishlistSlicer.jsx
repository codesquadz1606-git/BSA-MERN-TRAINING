import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = []

export const WishlistSlice = createSlice({
  name:"wishlist",
  initialState,
  reducers:{
    addToWish(state,action){
        let hotelExists= state.find((el)=>el.id===action.payload.id);
        if(hotelExists){
            toast.error("Hotel Already Added")
            return state;
        }
        else{
            state.push(action.payload)
        }
    },
    removeFromWish(state,action){
        return state.filter((el)=>{ return el.id!==action.payload})
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToWish , removeFromWish } = WishlistSlice.actions

export default WishlistSlice.reducer