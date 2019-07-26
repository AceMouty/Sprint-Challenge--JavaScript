// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(param1, param2, callback){
	callback(param1, param2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2){
	return console.log((num1 + num2));
}

function multiply(num1, num2){
	return console.log((num1 * num2));
}

function greeting (firstName, lastName){
	console.log((`Hello ${firstName} ${lastName}, nice to meet you!`));
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/*
	Closures are a mechanism that is apart of JS funcitons.
	
	1. This allows us to pass in an argument into a parent funciton. This argument is now aparat of the parent scope.

	2. Now when we declare a new funciton within the parent function, this new funciton has access to not only its scope but also its PARENT scopes. 

	3. Since we have access to this parent scope we can now call a parameter / variable that isnt passed to the child, and we are able to do this by using this closrue mechanism 	 bc once the child function sees there is no parameter passed to it, the child funciton will then go into the scope above it (the parent scope) and look for the parameter 		 name to try and resolve the use of the parameter called that does not exist in the child scope.  

	4. A child will keep climbing the scope chain, all the way up to global scope, in pursuit of finding the name of the parameter / variable name used.

	5. We can only access parameters / varibales that are up the scope chain however outer scopes can NOT go into inner scopes to resolve the use of a parameter / variable.
*/


const external = "I'm outside the function";
const external2 = "I'm accessed from anotherNestedFunction, this fucntion had to climb up to the global scope to find me!";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
		console.log(internal);

		function anotherNestedFunction(){
			console.log(external2);
		}
		anotherNestedFunction()
  };
  nestedFunction();
}
myFunction();