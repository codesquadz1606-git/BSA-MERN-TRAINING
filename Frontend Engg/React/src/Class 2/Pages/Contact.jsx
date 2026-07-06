import { Outlet, useNavigate } from "react-router-dom"

export default function Contact(){

    let navigate=useNavigate()
    return(
        <>
            <h1>Contact Details</h1>

            <div>
                <button onClick={()=>{navigate("tp")}}>Via Telephon No</button>
                <button onClick={()=>{navigate("ig")}}>Via Instagram</button>
                <button onClick={()=>{navigate("fb")}}>Via Facebook</button>
            </div>

            <Outlet/>
        </>
    )
}