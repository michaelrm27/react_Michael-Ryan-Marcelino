const form = document.getElementById("form");
let specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const productName = document.getElementById("productname");
const option = document.getElementById("productcategory");
const formFile = document.getElementById("formFile");
const textArea = document.getElementById("textarea");
const productPrice = document.getElementById("productprice");

function validateInput() {
  // Validasi input Create Product
  var selected = document.querySelector('input[name="Freshness"]:checked');

  if (productName.value === "" || productName.value == null) {
    alert("Please enter a valid product name");
    return false;
  } else if (productName.value.length > 25 || productName.value.length > 10) {
    alert("Last Name must not exceed 25 characters.");
    return false;
  } else if (productName.value.match(specialchars)) {
    alert("Prodcut name must not contain symbols");
    return false;
  } else if (option.value == "") {
    alert("Product Category field must be filled in");
    return false;
  } else if (formFile.files.length === 0) {
    alert("Product image field must be filled in");
    return false;
  } else if (!selected) {
    alert("Product freshness field must be filled in");
    return false;
  } else if (textArea.value === "" || textArea.value == null) {
    alert("Additional Description field must be filled in");
    return false;
  } else if (productPrice.value === "" || productPrice.value == null) {
    alert("Please enter a valid product price");
    return false;
  }
  return true;
}
form.addEventListener("submit", (e) => {
  if (!validateInput()) {
    e.preventDefault();
  } else {
    insertTable(e);
    form.reset();
  }
});

const products = [];

function insertTable(event) {
  event.preventDefault();
  var selected = document.querySelector('input[name="Freshness"]:checked');
  // Membuat objek
  const product = {
    name: productName,
    category: option,
    image: formFile,
    freshness: selected,
    textarea: textArea,
    price: productPrice,
  };

  // Memeasukan objek menjadi array
  products.push(product);

  //Membuat baris
  const tableBody = document.getElementById("tablebody");
  const newRow = tableBody.insertRow();

  // Menambah Data ke Tabel
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);

  // Menampilkan Data ke Tabel
  cell1.innerHTML = tableBody.rows.length;
  cell2.innerHTML = productName.value;
  cell3.innerHTML = option.value;
  cell4.innerHTML = formFile.value;
  cell5.innerHTML = selected.value;
  cell6.innerHTML = textArea.value;
  cell7.innerHTML = productPrice.value;
}
