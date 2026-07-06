import { configureStore } from '@reduxjs/toolkit'
import { WishlistSlice } from '../Slicer/WishlistSlicer'

export const wishlistStore=configureStore({
    reducer:{
        wishlist:WishlistSlice.reducer
    }
})