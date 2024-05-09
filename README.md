# DJS02 Project Brief: Whole Number Divider

This project focuses on enhancing a web-based Whole Number Divider application. It's designed to help us apply the knowledge of error handling, guided by specific user stories. 

#### Project Overview

The existing codebase for the Whole Number Divider meets certain user stories but falls short on others. Our task is to modify and extend the code to address all specified user stories, ensuring a robust, user-friendly application.

![alt text](image.png)

# Project Process
* I firstly started by accessing the starter code from the repository of codespace. I then went to adjust the html file by moving the script tag into the end of the body to improve loading and execution for rendering and running. 
* Inside the JavaScript file, I did the calculation of division using the variable created from the object containing values from the input in the form and assigned the calculation to a variable.
* I then created an a chain of conditional statments which check if both the dividend or divider are empty, another one that checks if the dividend or divider are not numbers, another one that checks if dividend or divider are not less than zero"negative numbers" and then check if the divider is a zero. If one of those conditional statements are true they throw an error or in the case of an empty string it just assignes a string message to the results element. All this is put into a try catch method. If all the conditions are not true the the result element will have the rounded off number from the calculation variable assigned to it.
* Inside the catch I then have a set of conditional statements which check if the thrown error message is equal to the string message I provided inside the condition and if true I console the error, assign a string message to the result element and add the appropiate class name to the result element. I then have and else which will simple throw an error of any unexpected error which might occurr.

# Challenges
The one challenge I had was figuring out which method to use to log the errors and get the callstack in the browser console. The other trouble I had was figuring out if the program crashed or not, maybe this might be due to not fully understanding what the content refers to as a program crash.

# Feedback

This project was nice to work on, it applied different ways of handling errors instead of just letting the code crash or stop working. It being able to pick up multiple incorrect inputs and reporting to the user and at times logging the error in the console.

