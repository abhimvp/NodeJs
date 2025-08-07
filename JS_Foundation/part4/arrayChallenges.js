// challenge-1
let teaFlavors = ["green tea", "black tea", "oolong tea"];
console.log(typeof teaFlavors); // Output: object
// Another way to declare an array
let teaFlavors2 = new Array("green tea", "black tea", "oolong tea");
console.log(typeof teaFlavors2); // Output: object
// Access the first element of the array and store it in a variable named `firstTea`
let firstTea = teaFlavors[0];
console.log(firstTea); // Output: green tea

// challenge-2
let cities = ["London", "Tokyo", "Paris", "New York"];
// Access the third element in the array and store it in a variable names `favoriteCity`
let favoriteCity = cities[2];
console.log(favoriteCity); // Output: Paris

// challenge-3
let teaTypes = ["herbal tea", "white tea", "masala chai"];
// change the second element in the array to "matcha tea"
teaTypes[1] = "matcha tea";
console.log(teaTypes); // Output: ["herbal tea", "matcha tea", "masala chai"]

// challenge-4
let citiesVisited = ["Mumbai", "Sydney"];
// Add "Berlin" to the end of the array
citiesVisited.push("Berlin");
console.log(citiesVisited); // Output: ["Mumbai", "Sydney", "Berlin"]

// challenge-5
teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// Remove the last element from the array & store it in a variable named `lastOrder`
let lastOrder = teaOrders.pop();
console.log(lastOrder); // Output: earl grey
