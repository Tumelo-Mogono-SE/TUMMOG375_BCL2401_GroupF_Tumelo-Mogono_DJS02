const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  console.log(dividend);
  console.log(divider)
  
  let divideResult = dividend / divider;

  try {
    if ( dividend === "" || divider === "") {
      
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      result.classList.add("error-message");
  
    } else if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Input values should be numbers.")
      // console.error("Invalid input values", new Error("Input values should be numbers.") );
      
    } else if ( divider === "0") {
      throw new Error("Divided by zero")
    } else if ( dividend < 0 || divider < 0) {
      throw new Error("Input values should be postive numbers");
    } else {
      result.classList.remove("error-message");
      result.innerText = Math.floor(divideResult);
      console.log(divideResult)
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
  }

});