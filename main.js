var addProductForm = document.querySelector(".add-product");
var productName = document.querySelector("#product-name");
var productPrice = document.querySelector("#price");
var productDesc = document.querySelector("#product-desc");

var products = [];


addProductForm.onsubmit = function(event){
    event.preventDefault();
    var product = {
        name: productName.value,
        price: productPrice.value,
        desc: productDesc.value,
    }
    products.push(product);

    printData();
    
}




function printData(){
    console.log("insode print data");
    console.log(products);
    var data = ``;
    for (let i = 0; i < products.length; i++) {
     
         
        data += `
         <tr>
         <td>${products[i].name}</td>
            <td>${products[i].desc}</td>
            <td>${products[i].price}</td>
            </tr>`;
        
    }


    document.querySelector("tbody").innerHTML = data;
}