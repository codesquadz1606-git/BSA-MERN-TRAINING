import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export default function FormHandlingManual() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    function handleInputChange(e) {
        setFormData({
            ...formData, // extract all data
            [e.target.name]: e.target.value // add the new data in each key.
        })
    }

    // Jab foorm Submit ho rahaa h : turant refresh ho jaata h
    function handleSubmit(e) {
        e.preventDefault(); // stops the refresh of the form.
        console.log(formData)
    }
    return (
        <>
            <h1>Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Name :</label>
                <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="">Email :</label>
                <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export function FormHandlingPackage() {
    // package install : react-hook-form

    const {
        register, // handles input data
        reset,
        handleSubmit, // handles form data , it has preventDefault in built.
        formState: { errors }
    } = useForm()

    function handleData(data) {
        console.log(data);
        reset()
    }

    return (
        <>
            <h1>Form</h1>
            <form action="" onSubmit={handleSubmit(handleData)}>
                <label htmlFor="">Name :</label>
                <input type="text"
                    {...register("fullname",
                        {
                            required: true,
                            maxLength: { value: 10, message: "Maximum 10 Characters are allowed" },
                            minLength: { value: 5, message: "Minimum 5 Characters Needed" }
                        }
                    )}
                />
                {
                    errors.fullname && <span>{errors.fullname.message}</span>
                }
                <br />
                <label htmlFor="">Email :</label>
                <input type="email"
                    {...register("email",
                        {
                            required: true,
                        }
                    )}
                />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export function UseEffect() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(10);
    // UseEffect : It is a hook of react which handles the side effects of the UI.
    // This has 3 use cases:
    // useEffect(callback,dependency)

    // Use case 1: Withot any dependency --> It will create an effect on each render of a page.
    // useEffect(()=>{
    //     console.log("Use Case 1")
    // })

    // Use Case 2: With Empty Array : It will run only on the first refresh
    // useEffect(()=>{
    //     console.log("Use Case 2")
    // },[])

    // Use Case 3: With Dependency : It will only run when their is change in the dependency.
    // useEffect(()=>{
    //     console.log("Use Case 3")
    // },[count])
    return (
        <>
            <h1>Use Effect</h1>

            <div>
                <button onClick={() => { setCount(count + 1) }}>Increase Count</button>
                <button onClick={() => { setCount1(count1 + 1) }}>Increase Count1</button>
            </div>
        </>
    )
}

export function ProductsListings() {
    let [current, setCurrent] = useState(0);
    let [totalCount, setTotalCount] = useState(0)
    let PAGE_SIZE = 33;
    let url = `https://demohotelsapi.pythonanywhere.com/hotels?limit=${PAGE_SIZE}&skip=${PAGE_SIZE * current}`
    let [data, setData] = useState([]);
    async function dataFetch() {
        let res = await fetch(url)
        let hotelsData = await res.json()
        // console.log(hotelsData.count)
        setTotalCount(hotelsData.count)
        setData(hotelsData.data);
    }
    useEffect(() => {
        dataFetch()
    }, [current])
    console.log(data);
    console.log(totalCount)

    let no_of_pages = Math.ceil(totalCount / PAGE_SIZE)
    console.log(no_of_pages)

    // let start=current*PAGE_SIZE;
    // let end=start+PAGE_SIZE
    const pagination1 = () => {
        const page_w = [];
        if (no_of_pages <= 5) {
            for (let i = 0; i <= no_of_pages; i++) {
                return page_w.push(i)
            }
            return page_w;
        }


        page_w.push(0);
        let start = Math.max(1, setCurrent - 1);
        let end = Math.min(no_of_pages - 2, setCurrent + 1);

        if (setCurrent <= 1) {
            end = 2;
        }
        else if (setCurrent >= no_of_pages - 2) {
            start = no_of_pages - 3
        }
        if (start > 1) {
            page_w.push("...")
            for (let i = start; i <= end; i++) {
                page_w.push(i)
            }
        }
        else if (end <= no_of_pages - 2) {
            page_w.push("...")
        }
        page_w.push(no_of_pages - 1);

        return page_w
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                {
                    data.map((el) => (
                        <Product all={el} id={el.id} name={el.name} thumbnail={el.thumbnail} des={el.description} location={el.location} rating={el.rating} price={el.price} />
                    ))
                }
            </div>
            <button onClick={() => { setCurrent(current - 1) }}>privious</button>
            {/* <div>


                {
                    pagination1().map((el, index) => (
                        el == "..." ? (<span>...</span>) : (<button key={index} onClick={() => {
                            setCurrent(el)
                        }}>{el + 1}</button>)

                    ))
                }
                <span>...</span>
                <button onClick={() => { setCurrent(no_of_pages - 1) }}> {no_of_pages}</button>
            </div> */}

            <div>
                {
                    Array(no_of_pages).keys().map((el) => (
                        <button>{el + 1}</button>
                    ))
                }
            </div>

            <button onClick={() => { setCurrent(current + 1) }}>next</button>
        </>
    )
}

export function Product({ all, id, name, thumbnail, des, location, rating, price }) {
    const navigate = useNavigate()

    function toDetail(id) {
        navigate(`/detail/${id}`)
    }

    let dispatch = useDispatch()
    return (
        <div style={{ display: "flex", gap: "20px", alignItems: "center", borderRadius: "30px", }}>
            <div onClick={() => { toDetail(id) }}>
                <img width="280px" height="230px" src={thumbnail} alt="" />
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column", textAlign: "left" }}>
                <h2 onClick={() => { toDetail(id) }}>{name}</h2>
                <p onClick={() => { toDetail(id) }}>{des.slice(0, 200)}...</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>Location : {location}</p>
                    <p><StarRating rating={rating} /></p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>Price :Rs {price}/-</p>
                    <button style={{ backgroundColor: "white", color: "black", border: "none", padding: "10px 20px" }}
                        onClick={() => {
                            dispatch(addToWish(all))
                            navigate("/wishlist")
                        }}
                    >Move to WishList</button>
                </div>
            </div>
        </div>
    )
}

import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addToWish } from "./Redux/Slicer/WishlistSlicer";
function StarRating({ rating }) {
    let stars = [];
    for (let i = 1; i <= Math.ceil(rating); i++) {
        stars.push(<IoStarSharp color="yellow" />)
    }

    return stars;
}


export function SearchHotel() {
    const PAGE_SIZE = 10;
    const [totalPage, setTotalPage] = useState(0);
    const [hotelData, setHotelData] = useState([])
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const { state } = useLocation()

    let url = `https://demohotelsapi.pythonanywhere.com/hotels?search=${state.location}&limit=${PAGE_SIZE}&skip=${current * PAGE_SIZE}`

    console.log(state)

    async function searchFetch() {
        const res = await fetch(url)
        const data = await res.json()
        // console.log(data)

        if (data.data.length == 0) {
            setHasMore(false);
        }
        else {
            setHotelData((prev) => [...prev, ...data.data]);
        }

        setTotalPage(data.count)
        // setHotelData(data.data)
    }

    useEffect(() => {
        searchFetch()
    }, [current])

    function loadMore() {
        if (hasMore) setCurrent((prev) => prev + 1);
    }

    console.log(hotelData)

    return (
        <>
            <div style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                padding: "30px 0px"
            }}>
                <div style={{
                    width: "30%",
                    height: "100vh",
                    textAlign: "left",
                    position: "sticky",
                    left: "0px",
                    top: "0px"
                }}>
                    <h3>Location : {state.location}</h3>
                    <h3>Check In Date : {state.checkIn}</h3>
                    <h3>Check Out Date : {state.checkOut}</h3>
                    <h3>Adults : {state.adults}</h3>
                    <h3>Children : {state.children}</h3>
                    <h3>Room : {state.room}</h3>
                </div>
                <div style={{
                    width: "70%"
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "30px", }}>
                        {
                            hotelData.map((el) => (
                                <Product all={el} id={el.id} name={el.name} thumbnail={el.thumbnail} des={el.description} location={el.location} rating={el.rating} price={el.price} />
                            ))
                        }
                    </div>
                    <button
                        style={{
                            padding: "15px 30px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "bolder",
                            border: "none",
                            marginTop: "20px",
                            cursor: "pointer"
                        }}
                        // disabled={hotelData.length<=totalPage}
                        onClick={loadMore}
                    >
                        {/* {
                            hotelData
                            {totalPage - ((current + 1) * PAGE_SIZE)} More Results
                        }  */}

                        load more
                    </button>
                </div>

            </div>
        </>
    )
}