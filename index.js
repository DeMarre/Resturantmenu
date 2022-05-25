// app or index???

const { response } = require("express");
const express = require("express");
const app = express();
const port = 3003;

app.set("views", "./views");
app.set("view engine", "pug");
app.set("menu", "./menu");
app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("menu");
});

app.get("/menu", (req, res) => {
  res.send({
    menu: {
      pizza: [
        {
          name: "Pepperoni Pizza",
          description: "tomato and cheese pizza with pepperoni",
          price: "12.99",
        },
        {
          name: "Sausage Pizza",
          description: "sausage and red pizza sauce",
          price: "12.99",
        },
        {
          name: "Cheese Pizza",
          description: "cheese and red pizza sauce",
          price: "12.99",
        },
      ],
      salad: [
        {
          name: "House Salad",
          description:
            "romaine, carrots, cucumber, tomatoes, red onion and crunchy croutons",
          price: "7.99",
        },
        {
          name: "Caeser Salad",
          description:
            "romaine lettuce and croutons served with a dressing containing olive oil, ",
          price: "7.99",
        },
        {
          name: "Spinach Salad",
          description:
            "raw leafy green vegetables, often tossed with pieces of other raw or cooked vegetables, fruit, cheese, or other ingredients ",
          price: "7.99",
        },
      ],
      desserts: [
        {
          name: "Ice Cream",
          description:
            "a mixture of milk, cream, sugar mixed into a frozen delight",
          price: "3.99",
        },
        {
          name: "Chocolate Lava Cake",
          description: "Molten chocolate cake",
          price: "4.99",
        },
        {
          name: "Gelato",
          description: " frozen dessert of Italian origin",
          price: "3.99",
        },
      ],
      drinks: [
        {
          name: "Shirley Temple ",
          description: "Sprite with cherry syrup, grenidine",
          price: "2.99",
        },
        {
          name: "Bottle Water",
          description: "Distilled water in abottle",
          price: ".99",
        },
        {
          name: "RootBeer",
          description:
            "caffine free, brown beverage flavored with extracts of roots",
          price: "1.99",
        },
        {
          name: "Sprite",
          description: "lemon and lime-flavored soft drink",
          price: "1.99",
        },
      ],
    },
  });
});

//     pizza: [
//       {
//         name: "pepperoni pizza",
//         description: "tomato and cheese pizza with pepperoni",
//         price: "12.99",
//       },
//     ],
//   });
// });
//    [{ name: "sausage pizza", description: "sausage and red pizza sauce", price: "12.99" }],
//    [{ name: "cheese pizza", description: "cheese and red pizza sauce", price: "12.99" }]

// //    })cons

//     app.get("/", (req, res) => {
//     res.send({
//         salads: [{ name: "House", description: "romaine, carrots, cucumber, tomatoes, red onion and crunchy croutons", price: "12.99" },
//         { name: "Caeser", description: "romaine lettuce and croutons served with a dressing containing olive oil, ", price: "12.99" },
//         { name: "spinach", description: "raw leafy green vegetables, often tossed with pieces of other raw or cooked vegetables, fruit, cheese, or other ingredients ", price: "12.99" }],

// })

//     app.get("/", (req, res) => {
//         res.send({ desserts: [{ name: "Ice Cream", description: "fogfhsiaod", price: "12.99" }],
//     [{ name: "Chocolate Lava Cake", description: "fogfhsiaod", price: "12.99" }],
//     [{ name: "Chai Pudding", description: "fogfhsiaod", price: "12.99" }],
//  })

//     app.get("/", (req, res) => {
//         res.send({drinks: [{ name: "Bottle Water", description: "fogfhsiaod", price: "12.99" }],
//         [{ name: "RootBeer", description: "fogfhsiaod", price: "12.99" }],
//         [{ name: "Sprite", description: "fogfhsiaod", price: "12.99" }],
//         [{ name: "Shirley Temple ", description: "Sprite with cherry syrup, grenidine", price: "12.99" }])

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});

// -----------------

// { salads: [{ name: "House", description: "fogfhsiaod", price: "12.99" },
// { name: "Caeser", description: "fogfhsiaod", price: "12.99" },
// { name: "spinach", description: "fogfhsiaod", price: "12.99" }]}

//   { desserts: [{ name: "Ice Cream", description: "fogfhsiaod", price: "12.99" }]
//   [{ name: "Chocolate Lava Cake", description: "fogfhsiaod", price: "12.99" }]
//   [{ name: "Chai Pudding", description: "fogfhsiaod", price: "12.99" }] }

//  { drinks: [{ name: "Bottle Water", description: "fogfhsiaod", price: "12.99" }],
//   [{ name: "RootBeer", description: "fogfhsiaod", price: "12.99" }],
//   [{ name: "Sprite", description: "fogfhsiaod", price: "12.99" }],
//   [{ name: "Shirley Temple ", description: "Sprite with cherry syrup, grenidine", price: "12.99" }]
// }

// -----------------------
// {menu:{
//     pizza: [],
//     salad: [],
//     desserts: [],
//     drinks:[{{ name: "Shirley Temple ", description:       "Sprite with cherry syrup, grenidine", price: "12.99" }],
//
