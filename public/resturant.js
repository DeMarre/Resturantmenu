window.onload = function example() {
  fetch("http://localhost:3003/menu")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.menu.pizza.forEach((pizza) => {
        let name = document.createElement("h1");
        let price = document.createElement("p");
        let description = document.createElement("p");
        name.innerHTML = pizza.name;
        price.innerHTML = pizza.price;
        description.innerHTML = pizza.description;
        document.getElementById("pizza").appendChild(name);
        document.getElementById("pizza").appendChild(price);
        document.getElementById("pizza").appendChild(description);
      });
      data.menu.salad.forEach((salad) => {
        let name = document.createElement("h1");
        let price = document.createElement("p");
        let description = document.createElement("p");
        name.innerHTML = salad.name;
        price.innerHTML = salad.price;
        description.innerHTML = salad.description;
        document.getElementById("salad").appendChild(name);
        document.getElementById("salad").appendChild(price);
        document.getElementById("salad").appendChild(description);
      });
      data.menu.dessert.forEach((dessert) => {
        let name = document.createElement("h1");
        let price = document.createElement("p");
        let description = document.createElement("p");
        name.innerHTML = dessert.name;
        price.innerHTML = dessert.price;
        description.innerHTML = pizza.description;
        document.getElementById("dessert").appendChild(name);
        document.getElementById("dessert").appendChild(price);
        document.getElementById("dessert").appendChild(description);
      });
      data.menu.drinks.forEach((drinks) => {
        let name = document.createElement("h1");
        let price = document.createElement("p");
        let description = document.createElement("p");
        name.innerHTML = drinks.name;
        price.innerHTML = drinks.price;
        description.innerHTML = drinks.description;
        document.getElementById("drinks").appendChild(name);
        document.getElementById("drinks").appendChild(price);
        document.getElementById("drinks").appendChild(description);
      });
    });
};
