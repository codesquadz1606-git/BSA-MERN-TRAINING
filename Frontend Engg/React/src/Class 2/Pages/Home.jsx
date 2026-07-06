import { useReducer, useState } from "react"
import { useNavigate } from "react-router-dom";

// let initialState={
//     location:"",
//     checkInDate:"",
//     checkOutDate:"",
//     adults:1,
//     children:0,
//     rooms:1
// }

// function reducer(){

// }

export default function Home() {
    let [status, setStatus] = useState(false)
    // let [searchDetails,dispatch]=useReducer(reducer,initialState)

    let [location,setLocation]=useState("");
    let [checkIn,setCheckIn]=useState("");
    let [checkOut,setCheckOut]=useState("");
    let [adults,setAdults]=useState(1);
    let [children,setChildren]=useState(0);
    let [room,setRooms]=useState(1);

    // console.log(searchDetails)

    let navigate=useNavigate()

    const serachData={
        location,
        checkIn,
        checkOut,
        adults,
        room,
        children,
        // timestamp:new timestamp
    }
    return (
        <>
            <h1>StayFinder</h1>
            <h2>
                Here you will find all the hotels according to your convenince.
            </h2>

            <div>
                <div>
                    <label htmlFor="">Location : </label>
                    <input type="text" placeholder="Enter Your Location" 
                        onChange={(e)=>{
                            setLocation(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Check In Date</label>
                    <input type="date" 
                        onChange={(e)=>{
                            setCheckIn(e.target.value)
                        }}
                    />

                </div>
                <div>
                    <label htmlFor="">Check Out Date</label>
                    <input type="date" 
                        onChange={(e)=>{
                            setCheckOut(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <div style={{
                        width: "200px",
                        height: "20px",
                        border: "2px solid white",
                        padding: "10px",
                        margin: "auto"
                    }}
                        onClick={() => {
                            setStatus(!status)
                        }}
                    >

                    </div>

                        {status && <div style={{
                            width:"300px",
                            position: "absolute",
                            bottom: "170px",
                            left: "755px",
                            backgroundColor: "black",
                            padding: "10px 5px",
                            display:"flex",
                            flexDirection:"column",
                            gap:"10px"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <div>Adults</div>
                                <div style={{
                                    display:"flex",
                                    gap:"10px"
                                }}>
                                    <button
                                        onClick={()=>{
                                            setAdults(adults-1)
                                        }}

                                        disabled={adults==1}
                                    >-</button>
                                    <span>{adults}</span>
                                    <button
                                        onClick={()=>{
                                            setAdults(adults+1)
                                        }}
                                    >+</button>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <div>Children</div>
                                <div style={{
                                    display:"flex",
                                    gap:"10px"
                                }}>
                                    <button
                                        onClick={()=>{
                                            setChildren(children-1)
                                        }}

                                        disabled={children==0}
                                    >-</button>
                                    <span>{children}</span>
                                    <button
                                        onClick={()=>{
                                            setChildren(children+1)
                                        }}
                                    >+</button>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <div>Rooms</div>
                                <div style={{
                                    display:"flex",
                                    gap:"10px"
                                }}>
                                    <button
                                        onClick={()=>{
                                            setRooms(room-1)
                                        }}

                                        disabled={room==1}
                                    >-</button>
                                    <span>{room}</span>
                                    <button
                                        onClick={()=>{
                                            setRooms(room+1)
                                        }}
                                    >+</button>
                                </div>
                            </div>
                        </div>}
                    
                </div>

                <button
                    onClick={()=>{
                        console.log(serachData)
                        navigate(`/search`,{state:serachData})
                    }}
                >Search</button>
            </div>
        </>
    )
}