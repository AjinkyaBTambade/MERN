// when button of catlog click getData function in calles
var getData = () => {
  // it's get data from another server application
  let url = "http://localhost:5050/api/product";
  // ajax is used for http request mapping
  $.ajax({
    dataType: "json",
    url: url,
    type: "GET",
    //   if get request execute successfuily the its goes to success and call callback function
    success: (data) => {
      // print data in console at clent side
      console.log(data);
      // let strData = JSON.stringify(data);
      //alert(strData);
      /* let para1=document.getElementById("para");
            para1.innerHTML=strData;
            */
      //DOM tree Manipulation Code at Client Side
      let productList = document.getElementById("mylist");
      // create dynammic table with all data of url
      const row = document.createElement("tr");
      const col1 = document.createElement("th");
      const col2 = document.createElement("th");
      const col3 = document.createElement("th");

      const id = document.createTextNode("productId");
      const name = document.createTextNode("productName");
      const price = document.createTextNode("productPrice");

      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      col1.appendChild(id);
      col2.appendChild(name);
      col3.appendChild(price);
      productList.appendChild(row);

      // access th data and display in form of table by creating elemwnt
      for (var i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        const col1 = document.createElement("td");
        const col2 = document.createElement("td");
        const col3 = document.createElement("td");

        const id = document.createTextNode(data[i].productId);
        const name = document.createTextNode(data[i].productName);
        const price = document.createTextNode(data[i].price);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        col1.appendChild(id);
        col2.appendChild(name);
        col3.appendChild(price);
        productList.appendChild(row);
      }
    },
  });
};

var fetchProductDetails = () => {
  // it's get data from another server application
  let idOfProduct = document.getElementById("id").value;
  let apiError;
  let result;

  fetch("http://localhost:5050/api/product/" + idOfProduct, {
    // NEW - add a Content-Type header
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.ok) {
        apiError = false;
        result = await response.json();
        console.log(result);

        let para1 = document.getElementById("para");
        para1.innerHTML = "";
        const row = document.createElement("ul");
        const item1 = document.createElement("li");
        const item2 = document.createElement("li");
        const item3 = document.createElement("li");

        const id = document.createTextNode("product id: " + result.productId);
        const name = document.createTextNode(
          "product Name: " + result.productName
        );
        const price = document.createTextNode("product price: " + result.price);

        row.appendChild(item1);
        row.appendChild(item2);
        row.appendChild(item3);
        item1.appendChild(id);
        item2.appendChild(name);
        item3.appendChild(price);
        para1.appendChild(row);
      } else {
        apiError = true;
      }
    })
    .catch(() => (apiError = true));
};

var onLogin = () => 
{
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

   let credential = {
     email: email,
     password: password,
   };

  console.log(credential);
  let loginUrl = "http://localhost:5050/api/login";
  console.log(loginUrl);

  $.ajax({
    url: loginUrl,
    type: "POST",
    data: credential,
    success: (data, status) => {
      console.log(data);
      console.log(status);
      localStorage.setItem("authentication", data);
      window.location.href="http://localhost:6900/welcome.html"
    },
    error: (xhr, status, error) => {
      console.error("Login error:", status, error);

    },
  });
};

var fetchOrders=()=>{
  let result;
  let apiError;
  let token = localStorage.getItem("authentication");
  console.log(token);

  fetch("http://localhost:5050/api/orders", {
    headers: {
      "content-type": "application/json",
      authentication: token,
    },
  })
     .then(async (response) => {
       if (response.ok) {
         apiError = false;
         result = await response.json();
         console.log(result);

          //DOM tree Manipulation Code at Client Side
      let productList = document.getElementById("mylist");
      // create dynammic table with all data of url
      const row = document.createElement("tr");
      const col1 = document.createElement("th");
      const col2 = document.createElement("th");
      const col3 = document.createElement("th");
      const col4 = document.createElement("th");

      const id = document.createTextNode("Order ID");
      const date = document.createTextNode("Order Name");
      const total = document.createTextNode("order Price");
      const status = document.createTextNode("order status");

      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      row.appendChild(col4);

      col1.appendChild(id);
      col2.appendChild(date);
      col3.appendChild(total);
      col4.appendChild(status);

      productList.appendChild(row);

      // access th data and display in form of table by creating elemwnt
      for (var i = 0; i < result.length; i++) {
        const row = document.createElement("tr");
        const col1 = document.createElement("td");
        const col2 = document.createElement("td");
        const col3 = document.createElement("td");
        const col4 = document.createElement("td");

        const id = document.createTextNode(result[i].id);
        const date = document.createTextNode(result[i].date);
        const total = document.createTextNode(result[i].total);
        const status = document.createTextNode(result[i].status);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        col1.appendChild(id);
        col2.appendChild(date);
        col3.appendChild(total);
        col4.appendChild(status);

        productList.appendChild(row);

      }
       } else {
         apiError = true;
       }
     })
     .catch(() => {
       apiError = true;
     });
  
}

var onRegister = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let location = document.getElementById("location").value;
  let age = document.getElementById("age").value;

  let credential = {
    email: email,
    password: password,
    name:name,
    location:location,
    age:age
  };

  console.log(credential);
  let registerUrl = "http://localhost:5050/api/register";
  console.log(registerUrl);

  $.ajax({
    url: registerUrl,
    type: "POST",
    data: credential,
    success: (data, status) => {
      window.location.href = "http://localhost:6900/login.html";
    },
  });
};