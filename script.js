const data = [
  {
    id: 1,
    foodname: "Apple",
    calorie: 95,
    category: "Fruit",
    protiens: 0.3,
    cab: 25,
  },
  {
    id: 2,
    foodname: "Banana",
    calorie: 105,
    category: "Fruit",
    protiens: 1.3,
    cab: 27,
  },
  {
    id: 3,
    foodname: "Orange",
    calorie: 62,
    category: "Fruit",
    protiens: 1.2,
    cab: 15,
  },
  {
    id: 4,
    foodname: "Pear",
    calorie: 95,
    category: "Fruit",
    protiens: 0.5,
    cab: 25,
  },
  {
    id: 5,
    foodname: "Grapefruit",
    calorie: 42,
    category: "Fruit",
    protiens: 1.1,
    cab: 11,
  },
  {
    id: 6,
    foodname: "Strawberry",
    calorie: 46,
    category: "Fruit",
    protiens: 1.5,
    cab: 10,
  },
  {
    id: 7,
    foodname: "Blueberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.1,
    cab: 14,
  },
  {
    id: 8,
    foodname: "Raspberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.4,
    cab: 15,
  },
  {
    id: 9,
    foodname: "Broccoli",
    calorie: 34,
    category: "Vegetable",
    protiens: 3.3,
    cab: 5,
  },
  {
    id: 10,
    foodname: "Cauliflower",
    calorie: 25,
    category: "Vegetable",
    protiens: 2.6,
    cab: 5,
  },
  {
    id: 11,
    foodname: "Green Beans",
    calorie: 31,
    category: "Vegetable",
    protiens: 2.4,
    cab: 4,
  },
  {
    id: 12,
    foodname: "Asparagus",
    calorie: 20,
    category: "Vegetable",
    protiens: 2.2,
    cab: 2,
  },
  {
    id: 13,
    foodname: "Spinach",
    calorie: 23,
    category: "Vegetable",
    protiens: 3.5,
    cab: 4,
  },
  {
    id: 14,
    foodname: "Kale",
    calorie: 33,
    category: "Vegetable",
    protiens: 4.3,
    cab: 7,
  },
  {
    id: 15,
    foodname: "Sweet Potato",
    calorie: 103,
    category: "Vegetable",
    protiens: 2,
    cab: 27,
  },
  {
    id: 16,
    foodname: "Potato",
    calorie: 161,
    category: "Vegetable",
    protiens: 4.3,
    cab: 37,
  },
  {
    id: 17,
    foodname: "Carrot",
    calorie: 41,
    category: "Vegetable",
    protiens: 0.9,
    cab: 9,
  },
  {
    id: 18,
    foodname: "Onion",
    calorie: 40,
    category: "Vegetable",
    protiens: 1.4,
    cab: 9,
  },
  {
    id: 19,
    foodname: "Egg",
    calorie: 77,
    category: "Protein",
    protiens: 6.3,
    cab: 0.5,
  },
  {
    id: 20,
    foodname: "Chicken Breast",
    calorie: 165,
    category: "Protein",
    protiens: 31,
    cab: 0,
  },
  {
    id: 21,
    foodname: "Salmon",
    calorie: 206,
    category: "Protein",
    protiens: 22,
    cab: 0,
  },
  {
    id: 22,
    foodname: "Tuna",
    calorie: 179,
    category: "Protein",
    protiens: 39,
    cab: 0,
  },
  {
    id: 23,
    foodname: "Beef",
    calorie: 250,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 24,
    foodname: "Pork",
    calorie: 242,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 25,
    foodname: "Lamb",
    calorie: 294,
    category: "Protein",
    protiens: 25,
    cab: 0,
  },
  {
    id: 26,
    foodname: "Shrimp",
    calorie: 85,
    category: "Protein",
    protiens: 20,
    cab: 0.2,
  },
  {
    id: 27,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 28,
    foodname: "Brown Rice",
    calorie: 216,
    category: "Grain",
    protiens: 4.5,
    cab: 45,
  },
  {
    id: 29,
    foodname: "Oats",
    calorie: 389,
    category: "Grain",
    protiens: 16.9,
    cab: 66,
  },
  {
    id: 30,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 31,
    foodname: "Bread",
    calorie: 265,
    category: "Grain",
    protiens: 9.4,
    cab: 49,
  },
  {
    id: 32,
    foodname: "Pasta",
    calorie: 131,
    category: "Grain",
    protiens: 5.5,
    cab: 26,
  },
  {
    id: 33,
    foodname: "Milk",
    calorie: 60,
    category: "Dairy",
    protiens: 3.2,
    cab: 5.1,
  },
  {
    id: 34,
    foodname: "Cheese",
    calorie: 402,
    category: "Dairy",
    protiens: 25,
    cab: 2.4,
  },
  {
    id: 35,
    foodname: "Yogurt",
    calorie: 59,
    category: "Dairy",
    protiens: 3.5,
    cab: 5,
  },
  {
    id: 36,
    foodname: "Butter",
    calorie: 717,
    category: "Dairy",
    protiens: 0.9,
    cab: 0.1,
  },
  {
    id: 37,
    foodname: "Almonds",
    calorie: 579,
    category: "Nuts",
    protiens: 21,
    cab: 22,
  },
  {
    id: 38,
    foodname: "Walnuts",
    calorie: 654,
    category: "Nuts",
    protiens: 15,
    cab: 14,
  },
  {
    id: 39,
    foodname: "Peanuts",
    calorie: 567,
    category: "Nuts",
    protiens: 26,
    cab: 16,
  },
  {
    id: 40,
    foodname: "Cashews",
    calorie: 553,
    category: "Nuts",
    protiens: 18,
    cab: 30,
  },
];

