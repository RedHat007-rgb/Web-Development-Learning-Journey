console.log("Welcome to FuckINg Grocery Store");
let		products =
[
 {
	name:"Apple",
	category:"Fruits",
	price:1.5, //Price per unit
	stock:50 // Quantity in stock
},
{
	name:"Banana",
	category:"Fruits",
	price:0.5,
	stock:100
}	       ,
{
	name:"Broccoli",
	category:"Vegetables",
	price:2.0,
	stock:30
}	       ,
{
	name:"Chicken Breast",
	category:"Meat",
	price:5.0,
	stock:20
}	       ,
{
	name:"Milk",
	category:"Dairy",
	price:1.2,
	stock:40
}	       ,
{
	name:"Cheese",
	category:"Dairy",
	price:3.0,
	stock:25
}	       ,
{
	name:"Bread",
	category:"Bakery",
	price:2.5,
	stock:15
}	       ,
{
	name:"Eggs",
	category:"Dairy",
	price:0.2, //Price per egg
	stock:200
}
]
		let product = {
	name:"Flipflops",
	category:"Footwear",
	price:800, //Price per unit
	stock:100
}
function newpro(product) {
	for (i = 0; i < products.length; i++) {
		if (products[i].name == product.name) {

			products[i].stock = products[i].stock + product.stock;
		}
	}
	products.push(product);
	console.log(products);
}
newpro(product);
product = {
name:	"Milk",
category:	"Dairy",
price:		8.9,
stock:		80
}
function
update(product)
{
	for (i = 0; i < products.length; i++) {
		if (products[i].price != product.price || products[i].stock != product.stock) {
			products[i].stock = products[i].stock + product.stock;
			products[i].price = product.price;

		}
	}
	console.log("your list is changed............ New updated stock and prices are available below:");
	console.log(products);
}
update(product)
product = {
name:	"Bread",
category:	"Bakery",
price:		2.5,
stock:		15
}
console.log("Before Removing of Items:");
console.log(products);
function
remove(product)
{

	for (i = 0; i < products.length; i++) {

		if (products[i].name == product.name) {
			products.splice(i, 1);

		}
	}
	console.log("updated list:");
	console.log(products);
}
remove(product)
console.log("All items present in our store:");
function
view()
{
	console.log(products);
}
view()
function totalv() {
	let		calculatedvalue = 0;
	for (i = 0; i < products.length; i++) {
		calculatedvalue = (products[i].price * products[i].stock) + calculatedvalue;

	}
	console.log("Total Stock Value of my Fucking Grocery Store:" + calculatedvalue);
}
totalv()
product = {
name:	"Eggs",
category:	"Dairy",
price:		0.2, //Price per egg
stock:		200
}
function
search(product)
{
	for (i = 0; i < products.length; i++) {
		if (products[i].name == product.name) {
		}
	}
	console.log("Your item is already present in our store.Please bring new item ass****");

}
search(product)