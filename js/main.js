
let contentStore = document.querySelector(".contentStore")

let addproducts = (function(){
for(let i = 0; i<productLength ; i++){
    let cardproduct = `
    <div class="card" id =${products[i].id}>
        <img class="card-img-top" src="images/t-shirt.avif" alt="Card image" style="width:100%;height: 300px;">
        <div class="card-body">
            <h5 class="card-title">Product : ${products[i].product} </h5>
            <h5 class="card-title">Price : ${products[i].price} $ </h5>
            <h5 class="card-title">Category : ${products[i].category} </h5>
            <a href="#" class="btn btn-primary">Add to Cart</a>
            <a href="#" class="btn btn-primary">Add to Favorite</a>
        </div>
    </div>
`;
    contentStore.innerHTML += cardproduct
}})();
productsCard =document.querySelectorAll(".contentStore .card");

// productsCard.forEach((ele)=>{
//     ele.onclick = ()=>{
//         ele.style.display="none"
//     }
// })

// console.log(productsCard)
// const array = Array.from(productsCard);
// console.log(array[0].id)

// if(array[0].id === "p1"){
//     console.log(array[0])
//     array[0].setAttribute("hidden","")
// }

// array[2].style.display = "none";
let selectorSearch = document.querySelector(".form-select")
// console.log(selectorSearch[0]);
let search = document.querySelector("[type='search']")
// console.log(selectorSearch.selectedIndex)

selectorSearch.onchange = ()=>{
    console.log(selectorSearch.selectedIndex)
    search.value=""
    if(search.value === ""){
        productsCard.forEach((elearray)=>{
                elearray.style.display = "block";
        })
    }
}

// if (products.hasOwnProperty(typesearch)) {
//     console.log(products.typesearch); // 100
//   } else {
//     console.log("The key 'typesearch' does not exist.");
//   }

search.onkeyup = function(e){

    // by use map 
    // console.log(e.target.value);
    // products.map(function(ele){
    //     // console.log(ele.product.includes(e.target.value))
    //     if(ele.product.includes(e.target.value)){
    //         // console.log(ele.id)
    //         array.map((elearray)=>{
    //             if(ele.id === elearray.id){
    //                 // console.log("true" + elearray.id)
    //                 elearray.style.display = "block";
    //             }
    //         })
    //     }else{
    //         array.map((elearray)=>{
    //             if(ele.id === elearray.id){
    //                 // console.log("true" + elearray.id)
    //                 elearray.style.display = "none";
    //             }
    //         })
    //     }
    // })
    // //////////////////////

    products.map(function(ele){

        if(ele.product.includes(e.target.value)){
            productsCard.forEach((elearray)=>{
                if(ele.id === elearray.id){
                    elearray.style.display = "block";
                }
            })
        }else{
            productsCard.forEach((elearray)=>{
                if(ele.id === elearray.id){
                    elearray.style.display = "none";
                }
            })
        }
    })


}

// console.log(Array.isArray(productsCard))



