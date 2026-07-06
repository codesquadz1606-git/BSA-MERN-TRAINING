import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import { ProductsListings, SearchHotel } from './Second'
import WishList from './Pages/Wishlist'
import Contact from './Pages/Contact'
import HotelDetail from './Pages/HotelDetail'
import TP from './Pages/Children/TP'
import IG from './Pages/Children/IG'
import FB from './Pages/Children/FB'
import NotFound from './Pages/NotFound'
export default function Routing(){
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/allHotels' element={<ProductsListings/>} />
                    <Route path='/wishlist' element={<WishList/>} />
                    <Route path='/contact' element={<Contact/>} >
                        <Route path="tp" element={<TP/>} /> 
                        <Route path="ig" element={<IG/>} /> 
                        <Route path="fb" element={<FB/>} /> 
                    </Route>
                    <Route path='/detail/:id' element={<HotelDetail/>} />
                    <Route path='*' element={<NotFound/>} />
                    <Route path="/search" element={<SearchHotel/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}