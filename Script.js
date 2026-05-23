// DATA PRODUK
let products = [
  {
    id: 1,
    name: "Dragon Fruit",
    game: "Blox Fruits",
    price: 100000
  },
  {
    id: 2,
    name: "Account Level 100+",
    game: "Blox Fruits",
    price: 250000
  },
  {
    id: 3,
    name: "Dark Blade",
    game: "Blox Fruits",
    price: 300000
  }
];

// ORDER
let orders = [];

// RENDER PRODUK
function renderProducts() {
  const container = document.querySelector(".container");

  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <div class="title">${p.name}</div>
        <div class="game">${p.game}</div>
        <div class="price">Rp ${p.price}</div>
        <button onclick="buy(${p.id})">Beli</button>
      </div>
    `;
  });
}

// FUNGSI BELI
function buy(id) {
  let product = products.find(p => p.id === id);

  if (!product) return alert("Produk tidak ditemukan");

  orders.push({
    id: Date.now(),
    item: product.name,
    price: product.price
  });

  alert("Berhasil beli: " + product.name);

  console.log("ORDERS:", orders);
}

// START
renderProducts();
