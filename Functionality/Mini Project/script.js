let url="https://dummyjson.com/products?limit=500";
let allProducts=[];
fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    // console.log(data)
    allProducts=[...data.products]
    console.log(allProducts)

    let main=document.querySelector("main") // it is used to access any tag , .class or #id

    allProducts.map((el)=>{
        console.log(el.title)

        let detIlPageLink=document.createElement("a")
        let outerDiv=document.createElement("div")
        let h1=document.createElement("h1")
        let image=document.createElement("img")
        let description=document.createElement("p")

        let price_cart=document.createElement("div")
        let price=document.createElement("p")
        let cart=document.createElement("button");


        detIlPageLink.href=`detail.html/?id=${el.id}`

        detIlPageLink.style.textDecoration="none"
        detIlPageLink.style.color="black"


        // innerText , innerHTML
        h1.innerText=el.title
        image.src=el.thumbnail
        description.innerText=el.description

        price.innerText=`Rs ${Math.ceil(el.price*95)}/-`
        cart.innerText="Add to Cart"

        price_cart.append(price,cart)

        outerDiv.classList.add("outer")
        price_cart.classList.add("price_cart")

        cart.style.padding="10px 20px"
        cart.style.backgroundColor="black"
        cart.style.color="white"
        cart.style.fontWeight="bolder"
        cart.style.border="none"

        detIlPageLink.append(h1,image,description,price_cart)

        outerDiv.append(detIlPageLink)
        main.append(outerDiv)
    })
})
.catch((err)=>{
    console.log(err)
})

