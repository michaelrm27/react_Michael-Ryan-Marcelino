const form = document.getElementById("form");

function validate() {
  // Validasi input Create Product
  let specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const productname = document.getElementById("productname");
  const option = document.getElementById("productcategory");
  const formFile = document.getElementById("formFile");
  const textarea = document.getElementById("textarea");
  const productprice = document.getElementById("productprice");
  var selected = document.querySelector('input[name="Freshness"]:checked')

  if (productname.value === "" || productname.value == null) {
    alert("Please enter a valid product name");
    return false;
  } else if (productname.value.length > 25 || productname.value.length > 10) {
    alert("Last Name must not exceed 25 characters.");
    return false;
  } else if (productname.value.match(specialchars)) {
    alert("Prodcut name must not contain symbols");
    return false;
  } else if (option.value == "") {
    alert("Product Category field must be filled in");
    return false;
  } else if (formFile.files.length === 0) {
    alert("Product image field must be filled in");
    return false;
  } else if (!Freshness) {
    alert("Product freshness field must be filled in");
    return false;
  } else if (textarea.value === "" || textarea.value == null) {
    alert("Additional Description field must be filled in");
    return false;
  } else if (productprice.value === "" || productprice.value == null) {
    alert("Please enter a valid product price");
    return false;
  }
  return true;
}

form.addEventListener ("submit", (e) => {
  if(validate() == false) {
    e.preventDefault();
  }
})