

// tạo function để get id
function getEle(id) {
  return document.getElementById(id);
}

function submitForm(e) {
  e.preventDefault();

  // dom lấy giá trị người dung nhập vào
  var prodId = getEle("productID").value;
  var prodName = getEle("prodName").value;
  var media = getEle("prodMedia").value;
  var description = getEle("description").value;
  var originalPrice = getEle("originalPrice").value;
  var reducedPrice = getEle("reducedPrice").value;

  // dùng object để biểu diễn đối tượng
  var phone = new PhoneModel(
    prodId,
    prodName,
    description,
    originalPrice,
    reducedPrice,
    media,
    new Date()
  );

  productList.push(phone);
  renderProductList(productList);
}


// cách tạo class bằng es6
class PhoneModel {
  id = "";
  productName = "";
  description = "";
  originalPrice = 0;
  reducedPrice = 0;
  image = "";
  creatAt = "";

  constructor(id, name, description, originalPrice, reducedPrice, image, createdAt) {
    this.id = id;
    this.productName = name;
    this.description = description;
    this.originalPrice = originalPrice;
    this.reducedPrice = reducedPrice;
    this.image = image;
    this.createdAt = createdAt
  }
}

var productList = [
  {
    id: "iphone1",
    productName: "Iphone 14 pro max",
    description: "At fugiat in eius qu",
    originalPrice: "109",
    reducedPrice: "339",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfilT1VI7DOrCK-M5KvUEAscakYMY1amRWoWjkx7a04CvOmmFwnYqyYSAAiqFf5OLYtw&usqp=CAU",
    createdAt: "2024-03-24T12:51:04.907Z",
  },

  {
    id: "iphone1",
    productName: "Iphone 14 pro max",
    description: "At fugiat in eius qu",
    originalPrice: "109",
    reducedPrice: "339",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfilT1VI7DOrCK-M5KvUEAscakYMY1amRWoWjkx7a04CvOmmFwnYqyYSAAiqFf5OLYtw&usqp=CAU",
    createdAt: "2024-03-24T12:51:04.907Z",
  },

  {
    id: "iphone1",
    productName: "Iphone 14 pro max",
    description: "At fugiat in eius qu",
    originalPrice: "109",
    reducedPrice: "339",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfilT1VI7DOrCK-M5KvUEAscakYMY1amRWoWjkx7a04CvOmmFwnYqyYSAAiqFf5OLYtw&usqp=CAU",
    createdAt: "2024-03-24T12:51:04.907Z",
  },

  {
    id: "iphone1",
    productName: "Iphone 32 pro max",
    description: "At fugiat in eius qu",
    originalPrice: "109",
    reducedPrice: "323",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfilT1VI7DOrCK-M5KvUEAscakYMY1amRWoWjkx7a04CvOmmFwnYqyYSAAiqFf5OLYtw&usqp=CAU",
    createdAt: "2024-03-24T12:51:04.907Z",
  },

];

function renderProductList(prodList) {
  var productHtml = "";

  for (let i = 0; i < prodList.length; i++) {
    productHtml += `<div class="col-3">
    <div class="productCard">
      <img
        src="${prodList[i].image}"
        alt=".."
      />
      <h6>${prodList[i].productName}</h6>
      <div>
        <span>${prodList[i].originalPrice}</span>
        <p style="text-decoration: line-through; color: gainsboro"
          >${prodList[i].reducedPrice}</p
        >
      </div>
      <p style="font-size: 12px">${prodList[i].description}</p>
      <p>${prodList[i].createdAt}</p>
    </div>
  </div>`;
  }
  document.getElementById('phoneList').innerHTML = productHtml;
}

window.onload(renderProductList(productList))