const find = data.map((item) => item.foodname);
// a[0].innerHTML=find;
// console.log(find);

// list of all item category with food

const vegetables = document.getElementById("vegetables");
const fruit = document.getElementById("fruit");
const protien = document.getElementById("protien");
const nuts = document.getElementById("nuts");
const grains = document.getElementById("grains");
const dairy = document.getElementById("dairy");

function filterbycategory(data, category) {
  return data.filter((item) => item.category === category);
}

const veg = filterbycategory(data, "Vegetable");
console.log(veg);
const tablerow = veg.map(
  (item) => `<tr><td>${item.foodname} </td> <td>${item.category}</td></tr>`
);
vegetables.innerHTML += tablerow.join("");
// vegetables.innerHTML=veg.map(item => `Food Name: ${item.foodname},Category: ${item.category}`).join('<br>');

const fru = filterbycategory(data, "Fruit");
// console.log(fru);
const fruitrow = fru.map(
  (item) => `<tr><td> ${item.foodname} </td> <td>${item.category}</td></tr>`
);
fruit.innerHTML += fruitrow.join("");

const pro = filterbycategory(data, "Protein");
// console.log(pro);
const protienrow = pro.map(
  (item) => `<tr><td> ${item.foodname} </td> <td> ${item.category}</td></tr>`
);
protien.innerHTML += protienrow.join("");

const nut = filterbycategory(data, "Nuts");
// console.log(nut);
const nutsrow = nut.map(
  (item) => `<tr> <td>${item.foodname} </td> <td> ${item.category}</td></tr>`
);
nuts.innerHTML += nutsrow.join("");

const gra = filterbycategory(data, "Grain");
const grainsrow = gra.map(
  (item) => `<tr><td>${item.foodname}</td> <td>${item.category}</td></tr>`
);
grains.innerHTML += grainsrow.join("");

const dai = filterbycategory(data, "Dairy");
const dairyrow = dai.map(
  (item) => `<tr><td>${item.foodname}</td> <td> ${item.category}</td></tr>`
);
dairy.innerHTML += dairyrow.join("");

function filterbycalorie(data) {
  return data.filter((item) => item.calorie > 100);
}
const calorie = filterbycalorie(data);
const cal = document.querySelector("#calorie");
const calrow = calorie.map(
  (item) => `<tr> <td> ${item.foodname}</td> <td>${item.calorie}</td></tr>`
);
cal.innerHTML += calrow.join("");

// list all the food items with calorie below 100

function filterbycalorielessthan100(data) {
  return data.filter((item) => item.calorie < 100);
}
const lesscalorie = filterbycalorielessthan100(data);
const calrow2 = lesscalorie.map(
  (item) => `<tr> <td> ${item.foodname}</td> <td>${item.calorie}</td></tr>`
);
const cal2 = document.querySelector("#callessthan100");
cal2.innerHTML += calrow2.join("");

function listFoodItemsByHighestProtein(data) {
  return data.slice().sort((a, b) => b.protiens - a.protiens);
}

const higestprotien = listFoodItemsByHighestProtein(data);
const highprotienrow = higestprotien.map(
  (item) => `<tr> <td> ${item.foodname}</td><td>${item.protiens}</td></tr>`
);
const highpro = document.querySelector("#higestprotien");
highpro.innerHTML += highprotienrow.join("");

function listFoodItemsByHighestcab(data) {
  return data.slice().sort((a, b) => b.cab - a.cab);
}
const higestcab=listFoodItemsByHighestcab(data);
const higestcabrow=higestcab.map((item)=>`<tr><td> ${item.foodname}</td> <td>${item.cab}</td> </tr>`)
const printcab=document.querySelector('#highestcab')
printcab.innerHTML+=higestcabrow.join('')