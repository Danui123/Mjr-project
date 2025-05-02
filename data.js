const products = [
    {
      name: "Running Shoes",
      price: 149.99,
      image: "assets-img/shoes.jpg"
    },
    {
      name: "Smart Watch",
      price: 99.99,
      image: "assets-img/watch.jpg"
    },
    {
      name: "Headphones",
      price: 199.99,
      image: "assets-img/headphones.jpg"
    }
  ];
  
  function showProducts() {
    const container = document.getElementById("productList");
    container.innerHTML = "";
  
    // Get products from localStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];
  
    if (products.length === 0) {
      container.innerHTML = "<p style='text-align:center;'>No products available. Please check back later.</p>";
      return;
    }
  
    products.forEach((p, index) => {
      container.innerHTML += `
        <div class="product">
          <img src="${p.image}" alt="${p.name}" onclick="viewProduct(${index})" style="width:100%; height:150px; object-fit:cover; border-radius:10px; cursor:pointer;">
          <h3>${p.name}</h3>
          <p>Price: $${p.price.toFixed(2)}</p>
          <button onclick="addToCart('${p.name}', ${p.price}, '${p.image}')">Add to Cart</button>
        </div>
      `;
    });
  }
  
  function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
  
  function viewProduct(index) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem("selectedProduct", JSON.stringify(products[index]));
    window.location.href = "product-details.html";
  }
  