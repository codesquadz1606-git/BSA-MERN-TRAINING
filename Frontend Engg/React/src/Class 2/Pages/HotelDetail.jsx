import { useParams } from "react-router-dom"

export default function HotelDetail(){
    const{id}=useParams()
    return(
        <>
            <h1>Hotel Id : {id}</h1>
        </>
    )
}