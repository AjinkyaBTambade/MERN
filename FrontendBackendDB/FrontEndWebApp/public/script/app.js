// Function to perform an AJAX GET request to fetch product data
function getData() {
  const url = "http://localhost:5050/api/product";

  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: (data) => {
      console.log(data);
      displayProductTable(data);
    },
    error: (xhr, status, error) => {
      console.error("Failed to fetch product data:", status, error);
    },
  });
}

// Function to dynamically create and display a product table
function displayProductTable(data) {
  const productList = document.getElementById("mylist");
  productList.innerHTML = ""; // Clear existing content

  const headerRow = createTableRow(["Product ID", "Product Name", "Product Price"], "th");
  productList.appendChild(headerRow);

  data.forEach(product => {
    const productRow = createTableRow([product.productId, product.productName, product.price], "td");
    productList.appendChild(productRow);
  });
}

// Helper function to create a table row
function createTableRow(data, cellType) {
  const row = document.createElement("tr");

  data.forEach(item => {
    const cell = document.createElement(cellType);
    cell.textContent = item;
    row.appendChild(cell);
  });

  return row;
}

// Function to fetch product details based on product ID
function fetchProductDetails() {
  const productId = document.getElementById("id").value;
  const url = `http://localhost:5050/api/product/${productId}`;

  fetch(url, {
    headers: { "Content-Type": "application/json" },
  })
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch product details");
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayProductDetails(data);
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
}

// Function to display product details
function displayProductDetails(product) {
  const detailsContainer = document.getElementById("para");
  detailsContainer.innerHTML = ""; // Clear existing content

  const detailList = document.createElement("ul");
  const details = [
    `Product ID: ${product.productId}`,
    `Product Name: ${product.productName}`,
    `Product Price: ${product.price}`
  ];

  details.forEach(detail => {
    const listItem = document.createElement("li");
    listItem.textContent = detail;
    detailList.appendChild(listItem);
  });

  detailsContainer.appendChild(detailList);
}

// Function to handle login
function onLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const credentials = { email, password };
  const loginUrl = "http://localhost:5050/api/login";

  $.ajax({
    url: loginUrl,
    type: "POST",
    data: credentials,
    success: (data, status) => {
      console.log("Login successful:", status);
      localStorage.setItem("authentication", data);
      window.location.href = "http://localhost:6900/welcome.html";
    },
    error: (xhr, status, error) => {
      console.error("Login error:", status, error);
    },
  });
}

// Function to fetch orders
function fetchOrders() {
  const token = localStorage.getItem("authentication");
  const ordersUrl = "http://localhost:5050/api/orders";

  fetch(ordersUrl, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch orders");
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayOrdersTable(data);
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
}

// Function to display orders in a table
function displayOrdersTable(orders) {
  const orderList = document.getElementById("mylist");
  orderList.innerHTML = ""; // Clear existing content

  const headerRow = createTableRow(["Order ID", "Order Date", "Order Total", "Order Status"], "th");
  orderList.appendChild(headerRow);

  orders.forEach(order => {
    const orderRow = createTableRow([order.id, order.date, order.total, order.status], "td");
    orderList.appendChild(orderRow);
  });
}

// Function to handle user registration
function onRegister() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const age = document.getElementById("age").value;

  const credentials = { email, password, name, location, age };
  const registerUrl = "http://localhost:5050/api/register";

  $.ajax({
    url: registerUrl,
    type: "POST",
    data: credentials,
    success: () => {
      window.location.href = "http://localhost:6900/login.html";
    },
    error: (xhr, status, error) => {
      console.error("Registration error:", status, error);
    },
  });
}
