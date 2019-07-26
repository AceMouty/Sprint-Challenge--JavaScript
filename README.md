# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

	`.forEach` just loops over an entire array. Nothing more unless we tell it to do so in the body of the callback funciton.
	`.map` creates a new copy of the array the method is invoked on, this returns us an array we can change without affecting the original.

2. What is the difference between a function and a method?

	A function is not apart of an object.
	A method is a function in an object. 

3. What is closure?

	Closure is when a fuction has to go up in scope chain to reslove the use of a variable / parameter called that does not exist in the current funcitons scope. Closures are a mechanism that is apart of JS funcitons.
	
	- This allows us to pass in an argument into a parent funciton. This argument is now aparat of the parent scope.

	- Now when we declare a new funciton within the parent function, this new funciton has access to not only its scope but also its PARENT scopes. 

	- Since we have access to this parent scope we can now call a parameter / variable that isnt passed to the child, and we are able to do this by using this closrue mechanism 	 bc once the child function sees there is no parameter passed to it, the child funciton will then go into the scope above it (the parent scope) and look for the parameter 		 name to try and resolve the use of the parameter called that does not exist in the child scope.  

	- A child will keep climbing the scope chain, all the way up to global scope, in pursuit of finding the name of the parameter / variable name used.

	- We can only access parameters / varibales that are up the scope chain however outer scopes can NOT go into inner scopes to resolve the use of a parameter / variable.

4. Describe the four rules of the 'this' keyword.

	- Window Binding: if called globaly 'this' refers to the window as its default context.

	- Implicit binding of 'this': When ever a funciton is called by a preceeding dot. The object before that dot is 'this'. So when creating a method in an object, 'this' is 		   referrering to the object the method is in. This happens mostly in object litterals and is used inside of the objects methods.

	- new binding: Whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returnes by the constructor function.

	-  Explicit binding, this overrides which object 'this' is referring to.


5. Why do we need super() in an extended class?

 	super is what allows us to inherit from the parent class. Extends calls the class and super points to the extend and allows us to inherit both properties an methods in one go.  

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
