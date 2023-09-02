
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    let specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const productname = document.getElementById('productname')
    const productprice = document.getElementById('productprice')
    const option = document.getElementById('productcategory')
    const formFile = document.getElementById('formFile')
    const textarea = document.getElementById('textarea')
    var radio1 = document.getElementById('brandnew')
    var radio2 = document.getElementById('secondhand')
    var radio3 = document.getElementById('refurbished')


    if (productname.value === "" || productname.value == null){
        alert ("Please enter a valid product name");
        return false;
    }else

    if (productname.value.length > 25 || productname.value.length > 10){
        alert ("Last Name must not exceed 25 characters.");
        return false;
    }else

    if (productname.value.match(specialchars)) {
        alert("Prodcut name must not contain symbols")
        return false;
    }else

    if (option.value == ""){
        alert ("Product Category field must be filled in");
        return false;
    }else

    if (formFile.files.length === 0 ){ 
        alert("Product image field must be filled in")
        return false;
    }else

    if (radio1.checked !== true && radio2.checked !== true && radio3.checked !== true){
        alert ("Product freshness field must be filled in")
        return false;
    }else

    if (textarea.value === "" || textarea.value == null){
        alert("Additional Description field must be filled in")
        return false
    }else

    if (productprice.value === "" || productprice.value == null){
        alert("Please enter a valid product price")
        return false;
    }
})