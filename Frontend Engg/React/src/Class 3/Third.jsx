import { useReducer, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./Slicer/CountSlicer"

let initalState={
    count1:0,
    count2:10,
    count3:100
}

function reducer(state,action){
    switch(action.type){
        case "INC 1" : return{
            ...state,
            [action.payload]:state[action.payload]+1
        }
        case "INC 10" : return {
            ...state,
            [action.payload] : state[action.payload]+10
        }
        case "INC 100" : return {
            ...state,
            [action.payload] : state[action.payload]+100
        }
    }
}

export default function UseReducer(){
    // syntax
    // let [state,dispatch]=useReducer(reducer,initalState)

    let [state,dispatch]=useReducer(reducer,initalState);

    console.log(state);

    return(
        <>
            <h1>Use Reducer</h1>

            <div>
                <span>Count 1 : {state.count1}</span>
                <button onClick={()=>{
                    dispatch({
                        type:"INC 1",
                        payload:"count1"
                    })
                }}>+1</button>
            </div>
            <div>
                <span>Count 2 : {state.count2}</span>
                <button onClick={()=>{
                    dispatch({
                        type:"INC 10",
                        payload:"count2"
                    })
                }}>+10</button>
            </div>
            <div>
                <span>Count 3 : {state.count3}</span>
                <button onClick={()=>{
                    dispatch({
                        type:"INC 100",
                        payload:"count3"
                    })
                }}>+100</button>
            </div>
        </>
    )
}

export function UseRef(){
    let inputRef=useRef()

    function handleInput(){
        console.log(inputRef)
        inputRef.current.focus()
        inputRef.current.style.backgroundColor="red"
        inputRef.current.style.height="300px"
        inputRef.current.style.borderRadius="30px"
    }

    let refCount=useRef(0)
    console.log(refCount)

    function handleBtn(){
        refCount.current++;
        console.log(refCount.current)
    }

    return(
        <>
            {/* <div>
                <input type="text" ref={inputRef}/>
            </div>
            <div>
                <button onClick={handleInput}>Click</button>
            </div> */}

            <div>
                <p>Ref : {refCount.current}</p>
                <button onClick={handleBtn}>+1</button>
            </div>
        </>
    )
}

export function ReduxImplement(){
    const data=useSelector((state)=> state.counter.value)
    console.log(data)
    let [inputText,setInputText]=useState("")
    let dispatch=useDispatch()
    return(
        <>
            <h1>Redux</h1>
            <h1>Count : {data} </h1>
            <div>
                <button onClick={()=>{dispatch(increment())}}>Inc</button>
                <button onClick={()=>{
                    dispatch(decrement())
                }}>Dec</button>
            </div>

            <div>
                <input type="number" onChange={(e)=>{setInputText(e.target.value)}} />
                <button
                    onClick={()=>{
                        dispatch(incrementByAmount(Number(inputText)))
                    }}
                >IncByAmount</button>
            </div>
        </>
    )
}