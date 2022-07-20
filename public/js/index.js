const productSection = document.querySelector(".products");
let selectedProducts = 0;
setProductId = (id) => {
  selectedProducts = id;
  console.log(id);
};
const createCardAddData = (product) => {
  const productCard = `<div class="product-card" onclick="setProductId(1)">
  <a href="details.html">
  <div class="product-image">
    <img src=${product.image}>
  </div>
  <div class="product-info">
   <h5>${product.id}</h5>
    <h5>${product.title}</h5>
    <h6>$${product.price}</h6>
  </div>
</a>
</div>`;
  productSection.innerHTML += productCard;
};

const fetchProductData = async () => {
  const res = await fetch("http://localhost:4000/api/products");
  const data = await res.json();
  data.map((product) => {
    createCardAddData(product);
  });
};
const returnSingleData = async (id) => {
  const image = document.querySelector("#product-image");
  const title = document.querySelector("#product-title");
  const price = document.querySelector("#product-price");
  const res = await fetch(`http://localhost:4000/api/products/${id}`);
  const data = await res.json();

  image.innerHTML = `<img src=${image}/>`;
  title.innerHTML = data.title;
  price.innerHTML = data.price;
};

fetchProductData();
