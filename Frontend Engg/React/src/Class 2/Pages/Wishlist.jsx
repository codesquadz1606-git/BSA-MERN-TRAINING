import { FaLocationArrow } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeFromWish } from "../Redux/Slicer/WishlistSlicer"

export default function WishList(){
    const wishlist=useSelector((state)=>state.wishlist)
    console.log(wishlist)

    let navigate=useNavigate()

    const dispatch=useDispatch()
    return(
        <>
            <h1>WishList</h1>
            {
                wishlist.length==0 ? <h1>No Hotel at Wishlist</h1> :
            <div style={{
                display:"flex",
                gap:"30px",
                flexWrap:"wrap",
                justifyContent:"center"
            }}>
                {
                    wishlist.map((el)=>(
                        <div style={{
                            width:"400px",
                            // backgroundColor:"white",
                            border:"2px solid white",
                            padding:"20px 0px",
                            borderRadius:"50px",
                            display:"flex",
                            flexDirection:"column",
                            gap:"40px",
                            alignItems:"center"
                        }}>
                            <img onClick={()=>{
                                navigate(`/detail/${el.id}`)
                            }} style={{
                                borderRadius:"50px"
                            }} width="300px" src={el.thumbnail} alt="" />
                            <h2 onClick={()=>{
                                navigate(`/detail/${el.id}`)
                            }}>{el.name}</h2>
                            <div style={{
                                display:"flex",
                                justifyContent:"space-between",
                                gap:"40px"
                            }}>
                                <p>Price : Rs {el.price}/-</p>
                                <p><FaLocationArrow/> {el.location}</p>
                            </div>
                            <button style={{
                                padding:"20px 40px",
                                backgroundColor:"red",
                                fontWeight:"bolder",
                                border:"none",
                                borderRadius:"30px"
                            }}
                            onClick={()=>{
                                dispatch(removeFromWish(el.id))
                                console.log("Remove")
                                console.log(el.id)
                                console.log(wishlist)
                            }}
                            >Remove from Wishlist</button>
                        </div>
                    ))
                }
            </div>
            }

        </>
    )
}