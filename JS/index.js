var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionsInput = document.getElementById("productDescriptions");

var searchInput = document.getElementById('searchInput'); 
var addInput = document.getElementById('addInput');
var updateInput=document.getElementById('updateInput') ;
var indexUpdate = 0;

var productContainer = [];


if (localStorage.getItem('products') != null) {
    productContainer= JSON.parse(localStorage.getItem('products'));

    displayData()
}

function addProduct() {
    if (validateProductName() == true && validateProductPrice() == true && validateProductDescriptions() == true && validateProductCategory() == true ) {
     var product={
        name: productNameInput.value,
        price :productPriceInput.value,
        category : productCategoryInput.value,
        descriptions : productDescriptionsInput.value
    }
    productContainer.push(product);
   
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayData()
    clearForme()
   }
}


function displayData() {
    var cartona = ''
    for (var i = 0; i < productContainer.length; i++){
        cartona += `
        
          <tr>
        <td>${i + 1}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].descriptions}</td>
        <td>
            <button class="btn btn-outline-warning" onclick="setData(${i})">Update</button>
        </td>
        <td>
            <button class="btn btn-outline-danger " onclick="deleteData(${i})">Delete</button>
        </td>
    </tr>
        
        
        
        
        
        
        `
    }
document.getElementById('productData').innerHTML=cartona;
}

function deleteData(elem) {
    productContainer.splice(elem, 1);
    localStorage.setItem('products', JSON.stringify(productContainer));
   
    displayData()
}


function searchProduct() {
    var term = searchInput.value;
    var cartona = ''
    for (var i = 0; i < productContainer.length; i++) {
        
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            
        
            cartona += `
        
          <tr>
        <td>${i + 1}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].descriptions}</td>
        <td>
            <button class="btn btn-outline-warning" onclick="">Update</button>
        </td>
        <td>
            <button class="btn btn-outline-danger " onclick="deleteData(${i})">Delete</button>
        </td>
    </tr>
        
        
        
        
        
        
      
        `}
    }
    document.getElementById('productData').innerHTML = cartona;
    
}



function setData(index) {
    var indexUpdate = index;
    var curentProduct = productContainer[index];
    
    productNameInput.value = curentProduct.name;
    productPriceInput.value = curentProduct.price;
    productCategoryInput.value = curentProduct.category;
    productDescriptionsInput.value = curentProduct.descriptions;
    
    updateInput.classList.remove('d-none');
    addInput.classList.add('d-none');
}

function updateProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        descriptions: productDescriptionsInput.value
    }
    productContainer.splice(indexUpdate, 1, product);
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayData()
    addInput.classList.remove('d-none');
    updateInput.classList.add('d-none');
    clearForme()
}
function clearForme() {
    
    productNameInput.value = ' ';
    productPriceInput.value = ' ';
    productCategoryInput.value = ' ';
    productDescriptionsInput.value = ' ';
}




function validateProductName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(productNameInput.value) == true) {
        document.getElementById("wrongName").classList.add("d-none");
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");



        return true
    } else {
        document.getElementById("wrongName").classList.remove("d-none");

        productName.classList.add("is-invalid");
        productName.classList.remove("is-valid");
        return false
    }


}


function validateProductPrice() {
    var regex = /^[0-9]{4,6}$/;
    if (regex.test(productPriceInput.value) == true) {

        document.getElementById("wrongPrice").classList.add("d-none");
        productPrice.classList.add("is-valid");
        productPrice.classList.remove("is-invalid");
        return true
    } else {
        document.getElementById("wrongPrice").classList.remove("d-none");

        productPrice.classList.add("is-invalid");
        productPrice.classList.remove("is-valid");
        return false
    }
}

function validateProductCategory() {
    var regex = /^[A-z]{5,30}$/;
    if (regex.test(productCategoryInput.value) == true) {

        document.getElementById("wrongCategory").classList.add("d-none");
       productCategory.classList.add("is-valid");
       productCategory.classList.remove("is-invalid");
        return true
    } else {
        document.getElementById("wrongCategory").classList.remove("d-none");

       productCategory.classList.add("is-invalid");
       productCategory.classList.remove("is-valid");
        return false
    }
}
function validateProductDescriptions() {
    var regex = /^[A-z]{5,120}$/;
    if (regex.test(productDescriptionsInput.value) == true) {

        document.getElementById("wrongDescription").classList.add("d-none");
        productDescriptions.classList.add("is-valid");
        productDescriptions.classList.remove("is-invalid");
        return true
    } else {
        document.getElementById("wrongDescription").classList.remove("d-none");

        productDescriptions.classList.add("is-invalid");
        productDescriptions.classList.remove("is-valid");
        return false
    }
}