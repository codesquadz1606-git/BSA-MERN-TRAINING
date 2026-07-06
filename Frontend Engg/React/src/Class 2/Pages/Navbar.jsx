import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
export default function Navbar() {

    const data = useSelector((state) => state.wishlist);
    console.log(data)
    return (
        <div style={{padding:"20px 0px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1><Link to="/">Logo</Link></h1>
            <div style={{ display: "flex", gap: "30px", fontSize: "1.4rem" }}>
                {/* <a href="/allHotels">Hotels</a>
                <a href="/wishlist">Wishlist</a>
                <a href="/contact">Contact</a> */}

                <Link to="/allHotels">Hotels</Link>
                <Link to="/wishlist">Wishlist <span style={{ padding: "5px 10px", backgroundColor: "black", borderRadius: "50%" }}>{data.length}</span></Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}