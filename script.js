var total = 0;
var groceries = [ {name:"Elbow Macaroni", price: 1},
                 {name:"Cheese", price: 3},
                 {name:"Cream cheese", price: 2},
                 {name:"Salt", price: 1}, 
                {name:"Pepper", price: 1},
                {name:"Pet Milk", price: 1},
                {name:"Butter", price: 2}];

groceries.forEach(function(grocery) {
  //console.log(grocery.name + " cost $" + grocery.price);
  
    // Step 1: Create a basic element.
	var listItem = document.createElement("li");
	// Step 2: Set appropriate content and attributes.
	listItem.innerHTML = grocery.name + " cost $" + grocery.price;
	// Step 3: Add the element to the page at the appropriate location.
	document.body.appendChild(listItem);
});


for (var i=0; i < groceries.length; i++) {
 total += groceries[i].price;
 
 console.log(total); }
 
  // Step 1: Create a basic element.
	var subtotal = document.createElement("p");
	// Step 2: Set appropriate content and attributes.
	subtotal.innerHTML = "The subtotal to make macaroni n cheese is $" + total;
	// Step 3: Add the element to the page at the appropriate location.
	document.body.appendChild(subtotal);
	

// console.log("The subtotal of the objects is $" + total + ".");

function endingTotal(total)  {
 return (total * .06) + total ; }

var totalCost = endingTotal(total);
console.log("With tax, the total cost is $" + totalCost);

 
  // Step 1: Create a basic element.
	var to = document.createElement("p");
	// Step 2: Set appropriate content and attributes.
	to.innerHTML = "To make the macaroni and cheese, you will pay $" + totalCost + " altogether.";
	// Step 3: Add the element to the page at the appropriate location.
	document.body.appendChild(to);