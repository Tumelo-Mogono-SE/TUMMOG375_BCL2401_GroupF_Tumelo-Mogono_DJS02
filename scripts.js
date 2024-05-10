const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  let divideResult = dividend / divider;

  // Added try catch method to run the conditional statements to check whether inputs are not empty, are not a number, the divider is not a zero and if the inputs are not a negative number
  // If true I throw specific error messages which are caught in the catch, if false the results of the inputs is inserted into the result element and if it is a decimal it is rounded off.
  // In the catch a have conditional statements which check if the error message matches the provided string and if true error messages are consoled and a classlist is added to the result element to utilize the CSS style provided.
  try {
    if ( dividend === "" || divider === "") {
      
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      result.classList.add("error-message");
  
    } else if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Input values should be numbers.")

      
    } else if ( divider === "0") {
      throw new Error("Divided by zero")
    } else if ( dividend < 0 || divider < 0) {
      throw new Error("Input values should be postive numbers");
    } else {
      result.classList.remove("error-message");
      result.innerText = Math.floor(divideResult);
    };
  } catch (error) {
    if (error.message === "Input values should be numbers.") {
      result.classList.add("critical-error");
      result.innerText = "Something critical went wrong. Please reload the page.";
      console.error("An unexpected error occurred,", error)
    } else if (error.message === "Divided by zero") {
      result.classList.add("error-message");
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error("An unexpected error occurred,", error)
    } else if (error.message === "Input values should be postive numbers") {
      result.classList.add("error-message");
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error("An unexpected error occurred,", error);
    } else {
      console.error("An unexpected error occurred,", error);
      result.classList.add("error-message");
      result.innerText = "An unexpected error occurred. Please try again later.";
    }
  };

});