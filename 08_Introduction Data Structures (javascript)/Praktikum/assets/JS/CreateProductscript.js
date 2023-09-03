const form = document.getElementById("form");

function validate() {
  // Validasi input Create Product
  let specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const productname = document.getElementById("productname");
  const option = document.getElementById("productcategory");
  const formFile = document.getElementById("formFile");
  const textarea = document.getElementById("textarea");
  const productprice = document.getElementById("productprice");
  var selected = document.querySelector('input[name="Freshness"]:checked');

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
  } else if (!selected) {
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
form.addEventListener("submit", (e) => {
  if (!validate()) {
    e.preventDefault(); // Mencegah pengiriman formulir jika validasi gagal
  }
});

document.getElementById('form').addEventListener('submit', insert);
const products = [];

function insert(event) {
  event.preventDefault();

  const productname = document.getElementById("productname").value;
  const option = document.getElementById("productcategory").value;
  const formFile = document.getElementById("formFile").value;
  const textarea = document.getElementById("textarea").value;
  const productprice = document.getElementById("productprice").value;
  var selected = document.querySelector('input[name="Freshness"]:checked').value;

  // Membuat objek
  const product = {
    name: productname,
    category: option,
    image: formFile,
    freshness: selected,
    textarea: textarea,
    price: productprice,
  };

  // Memeasukan objek menjadi array
  products.push(product);

  //Membuat baris
  const tablebody = document.getElementById("tablebody");
  const newrow = tablebody.insertRow();

  // Menambah Data ke Tabel
  const cell1 = newrow.insertCell(0);
  const cell2 = newrow.insertCell(1);
  const cell3 = newrow.insertCell(2);
  const cell4 = newrow.insertCell(3);
  const cell5 = newrow.insertCell(4);
  const cell6 = newrow.insertCell(5);
  const cell7 = newrow.insertCell(6);

  // Menampilkan Data ke Tabel
  cell1.innerHTML = tablebody.rows.length;
  cell2.innerHTML = productname;
  cell3.innerHTML = option;
  cell4.innerHTML = formFile;
  cell5.innerHTML = selected;
  cell6.innerHTML = textarea;
  cell7.innerHTML = productprice;
}
