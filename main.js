var message = "Welcome to JS";
console.log("Welcome to JS");
console.log("Welcome to JS");
console.log("Welcome to JS");
console.log("Welcome to JS");

var firstNumber = 50;
var secondNumber = 100;
var thirdNumber = 500;
var sum = firstNumber + secondNumber + thirdNumber;
console.log(sum);

var sentence1 = "Welcome to JavaScript.";
var oneword = "JavaScript is one word.";
var learningjs = "I'm excited to learn JavaScript!";
var keyword = "var is a JavaScript keyword, along with several other words.";

var name = "Izaiah";
console.log("Izaiah");
console.log("Izaiah");
console.log("Izaiah");

console.log("Hello, World");
console.log("Hey, ya'll!");
console.log("Whoops we forgot something");
console.log("Peanut butter and jelly sandwich");
console.log("Open and close using the same kind of quote");

console.log(10 + 12 * 31 - 4 / 4);

var car = "my broken car";
var carVerb = "broke down";
var driverVerb = "I fixed";
var past = "yesterday";
var present = "today";

console.log("my broken car" + "broke down" + "yesterday");
console.log("today" + "my broken car" + "broke down");
console.log("I fixed" + "my broken car" + "today");

function half(number){
  return number / 2;
}

var result = half(100);
console.log(result);

function doubleAndAddTax(price) {
  var result = price * 2;
  result = result * 1.07;
  return result;
}

console.log(doubleAndAddTax(35));

function sentence (string1, string2){
  return string1 + string2;
}

var speech = sentence ("Howdy", "folks!");
var speech2 = sentence ("Howdy", "folks!");

console.log(speech);
console.log(speech2);

function difference(number1, number2) {
  return number1 - number2;
}

var result = difference(385, 142);

console.log(result);

function multiply(x,y,z) {
  return x * y * z;
}

var product = multiply(15, 18, 30);
console.log(product);

// this will throw a scope error!
var twoForOneCoupon = true;
var veggieToppings = ["mushrooms", "spinach", "eggplant"];

function twoToppingPizza(toppings) {
  var price = 10;

  console.log("You'll get a pizza with " + toppings[0] + " and " + toppings[1]);

  if (twoForOneCoupon === true) {
    console.log("Nice, you get a second pizza free with this coupon!");
  }
  return price;
}

var money = twoToppingPizza(veggieToppings);
console.log("It will cost " + money);

console.log($);
$(".Purchase").click(function(){
  var currentshoppingcart = $(".shopping-cart span").html();
  var newsshoppingcart = parseInt(currentshoppingcart) + 1;
  $(".shopping-cart span").html(newsshoppingcart);
});

$(".exciting-topics-toggle").click(function(){
$(".size-and-fit").hide();
$(".reviews").hide();
$(".product-details").show();
});

$(".size-and-fit-toggle").click(function(){
  $(".product-details").hide();
  $(".reviews").hide();
  $(".size-and-fit").show();
});

$(".review-toggle").click(function(){
  $(".product-details").hide();
  $(".size-and-fit").hide();
  $(".reviews").show();
});
