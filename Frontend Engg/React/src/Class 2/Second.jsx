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

    const{
        register, // handles input data
        reset,
        handleSubmit, // handles form data , it has preventDefault in built.
        formState:{errors}
    }=useForm()

    function handleData(data){
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
                    {required:true,
                        maxLength:{value:10,message:"Maximum 10 Characters are allowed"},
                        minLength:{value:5,message:"Minimum 5 Characters Needed"}
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
                    {required:true,   
                    }
                )}
                />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export function UseEffect(){
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(10);
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
    return(
        <>
            <h1>Use Effect</h1>

            <div>
                <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
                <button onClick={()=>{setCount1(count1+1)}}>Increase Count1</button>
            </div>
        </>
    )
}

export function ProductsListings(){
    let [current,setCurrent]=useState(0);
    let [totalCount,setTotalCount]=useState(0)
    let PAGE_SIZE=33;
    let url=`https://demohotelsapi.pythonanywhere.com/hotels?limit=${PAGE_SIZE}&skip=${PAGE_SIZE*current}`
    let [data,setData]=useState([]);
    async function dataFetch(){
        let res=await fetch(url)
        let hotelsData=await res.json()
        // console.log(hotelsData.count)
        setTotalCount(hotelsData.count)
        setData(hotelsData.data);
    }
    useEffect(()=>{
        dataFetch()
    },[current])
    console.log(data);
    console.log(totalCount)

    let no_of_pages=Math.ceil(totalCount/PAGE_SIZE)
    console.log(no_of_pages)

    let start=current*PAGE_SIZE;
    let end=start+PAGE_SIZE
    return(
        <>
            <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>
                {
                    data.map((el)=>(
                        <Product name={el.name} thumbnail={el.thumbnail} des={el.description} location={el.location} rating={el.rating} price={el.price}/>
                    ))
                }
            </div>
            <div>
            {
                Array(no_of_pages).keys().map((el)=>(
                    <button onClick={()=>{
                        setCurrent(el)
                    }}>{el+1}</button>
                ))
            }
            </div>
        </>
    )
}

export function Product({name,thumbnail,des,location,rating,price}){
    return(
        <div style={{display:"flex",gap:"20px",border:"2px solid white",padding:"30px",borderRadius:"30px"}}>
            <div>
                <img width="300px" height="250px"  src={thumbnail} alt="" />
            </div>
            <div style={{display:"flex",gap:"20px",flexDirection:"column",textAlign:"left"}}>
                <h2>{name}</h2>
                <p>{des.slice(0,200)}...</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>Location : {location}</p>
                    <p><StarRating rating={rating}/></p>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>Price :{price}</p>
                    <button style={{backgroundColor:"white",color:"black",border:"none",padding:"10px 20px"}}>Move to WishList</button>
                </div>
            </div>
        </div>
    )
}

import { IoStarSharp } from "react-icons/io5";
function StarRating({rating}){
    let stars=[];
    for(let i=1;i<=Math.ceil(rating);i++){
        stars.push(<IoStarSharp color="yellow"/>)
    }

    return stars;
}